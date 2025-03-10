import { Registry } from "@/registry/schema";
import * as React from "react";

const snippet: Registry = {

  //? Buttons
  "shiny-button": {
    name: "shiny-button",
    type: "components:ui",
    files: ["registry/components/snippet/shiny-button.tsx"],
  },
  "button-animation": {
    name: "button-animation",
    type: "components:ui",
    files: ["registry/components/snippet/button-animation.tsx"],
  },
  "expand-button": {
    name: "expand-button",
    type: "components:ui",
    files: ["registry/components/snippet/expand-button.tsx"],
  },
  "ripple-button": {
    name: "ripple-button",
    type: "components:ui",
    files: ["registry/components/snippet/ripple-button.tsx"],
  },

  //? Inputs
  "input-focus-animation": {
    name: "input-focus-animation",
    type: "components:ui",
    files: ["registry/components/snippet/input-focus-animation.tsx"],
  },
  "input-focus-blur": {
    name: "input-focus-blur",
    type: "components:ui",
    files: ["registry/components/snippet/input-focus-blur.tsx"],
  },

  //? Components
  "animated-tabs": {
    name: "animated-tabs",
    type: "components:ui",
    files: ["registry/components/snippet/animated-tabs.tsx"],
  },
  "line-tabs": {
    name: "line-tabs",
    type: "components:ui",
    files: ["registry/components/snippet/line-tabs.tsx"],
  },
  "dropdown-menu": {
    name: "dropdown-menu",
    type: "components:ui",
    files: ["registry/components/snippet/dropdown-menu.tsx"],
  },
  "dock-menu": {
    name: "dock-menu",
    type: "components:ui",
    files: ["registry/components/snippet/dock-menu.tsx"],
  },
  "text-cloud": {
    name: "icon-cloud",
    type: "components:ui",
    files: ["registry/components/snippet/text-cloud.tsx"],
  },
  "icon-cloud": {
    name: "icon-cloud",
    type: "components:ui",
    files: ["registry/components/snippet/icon-cloud.tsx"],
  },
  "globe-cobe": {
    name: "globe-cobe",
    type: "components:ui",
    files: ["registry/components/snippet/globe-cobe.tsx"],
  },
  "globe-github": {
    name: "globe-github",
    type: "components:ui",
    files: ["registry/components/snippet/globe-github.tsx"],
  },
  "3d-card": {
    name: "3d-card",
    type: "components:ui",
    files: ["registry/components/snippet/3d-card.tsx"],
  },
  "interactive-card": {
    name: "interactive-card",
    type: "components:ui",
    files: ["registry/components/snippet/interactive-card.tsx"],
  },
  "shiny-card": {
    name: "shiny-card",
    type: "components:ui",
    files: ["registry/components/snippet/shiny-card.tsx"],
  },
  "numeric-counter": {
    name: "numeric-counter",
    type: "components:ui",
    files: ["registry/components/snippet/numeric-counter.tsx"],
  },
  "chat-component": {
    name: "chat-component",
    type: "components:ui",
    files: ["registry/components/snippet/chat-component.tsx"],
  },
  "kanban-board": {
    name: "kanban-board",
    type: "components:ui",
    files: ["registry/components/snippet/kanban-board.tsx"],
  },
  "scroll-progress-bar": {
    name: "scroll-progress-bar",
    type: "components:ui",
    files: ["registry/components/snippet/scroll-progress-bar.tsx"],
  },
  "folding-icon": {
    name: "folding-icon",
    type: "components:ui",
    files: ["registry/components/snippet/folding-icon.tsx"],
  },

  //? Nav Bar

  "dynamic-island-nav": {
    name: "dynamic-island-nav",
    type: "components:ui",
    files: ["registry/components/snippet/dynamic-island-nav.tsx"],
  },

  //? Text Animations
  "fade-text": {
    name: "fade-text",
    type: "components:ui",
    files: ["registry/components/snippet/fade-text.tsx"],
  },
  "circle-text": {
    name: "circle-text",
    type: "components:ui",
    files: ["registry/components/snippet/circle-text.tsx"],
  },
  "flip-words": {
    name: "flip-words",
    type: "components:ui",
    files: ["registry/components/snippet/flip-words.tsx"],
  },

  //? Slider
  "animated-slider": {
    name: "animated-slider",
    type: "components:ui",
    files: ["registry/components/snippet/animated-slider.tsx"],
  },
};

