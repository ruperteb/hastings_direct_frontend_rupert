export type NavItem = {
  name: string;
  url: string;
};

export type CTAButton = {
  name: string;
  url: string;
};

export type MainArticle = {
  title: string;
  description: string;
  imageUrl: string;
  ctaButton: CTAButton;
};

export type SidebarArticle = {
  title: string;
  description: string;
  url: string;
};

export type Sidebar = {
  title: string;
  articles: SidebarArticle[];
};

export type Article = {
  title: string;
  description: string;
  imageUrl: string;
};

export type Data = {
  navItems: NavItem[];
  mainArticle: MainArticle;
  sidebar: Sidebar;
  articles: Article[];
};
