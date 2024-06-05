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
      href: "https://snipet-ui.app/roadmap",
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
