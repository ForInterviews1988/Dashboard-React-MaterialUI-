import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Card,
} from "@material-ui/core";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import PieChartIcon from '@material-ui/icons/PieChart';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import CloudIcon from '@material-ui/icons/Cloud';
import LockIcon from '@material-ui/icons/Lock';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import OpacityIcon from '@material-ui/icons/Opacity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MapIcon from '@material-ui/icons/Map';
import classnames from "classnames";

// styles
import useStyles from "./styles";

export default function Widget({
  children,
  title,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  iconComponent,
  widgetType,
  mediaQ,
  ...props
}) {
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
      <div className={widgetType==="secondRowWidgets" ? classes.widgetWrapper2 : classes.widgetWrapper}> 
        <Paper className={classes.paper} classes={{ root: classes.widgetRoot }}>
          <div className={widgetType === "secondRowWidgets" ? classes.widgetHeader2 : classes.widgetHeader}> 
            {header ? (
              header
            ) : (
           
            <React.Fragment>

              {/* List ALL icon components like the following example (the first one) to include widget's header's icons */}
              {iconComponent === "PieChartIcon" ?  <PieChartIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"white"} }/> : <> </> }
              {iconComponent === "EmojiPeopleIcon" ?  <EmojiPeopleIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"white"} }/> : <> </> }
              {iconComponent === "BatteryFullIcon" ?  <BatteryFullIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"white"} }/> : <> </> }
              {iconComponent === "CloudIcon" ?  <CloudIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"white"} }/> : <> </> }         
              {iconComponent === "LockIcon" ?  <LockIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
              {iconComponent === "LocalShippingIcon" ?  <LocalShippingIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
              {iconComponent === "OpacityIcon" ?  <OpacityIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
              {iconComponent === "WbSunnyIcon" ?  <WbSunnyIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
              {iconComponent === "EventAvailableIcon" ?  <EventAvailableIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
              {iconComponent === "MapIcon" ?  <MapIcon style={mediaQ === true ? {display:"none",} :{marginBottom:"10px",marginLeft:"-5px", color:"black"} }/> : <> </> }         
      
              <Typography variant="h5" className={widgetType==="secondRowWidgets" ? classes.widgetTypography2 : classes.widgetTypography} >
                {title}
              </Typography>
              {!disableWidgetMenu && (
                <IconButton className={widgetType==="secondRowWidgets" ? classes.widgetIconButton2 : classes.widgetIconButton}
                  color="primary"
                  classes={{ root: classes.moreButton }}
                  aria-owns="widget-menu"
                  aria-haspopup="true"
                  onClick={() => setMoreMenuOpen(true)}
                  buttonRef={setMoreButtonRef}
                >
                  <MoreIcon />
                </IconButton>
              )}
            </React.Fragment>
            
          )}
        </div>
       
        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem>
          <Typography>Minimize</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Close</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
