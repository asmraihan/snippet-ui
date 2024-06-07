import { Registry } from "@/registry/schema";
import * as React from "react";

const snippet: Registry = {

  //? Buttons
  "shiny-button": {
    name: "shiny-button",
    type: "components:ui",
    files: ["registry/components/snippet/shiny-button.tsx"],
  },

  //? Components
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

  //? Text Animations
  "fade-text": {
    name: "fade-text",
    type: "components:ui",
    files: ["registry/components/snippet/fade-text.tsx"],
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

    //? Components

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

  //? Text Animations
  "fade-text-demo": {
    name: "fade-text-demo",
    type: "components:demo",
    files: ["registry/components/demo/fade-text-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/fade-text-demo"),
    ),
  },
  
};

export const registry: Registry = {
  ...snippet,
  ...demo,
};
