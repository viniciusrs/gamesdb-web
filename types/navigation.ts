import { ILink } from "./helpers";
import { ITitle } from "./titles";

export interface INavigationPaths extends ILink {
  children?: INavigationPaths;
}

export interface INavigation {
  titles: ITitle[];
  paths: INavigationPaths[];
}