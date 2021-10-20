import { Grid, Card, makeStyles, TextField, Button, CardHeader, CircularProgress, CardContent, Table, TableBody, TableContainer, Paper, TableRow, TableCell } from "@material-ui/core";
import React, { useState } from "react";
import {getInfoOfAsteroidApi, getInfoOfrendomAsteroidApi} from "./../../api/api"
import {receiveCall, endCall} from  '../../video-call/tokbox';

const useStyles = makeStyles({
  container: {
    margin: "20px auto",
    padding: "30px",
    maxWidth: "700px"
  },
  buttonBlock: {
    display: "flex",
    justifyContent: "space-between"
  },
  table: {
    minWidth: 320,
  },
  tableHeader:{
    color:"#3f51b5;"
  }
});

export const Asteroid = () => {
  const classes = useStyles();
  const [asteroidId , setAsteroidId] = useState("");
  const [loading, setLoading ]= useState(false);
  const [asteroidDetail, setAsteroidDetail] = useState();
  
  const handleAsteroidId = (event) =>{
    if(event && event.target && event.target.value){
      setAsteroidId(event.target.value)
    }
  }

  const getInfoOfAsteroid = () =>{
    if(asteroidId){
      setLoading(true);
      getInfoOfAsteroidApi(asteroidId)
      .then((response)=>{
        if(response && response.data && response.data){
          setAsteroidDetail(response.data)
        }
        setLoading(false);
      })
      .catch((e)=>{
        console.log("Error",e)
        setLoading(false);
      })
    }
  }

  const getRendomAsteroid = () => {
    setLoading(true);
    getInfoOfrendomAsteroidApi()
    .then((response)=>{
      if(response && response.data && response.data.near_earth_objects){
        const rendomId = Math.floor(Math.random() * 20);
        setAsteroidId(response.data.near_earth_objects[rendomId - 1 ].id)
        setAsteroidDetail(response.data.near_earth_objects[rendomId - 1 ])
        setLoading(false);
      }
    })
    .catch((e)=>{
      console.log("Error",e)
      setLoading(false);
    })
  }

  return (
    <>
    <Card className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" fullWidth label="Enter Asteroid ID" variant="outlined" value={asteroidId} onChange={handleAsteroidId}/>
        </Grid>
        <Grid item xs={12} className={classes.buttonBlock}>
          <Button variant="contained" color="primary" disabled={asteroidId===""} onClick={getInfoOfAsteroid}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={getRendomAsteroid}>
            Random Asteroid
          </Button>
          {/* <Button variant="contained" color="secondary" onClick={receiveCall}>
            Receive call
          </Button> */}
          <Button variant="contained" color="secondary" onClick={endCall}>
            End call
          </Button>
        </Grid>
      </Grid>
    </Card>

    {
      (loading || asteroidDetail)  && (
      <Card className={classes.container}>
        <CardHeader
            className={classes.tableHeader}
            title="Asteroid Detail" 
            />
        <CardContent>
        {
          loading ? (
           <CircularProgress color="secondary" />):(
            <>
              { 
                asteroidDetail && 
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableBody>
                          <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">{asteroidDetail.name}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Nasa Jpl Url</TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">{asteroidDetail.nasa_jpl_url}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Is Potentially hazardous Asteroid</TableCell>
                            <TableCell align="left">:</TableCell>
                            <TableCell align="left">{asteroidDetail.is_potentially_hazardous_asteroid?"Yes":"No"}</TableCell>
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
              }
          </>
           )
        }
         </CardContent>
      </Card>
      )
        }
    </>
  );
}
