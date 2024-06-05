import { Registry } from "@/registry/schema";
import * as React from "react";

const ui: Registry = {

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
  }
  
};
export const registry: Registry = {
  ...ui,
  ...demo,
};
