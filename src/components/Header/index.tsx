import React from "react";
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Wibu from "../../pages/Wibu";
import Func from "../../pages/Func";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const StyledTab = withStyles({
  root: {
    fontWeight: "bold",
  },
})(Tab);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          centered
        >
          <StyledTab label="I'm a wibu" />
          <StyledTab label="Functional Component Excercise" />
        </Tabs>
      </AppBar>
      {value === 0 && <Wibu />}
      {value === 1 && <Func />}
    </div>
  );
}
