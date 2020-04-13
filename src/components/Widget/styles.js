import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  // icon button styles depending on widget type (type 2 is in the second line of the dashboard)
  widgetIconButton: {
    color:"white",
    paddingBottom:"15px",
    paddingTop:"5px"
  },
  widgetIconButton2: {
    color:"black",
    paddingBottom:"15px",
    paddingTop:"5px"
  },
  widgetTypography: {
    color:"white",
    paddingBottom:"15px",
    paddingTop:"5px" 
  },
  widgetTypography2: {
    color:"black",
    paddingBottom:"15px",
    paddingTop:"5px" 
  },
  widgetWrapper2: {
    display: "flex",
    minHeight: "100%",
    borderRadius: "6px !important",  
    borderTop: "1.5px solid rgb(66, 110, 253)",
  },
  widgetWrapper: {
    display: "flex",
    minHeight: "100%",
    borderRadius: "6px !important", 
    border: "1.5px solid rgb(66, 110, 253)", 
    //borderTop: "1.5px solid rgb(66, 110, 253)";

  },
  widgetHeader: {
    backgroundColor:"rgb(66, 110, 253)", // background color of Widget Headers 
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
     
  },
  widgetHeader2: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black !important",
     
  },
  widgetRoot: {
    boxShadow: theme.customShadows.widget,
  },
  widgetBody: {
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  noPadding: {
    padding: 0,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
  },
  moreButton: {
    margin: -theme.spacing(1),
    padding: 0,
    width: 40,
    height: 40,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "rgba(255, 255, 255, 0.35)",
    },
  }
}));
