import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Community",
      href: "https://snippet-ui.live/community",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "React.js",
              href: `/docs/installation/react`,
              items: [],
            },
          ],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Dock menu",
          href: `/docs/components/dock-menu`,
          items: [],
        },
        {
          title: "Text Cloud",
          href: `/docs/components/text-cloud`,
          items: [],
        },
        {
          title: "Icon Cloud",
          href: `/docs/components/icon-cloud`,
          items: [],
        },
        {
          title: "Globe (Github)",
          href: `/docs/components/globe-github`,
          items: [],
        },
        {
          title: "Globe (Cobe)",
          href: `/docs/components/globe-cobe`,
          items: [],
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Shiny Button",
          href: `/docs/components/shiny-button`,
          items: [],
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Fade Text",
          href: `/docs/components/fade-text`,
          items: [],
          label: "",
        },
     
      ],
    },
  ],
};
