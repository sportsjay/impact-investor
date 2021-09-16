import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HeaderText } from "../typography";

// import styles
import { ColorPalette } from "../styles/colors";

interface StyledLinkProps {
  to: string;
  onClick?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouserLeave?: VoidFunction;
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
  const onMouseEnter = props.onMouseEnter;
  const onMouseLeave = props.onMouserLeave;

  return (
    <Link
      to={to}
      className={linkClasses.root}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <HeaderText
        style={{
          fontSize: "20pt",
          color: isActive ? ColorPalette.blue2 : ColorPalette.black1,
          textAlign: "center",
          fontWeight: "bold",
          borderBottom: `${isActive ? "2px" : "0px"} solid ${
            ColorPalette.blue2
          }`,
        }}
      >
        {title.toUpperCase()}
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
  // underline: {
  //   position: "absolute",
  //   backgroundColor: ColorPalette.black1,
  //   bottom: 10,
  //   height: 2,
  // },
}));
