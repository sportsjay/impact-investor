import React from "react";
import {
  makeStyles,
  Theme,
  Typography,
  TypographyProps,
} from "@material-ui/core";

// components
function Text(props: TypographyProps) {
  const textClasses = textStyles();
  return <Typography {...props}>{props.children}</Typography>;
}

function HeaderText(props: TypographyProps) {
  const headerTextClasses = headerTextStyles();
  return <Typography {...props}>{props.children}</Typography>;
}

// export components
export { Text, HeaderText };

// component styles
const textStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const headerTextStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
