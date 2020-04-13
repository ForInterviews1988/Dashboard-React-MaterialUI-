import React, { useState } from "react";
import {
  Paper,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
   Route,
   Switch,
   Redirect,
   withRouter,
  } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/styles";
import ApexLineChart from "../charts/components/ApexLineChart";
import Link from '@material-ui/core/Link';



// BigCalendar
import BigCalendar from "react-big-calendar";
import moment from "moment";
// Tables component Imported For the Routing Example below : Widget 1 Image 1
import Tables from "../tables/Tables";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";



// styles
import useStyles from "./styles";
import cap1 from "./images/Capture.JPG";

import wid1im2 from "./images/wid1im2.JPG";
import wid2im1 from "./images/wid2im1.JPG";
import wid2im2 from "./images/wid2im2.JPG";
import wid3im1 from "./images/wid3im1.JPG";
import wid3im2 from "./images/wid3im2.JPG";

import wid4im1 from "./images/wid4im1.JPG";
import wid4im2 from "./images/wid4im2.JPG";
import wid4im3 from "./images/wid4im3.JPG";
import wid4im4 from "./images/wid4im4.JPG";


import wid4im12 from "./images/wid4im12.JPG";
import wid4im22 from "./images/wid4im22.JPG";
import wid4im32 from "./images/wid4im32.JPG";
import wid4im42 from "./images/wid4im42.JPG";
import wid2im12 from "./images/wid2im12.JPG";
import wid2im22 from "./images/wid2im22.JPG";
import wid2im3 from "./images/wid2im3.JPG";
import wid2im4 from "./images/wid2im4.JPG";


// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
var base = 'http://www.openstreetmap.org/export/embed.html';