const demo: Registry = {

  //? Buttons

  "shiny-button-demo": {
    name: "shiny-button-demo",
    type: "components:demo",
    files: ["registry/components/demo/shiny-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/shiny-button-demo"),
    ),
  },
  "button-animation-demo": {
    name: "button-animation-demo",
    type: "components:demo",
    files: ["registry/components/demo/button-animation-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/button-animation-demo"),
    ),
  },
  "expand-button-demo": {
    name: "expand-button-demo",
    type: "components:demo",
    files: ["registry/components/demo/expand-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/expand-button-demo"),
    ),
  },
  "ripple-button-demo": {
    name: "ripple-button-demo",
    type: "components:demo",
    files: ["registry/components/demo/ripple-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/ripple-button-demo"),
    ),
  },

  //? Inputs
  "input-focus-animation-demo": {
    name: "input-focus-animation-demo",
    type: "components:demo",
    files: ["registry/components/demo/input-focus-animation-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/input-focus-animation-demo"),
    ),
  },
  "input-focus-blur-demo": {
    name: "input-focus-blur-demo",
    type: "components:demo",
    files: ["registry/components/demo/input-focus-blur-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/input-focus-blur-demo"),
    ),
  },

  //? Components
  "animated-tabs-demo": {
    name: "dock-menu-demo",
    type: "components:demo",
    files: ["registry/components/demo/animated-tabs-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/animated-tabs-demo"),
    ),
  },
  "line-tabs-demo": {
    name: "dock-menu-demo",
    type: "components:demo",
    files: ["registry/components/demo/line-tabs-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/line-tabs-demo"),
    ),
  },
  "dock-menu-demo": {
    name: "dock-menu-demo",
    type: "components:demo",
    files: ["registry/components/demo/dock-menu-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/dock-menu-demo"),
    ),
  },
  "dropdown-menu-demo": {
    name: "dropdown-menu-demo",
    type: "components:demo",
    files: ["registry/components/demo/dropdown-menu-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/dropdown-menu-demo"),
    ),
  },
  "text-cloud-demo": {
    name: "text-cloud-demo",
    type: "components:demo",
    files: ["registry/components/demo/text-cloud-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/text-cloud-demo"),
    ),
  },
  "icon-cloud-demo": {
    name: "icon-cloud-demo",
    type: "components:demo",
    files: ["registry/components/demo/icon-cloud-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/icon-cloud-demo"),
    ),
  },
  "globe-cobe-demo": {
    name: "globe-cobe-demo",
    type: "components:demo",
    files: ["registry/components/demo/globe-cobe-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/globe-cobe-demo"),
    ),
  },
  "globe-github-demo": {
    name: "globe-github-demo",
    type: "components:demo",
    files: ["registry/components/demo/globe-github-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/globe-github-demo"),
    ),
  },
  "3d-card-demo": {
    name: "3d-card-demo",
    type: "components:demo",
    files: ["registry/components/demo/3d-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/3d-card-demo"),
    ),
  },
  "interactive-card-demo": {
    name: "interactive-card-demo",
    type: "components:demo",
    files: ["registry/components/demo/interactive-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/interactive-card-demo"),
    ),
  },
  "shiny-card-demo": {
    name: "shiny-card-demo",
    type: "components:demo",
    files: ["registry/components/demo/shiny-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/shiny-card-demo"),
    ),
  },
  "numeric-counter-demo": {
    name: "numeric-counter-demo",
    type: "components:demo",
    files: ["registry/components/demo/numeric-counter-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/numeric-counter-demo"),
    ),
  },
  "chat-component-demo": {
    name: "chat-component-demo",
    type: "components:demo",
    files: ["registry/components/demo/chat-component-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/chat-component-demo"),
    ),
  },
  "kanban-board-demo": {
    name: "kanban-board-demo",
    type: "components:demo",
    files: ["registry/components/demo/kanban-board-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/kanban-board-demo"),
    ),
  },
  "scroll-progress-bar-demo": {
    name: "scroll-progress-bar-demo",
    type: "components:demo",
    files: ["registry/components/demo/scroll-progress-bar-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/scroll-progress-bar-demo"),
    ),
  },
  "folding-icon-demo": {
    name: "folding-icon-demo",
    type: "components:demo",
    files: ["registry/components/demo/folding-icon-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/folding-icon-demo"),
    ),
  },

  //? Nav Bars
  "dynamic-island-nav-demo": {
    name: "dynamic-island-nav-demo",
    type: "components:demo",
    files: ["registry/components/demo/dynamic-island-nav-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/dynamic-island-nav-demo"),
    ),
  },

  //? Text Animations
  "fade-text-demo": {
    name: "fade-text-demo",
    type: "components:demo",
    files: ["registry/components/demo/fade-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/fade-text-demo"),
    ),
  },
  "circle-text-demo": {
    name: "circle-text-demo",
    type: "components:demo",
    files: ["registry/components/demo/circle-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/circle-text-demo"),
    ),
  },
  "flip-words-demo": {
    name: "flip-words-demo",
    type: "components:demo",
    files: ["registry/components/demo/flip-words-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/flip-words-demo"),
    ),
  },

   

  //? Slider
  "animated-slider-demo": {
    name: "animated-slider-demo",
    type: "components:demo",
    files: ["registry/components/demo/animated-slider-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/animated-slider-demo"),
    ),
  },

};

export const registry: Registry = {
  ...snippet,
  ...demo,
};
