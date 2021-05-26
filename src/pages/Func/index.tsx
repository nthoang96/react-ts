import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Container, Grid, Typography } from "@material-ui/core";
import Users from "../../constants/users.json";
import { VariantType, useSnackbar } from "notistack";
import withSnackbar from "./hocSnackBar";

function Func() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("mnguyen");
  const [pwd, setPwd] = React.useState("123456");
  const [displayName, setDisplayName] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickVariant = (variant: VariantType, message: string) => {
    enqueueSnackbar(message, { variant });
  };

  const handleLogout = () => {
    setDisplayName("");
  };

  const handleCheckAuthor = () => {
    for (const user of Users) {
      if (user.username === name && user.password === pwd) {
        setDisplayName(user.display_name);
        handleClickVariant("success", "Login success!");
        setOpen(false);
      } else {
        handleClickVariant("error", "Username or Password invalid!");
        setOpen(true);
      }
    }
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Grid container justify="center" alignItems="center" direction="column">
        <Typography variant="h3">
          {displayName && `Hi, ${displayName}`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={displayName ? handleLogout : handleClickOpen}
        >
          {displayName ? "Logout" : "Login"}
        </Button>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Please Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="User Name"
              type="text"
              fullWidth
              placeholder="admin"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="pwd"
              label="Password"
              type="password"
              placeholder="admin"
              fullWidth
              onChange={(e) => setPwd(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCheckAuthor} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default withSnackbar(Func);
