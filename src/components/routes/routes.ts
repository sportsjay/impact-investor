import { ComponentRoute } from "../../models/route/route";

// import pages
import ImpactInvestorPage from "../impact-investor";
import AboutUsPage from "../about-us";
import SocialEntrerprisePage from "../social-enterprise";

export const routeList: ComponentRoute[] = [
  new ComponentRoute({
    path: "/impact-investor",
    pathName: "impact investor",
    isPrivate: false,
    page: ImpactInvestorPage,
  }),
  new ComponentRoute({
    path: "/about-us",
    pathName: "about us",
    isPrivate: false,
    page: AboutUsPage,
  }),
  new ComponentRoute({
    path: "/social-enterprise",
    pathName: "social enterprise",
    isPrivate: false,
    page: SocialEntrerprisePage,
  }),
];
