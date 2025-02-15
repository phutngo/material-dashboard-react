import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//structure is Card then underneither is Card Header and CardBody
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Button from '@material-ui/core/Button';

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles); //a hook by material-ui to apply styles https://material-ui.com/styles/basics/
//styles is defined above.

//structure is Card then underneith is Card Header and CardBody

export default function CycleTime() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>CARD HEADER - Material Dashboard Heading </h4>
        <p className={classes.cardCategoryWhite}>
          Created using Roboto Font Family
        </p>
      </CardHeader>
      <CardBody>
        <div>CARD BODY here</div>
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
