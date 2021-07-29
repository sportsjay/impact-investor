import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HeaderText } from "../typography";

// import styles
import { ColorPalette } from "../styles/colors";

interface StyledLinkProps {
  to: string;
  onClick: Function;
  isActive: boolean;
  title: string;
}

export default function StyledLink(props: StyledLinkProps) {
  const linkClasses = linkStyles();

  // properties
  const to = props.to;
  const isActive = props.isActive;
  const title = props.title;
  const onClick = props.onClick;

  return (
    <Link to={to} className={linkClasses.root} onClick={() => onClick()}>
      <HeaderText style={{ fontSize: "20pt" }}>
        {title}
        <div
          className={linkClasses.underline}
          style={{ minWidth: isActive ? "100%" : 0 }}
        />
      </HeaderText>
    </Link>
  );
}

const linkStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none",
    textTransform: "capitalize",
    position: "relative",
    width: "max-content",
    boxSizing: "border-box",
    padding: theme.spacing(1),
  },
  underline: {
    position: "absolute",
    backgroundColor: ColorPalette.black1,
    bottom: 10,
    height: 2,
  },
}));
