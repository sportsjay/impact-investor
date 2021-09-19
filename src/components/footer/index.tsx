import React from "react";
import { makeStyles } from "@material-ui/core";
import { ColorPalette } from "../common/styles/colors";
import { HeaderText, Text } from "../common/typography";
import { PrimaryButton } from "../common/button";

export default function Footer() {
  const classes = footerStyles();
  return (
    <div className={classes.root}>
      <section className={classes.register}>
        <HeaderText
          className={classes.registerHeader}
          style={{ fontWeight: "bold" }}
        >
          Register Now:
        </HeaderText>
        <PrimaryButton>Sign Up Here</PrimaryButton>
      </section>
      <section className={classes.content}>
        <Text className={classes.location}>Level 8</Text>
        <Text className={classes.location}>​High Street Centre</Text>
        <Text className={classes.location}>​1 North Bridge Road</Text>
        <Text className={classes.location}>Singapore 179094</Text>
        <HeaderText className={classes.contactUs}>Contact Us</HeaderText>
        <Text className={classes.location}>ask.giicc@gmail.com</Text>
      </section>
    </div>
  );
}

const footerStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: ColorPalette.black1,
    display: "flex",
    flexDirection: "row",
    padding: 70,
    boxSizing: "border-box",
    width: "100%",
    height: "max-content",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(6),
    },
  },
  register: {
    paddingRight: theme.spacing(8),
    width: "40%",
  },
  registerHeader: {
    color: ColorPalette.blue3,
    fontSize: "28pt",
    marginBottom: theme.spacing(2),
  },
  content: {
    width: "60%",
  },
  location: {
    color: ColorPalette.blue3,
  },
  contactUs: {
    marginTop: theme.spacing(4),
    marginBottoM: theme.spacing(2),
    fontWeight: "bold",
    color: ColorPalette.blue3,
  },
}));
