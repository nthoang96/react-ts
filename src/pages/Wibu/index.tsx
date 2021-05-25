import React from "react";
import { getWibu, Anime } from "../../apis/wibu";
import WibuCard from "../../components/WibuCard";
import { Container, Grid } from "@material-ui/core";

const Wibu: React.FC = () => {
  const [data, setData] = React.useState<Anime[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await getWibu([2021]);
      setData(resp);
    };
    fetchData();
  }, []);
  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid container justify="center" spacing={4}>
        {data.map((wibu) => {
          return (
            <Grid key={wibu.id} item>
              <WibuCard data={wibu} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Wibu;
