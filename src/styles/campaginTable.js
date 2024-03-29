import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  tableRoot: {
    width: "100%",
    overflowX: "auto"
  },
  tableHeader: {
    fontSize: "large",
    fontWeight: "bold"
  },
  statusCell: {
    display: "flex"
  },
  circle: {
    display: "inline-flex",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "red",
    alignSelf: "center",
    margin: "0 8px"
  }
});
