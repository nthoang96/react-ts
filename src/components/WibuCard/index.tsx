import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Anime } from "../../apis/wibu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400,
  },
  media: {
    height: 200,
  },
});

export default function WibuCard(props: { data: Anime }) {
  const classes = useStyles();
  const {
    data: {
      attributes: {
        titles,
        posterImage,
        canonicalTitle,
        startDate,
        description,
      },
    },
  } = props;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={posterImage.small}
        title={canonicalTitle}
      />
      <CardContent>
        <Typography variant="h5">{titles.ja_jp}</Typography>
        <Typography variant="h6">{startDate}</Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          noWrap={true}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
