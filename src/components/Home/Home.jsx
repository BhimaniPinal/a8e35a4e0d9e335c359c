import { Grid, Card, makeStyles } from "@material-ui/core";
import "./Home.css";
import React, { useState, useEffect, useCallback } from "react";

const useStyles = makeStyles({
  container: {
    margin: "20px auto",
    padding: "30px",
    maxWidth: "700px"
  }
});

export const Home = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    // code for on render data binding
  }, []);

  const onClick = useCallback(() => {
    //For change in input
  }, [message]);

  return (
    <Card className={classes.container}>
      <Grid container spacing={8}>
        <Grid item xs={12} onClick={onClick}>
          Message : {message}
        </Grid>
      </Grid>
    </Card>
  );
};
