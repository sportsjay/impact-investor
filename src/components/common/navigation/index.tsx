import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ComponentRoute } from "../../../models/route/route";
import StyledLink from "./links";
import { useLocation } from "react-router-dom";

interface NavigationProps {
  routes: ComponentRoute[];
}

export default function Navigation(props: NavigationProps) {
  const navClasses: ClassNameMap = navStyles();

  // state
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("");

  // properties
  const routes: ComponentRoute[] = props.routes;

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, []);

  return (
    <nav className={navClasses.root}>
      <img
        src="assets/Banner_Long_With_Background.png"
        className={navClasses.headerImage}
      />
      <section className={navClasses.navigation}>
        {routes.map((route: ComponentRoute) => (
          <StyledLink
            onClick={() => setCurrentRoute(route.pathName)}
            to={route.path}
            isActive={currentRoute === route.pathName}
            title={route.pathName}
          />
        ))}
      </section>
    </nav>
  );
}

const navStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {},
  },
  headerImage: {
    width: "100vw",
    height: "auto",
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    alignItems: "center",
  },
}));
