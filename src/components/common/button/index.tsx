import React from "react";
import { Button, ButtonProps, makeStyles } from "@material-ui/core";
import { ColorPalette } from "../styles/colors";

interface PrimaryButtonProps extends ButtonProps {
  backgroundColor?: string;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  const classes = primaryButtonStyles();
  return (
    <Button
      className={classes.root}
      variant="contained"
      style={{ backgroundColor: props.backgroundColor ?? ColorPalette.orange1 }}
    >
      {props.children}
    </Button>
  );
}

const primaryButtonStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    textTransform: "none",
    fontSize: "16pt",
    borderRadius: 2,
    color: ColorPalette.white,
  },
}));
