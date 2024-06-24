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
          title: "Animated Tabs",
          href: `/docs/components/animated-tabs`,
          items: [],
        },
        {
          title: "Line Tabs",
          href: `/docs/components/line-tabs`,
          items: [],
        },
        {
          title: "Dropdown menu",
          href: `/docs/components/dropdown-menu`,
          items: [],
        },
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
        {
          title: "3D Card",
          href: `/docs/components/3d-card`,
          items: [],
        },
        {
          title: "Shiny Card",
          href: `/docs/components/shiny-card`,
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
        {
          title: "Button Animation",
          href: `/docs/components/button-animation`,
          items: [],
        },
        {
          title: "Expand Button",
          href: `/docs/components/expand-button`,
          items: [],
        },
      ],
    },
    {
      title: "Inputs",
      items: [
        {
          title: "Input Focus Animation",
          href: `/docs/components/input-focus-animation`,
          items: [],
        },
        {
          title: "Input Focus Blur",
          href: `/docs/components/input-focus-blur`,
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
    {
      title: "Carousel",
      items: [
        {
          title: "Animated Slider",
          href: `/docs/components/animated-slider`,
          items: [],
          label: "",
        },
     
      ],
    },
  ],
};