export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // Remove icon when screen between 960px & 1050px
  const matches = useMediaQuery('(min-width:960px) and (max-width:1050px)');

  // Big Calendar
  BigCalendar.momentLocalizer(moment);
  

  // Map
  var lon = 78.88038;
  var lat = 19.6222475;
  //var iframe= document.createElement('iframe');
  var fullsrc = base
    + '?layer=mapnik'
    + '&bbox=' + [lon , lat , lon , lat ].join(',')
    + '&marker=' + [lat, lon].join(',')

   var height='420px'; 
   var width= '100%';


  return (
    <>
      <PageTitle title="Dashboard" subtitle="Control Panel" /* button="Latest Reports" */ />
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} sm={6} xs={12}>

          {/* This is Widget type 1 you could use Widget type 2 (styles 2 as well) for the below next 4 widgets in the Dashboard */}
          <Widget
            title="Occupancy"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card} 
             iconComponent = "PieChartIcon"   
             mediaQ={matches}           
            >                
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >   
              <Grid item className={classes.gridItem}  >
                <Paper>
                  <center>
                    {/* Image Div goes here */}                   
                   <Link href="#" onClick={(e) => { e.preventDefault();
                        props.history.push('/app/tables')}} >
                      <img src={cap1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                   </Link>
                   <Switch>
                     <Route path="/app/tables" component={Tables}/>
                   </Switch>  
                </center>
                </Paper>
               <center>
               <Typography color="text" colorBrightness="secondary">
                  Rooms/Parking
                </Typography>
                </center>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Paper>
                  <center>
                  {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={wid1im2} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                  </center>
                </Paper>
                  <center>
                    <Typography color="text" colorBrightness="secondary">
                      ATS
                    </Typography>
                  </center>
              </Grid>
            </Grid>         
          </Widget>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>

          {/* This is Widget type 1 you could use Widget type 2 (styles 2 as well) for the below next 4 widgets in the Dashboard */}
          <Widget
            title="People"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card} 
             iconComponent = "EmojiPeopleIcon"
             mediaQ={matches}
            >        
           
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >   
              <Grid item className={classes.gridItem}  >
                <Paper>
                  <center>
                    {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={wid2im1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                </center>
                </Paper>
               <center>
               <Typography color="text" colorBrightness="secondary">
                  Input/Output
                </Typography>
                </center>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Paper>
                  <center>
                  {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={wid2im2} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                  </center>
                </Paper>
                  <center>
                    <Typography color="text" colorBrightness="secondary">
                      Satisfaction
                    </Typography>
                  </center>
              </Grid>
            </Grid>         
          </Widget>
        </Grid>
        <Grid item  md={3} sm={6} xs={12}>

          {/* This is Widget type 1 you could use Widget type 2 (styles 2 as well) for the below next 4 widgets in the Dashboard */}
          <Widget
            title="Energy"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card} 
            iconComponent = "BatteryFullIcon"   mediaQ={matches}         >        
    
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >   
              <Grid item className={classes.gridItem}  >
                <Paper>
                  <center>
                    {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={wid3im1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                </center>
                </Paper>
               <center>
               <Typography color="text" colorBrightness="secondary">
                  Smart Light
                </Typography>
                </center>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Paper>
                  <center>
                  {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={wid3im2} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                  </center>
                </Paper>
                  <center>
                    <Typography color="text" colorBrightness="secondary">
                      Energy <br/>Statistics
                    </Typography>
                  </center>
              </Grid>
            </Grid>         
          </Widget>
        </Grid>
        <Grid item  md={3} sm={6} xs={12}>

          {/* This is Widget type 1 you could use Widget type 2 (styles 2 as well) for the below next 4 widgets in the Dashboard */}
          <Widget
            title="Air"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card} 
             iconComponent = "CloudIcon"
             mediaQ={matches}   
            >        
          
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >   
              <Grid item className={classes.gridItem}  >
                <Paper>
                  <center>
                    {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={cap1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                </center>
                </Paper>
               <center>
               <Typography color="text" colorBrightness="secondary">
                  Rooms/Parking
                </Typography>
                </center>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Paper>
                  <center>
                  {/* Image Div goes here */}
                    <a href="https://www.w3schools.com">
                      <img src={cap1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                    </a>
                  </center>
                </Paper>
                  <center>
                    <Typography color="text" colorBrightness="secondary">
                      ATS
                    </Typography>
                  </center>
              </Grid>
            </Grid>         
          </Widget>
        </Grid>

    {/* Second Line widgets (type 2) */}

        <Grid item  md={3} sm={6} xs={12}>

        <Widget
          title="Security"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card} 
          iconComponent = "LockIcon"  
          widgetType= "secondRowWidgets" 
          mediaQ={matches}
          >        
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im1} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                ANPR
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im2} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                    Access Control
                  </Typography>
                </center>
            </Grid>
          </Grid> 
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im3} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                Counting <br/>People
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im4} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                    Parcking
                  </Typography>
                </center>
            </Grid>
          </Grid>         
        </Widget>
        </Grid>
        <Grid item  md={3} sm={6} xs={12}>

        <Widget
          title="Logistic"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card} 
          iconComponent = "LocalShippingIcon"  
          widgetType= "secondRowWidgets" 
          mediaQ={matches}
          >        
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid2im12} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                Logistic Maps
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid2im22} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                  Show Sensors 
                    <br/> states
                  </Typography>
                </center>
            </Grid>
          </Grid> 
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid2im3} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                Logistics <br/>tracking
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid2im4} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                    Journey
                  </Typography>
                </center>
            </Grid>
          </Grid>         
        </Widget>
        </Grid>

        <Grid item  md={3} sm={6} xs={12}>
          <Widget title="Solar" upperTitle noBodyPadding widgetType= "secondRowWidgets" iconComponent = "WbSunnyIcon" mediaQ={matches} 
        > {/* from https://apexcharts.com/docs/react-charts/ */}
              <ApexLineChart />
          </Widget>

        </Grid>

        <Grid item  md={3} sm={6} xs={12}>

        <Widget
          title="Water"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card} 
          iconComponent = "OpacityIcon"  
          widgetType= "secondRowWidgets" 
          mediaQ={matches}
          >        
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im12} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                Leak detection
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im22} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                    Smart water 
                    <br/>
                    metering
                  </Typography>
                </center>
            </Grid>
          </Grid> 
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >   
            <Grid item className={classes.gridItem}  >
              <Paper>
                <center>
                  {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im32} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
              </center>
              </Paper>
            <center>
            <Typography color="text" colorBrightness="secondary">
                Water data <br/>analytic
              </Typography>
              </center>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Paper>
                <center>
                {/* Image Div goes here */}
                  <a href="https://www.w3schools.com">
                    <img src={wid4im42} alt="cap1"  className="img-avatar" style={{width:"100px"}} />
                  </a>
                </center>
              </Paper>
                <center>
                  <Typography color="text" colorBrightness="secondary">
                    Smart watering
                  </Typography>
                </center>
            </Grid>
          </Grid>         
        </Widget>
        </Grid>

        {/* Calendar Widget Grid source : https://www.npmjs.com/package/@material-ui/pickers downgraded version @npm : npm i @date-io/date-fns@1.3.13

        */}
        <Grid item md={6} xs={12}>
          
          <Widget
            title="Calendar"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card} 
            iconComponent = "EventAvailableIcon"  
            widgetType= "secondRowWidgets" 
            > 
          <div  style={{height:"400px"}}>
            {/* Source https://www.npmjs.com/package/react-big-calendar  Sample code:  https://codesandbox.io/s/q7plrlkvw?file=/index.js */}
              <BigCalendar 
                  events={events}
                  views={["month"]}
                  defaultDate={new Date(2018, 3, 1)}
              />
          </div>
              </Widget>
          </Grid>
        {/* Cartography Widget Grid */}
        <Grid item md={6}  xs={12}>
          <Widget
          title="Cartography"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card} 
          iconComponent = "MapIcon"  
          widgetType= "secondRowWidgets" 
          > 
            <iframe src={fullsrc} height={height} width={width}></iframe>
          </Widget>
        </Grid>

      </Grid>
    </>
  );
}

   