import { FunctionComponent } from "react";

interface ComponentRouteProps {
  path: string;
  pathName: string;
  isPrivate: boolean;
  page: FunctionComponent;
}

export class ComponentRoute {
  public path: string;
  public pathName: string;
  public isPrivate: boolean;
  public page: FunctionComponent;
  constructor({ path, pathName, isPrivate, page }: ComponentRouteProps) {
    this.path = path;
    this.pathName = pathName;
    this.isPrivate = isPrivate;
    this.page = page;
  }
}
