import { Registry } from "@/registry/schema";
import * as React from "react";

const snippet: Registry = {

  "shiny-button": {
    name: "shiny-button",
    type: "components:ui",
    files: ["registry/components/snippet/shiny-button.tsx"],
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
};

const demo: Registry = {

  "shiny-button-demo": {
    name: "shiny-button-demo",
    type: "components:demo",
    files: ["registry/components/demo/shiny-button-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/shiny-button-demo"),
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
  
};

export const registry: Registry = {
  ...snippet,
  ...demo,
};
