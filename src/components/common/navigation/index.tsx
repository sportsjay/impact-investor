import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ComponentRoute } from "../../../models/route/route";
import StyledLink from "./links";
import { useLocation } from "react-router-dom";

// import banner
import bannerImage from "../../../assets/Banner_Long_With_Background.png";
import { ColorPalette } from "../styles/colors";

interface NavigationProps {
  routes: ComponentRoute[];
}

export default function Navigation(props: NavigationProps) {
  const navClasses: ClassNameMap = navStyles();

  // properties
  const routes: ComponentRoute[] = props.routes;

  // state
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  return (
    <nav className={navClasses.root}>
      <img
        src={bannerImage}
        alt="No banner"
        className={navClasses.headerImage}
      />
      <section className={navClasses.navigation}>
        {routes.map((route: ComponentRoute) => (
          <StyledLink
            onClick={() => setCurrentRoute(route.path)}
            to={route.path}
            isActive={currentRoute === route.path}
            title={route.pathName}
          />
        ))}
      </section>
    </nav>
  );
}

const navStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: ColorPalette.gray2,
    [theme.breakpoints.down("sm")]: {},
  },
  headerImage: {
    width: "100%",
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
