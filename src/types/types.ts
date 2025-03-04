export type NavigationHandler = {
  handleNavigation: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
};