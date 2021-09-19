import { makeStyles, Theme } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React from "react";
import { Investor } from "../../models/investor";
import { ColorPalette } from "../common/styles/colors";
import { HeaderText } from "../common/typography";

interface InvestorCardProps {
  model: Investor;
  onClick: VoidFunction;
}

export function InvestorCard(props: InvestorCardProps) {
  const classes = investorStyles();

  // init properties
  const model: Investor = props.model;
  const onClick: VoidFunction = props.onClick;

  return (
    <div className={classes.root} onClick={onClick}>
      <header className={classes.header}>
        <img src="" alt="none" />
      </header>
      <HeaderText className={classes.headerText}>{model.name}</HeaderText>
      <section className={classes.more}>
        <ArrowRight />
      </section>
    </div>
  );
}

const investorStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 140,
    minWidth: 200,
    borderRadius: 20,
    width: "max-content",
    backgroundColor: ColorPalette.blue3,
    display: "flex",
    flexDirection: "column",
    transition: "ease-in 0.04s",
    cursor: "pointer",
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,
    "&:hover": {
      transform: "scale(1.02)",
    },
    "&:active": {
      filter: "brightness(0.5)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      maxWidth: 320,
      height: "max-content",
    },
  },
  header: {
    padding: `${theme.spacing(4)}px ${theme.spacing(1)}px ${theme.spacing(
      2
    )}px ${theme.spacing(1)}px`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    boxSizing: "border-box",
  },
  headerText: {
    fontSize: "16pt",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: ColorPalette.blue2,
    color: ColorPalette.white,
  },
  more: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
    boxSizing: "border-box",
  },
}));
