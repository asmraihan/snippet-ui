# Contributing to Snippet UI

This guide will help you understand the directory structure and provide detailed instructions on how to add a new component to Snippet UI.


- [Getting Started](#getting-started)
  - [Fork and Clone the Repository](#fork-and-clone-the-repository)
  - [Adding a New Component](#adding-a-new-component)
    - [1. Add Sidebar Button Meta for Your Component](#1-add-sidebar-button-meta-for-your-component)
    - [2. Create Your Component](#2-create-your-component)
    - [3. Create a Basic Example Showcasing Your Component](#3-create-a-basic-example-showcasing-your-component)
    - [4. Create MDX Page for Your Component](#4-create-mdx-page-for-your-component)
    - [5. Add Registry Export](#5-add-registry-export)

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/asmraihan/snippet-ui/fork) to fork the repository.

2. **Clone your forked repository to your local machine**  
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/snippet-ui.git
   ```

3. **Navigate to the project directory**  
   ```bash
   cd snippet-ui
   ```

4. **Create a new branch for your changes**  
   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**  
   ```bash
   pnpm i
   ```

6. **Create a `.env.local` file**  
   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

7. **Run the project**  
   ```bash
   pnpm dev
   ```

## Adding a New Component

To add a new component to Snippet UI, you will need to modify several files. Follow these steps:

### 1. Add Sidebar Button Meta for Your Component

**File:** `config/docs.ts`

Add metadata for your component in the sidebar navigation.

```typescript
// Add sidebar button meta for your component
{
    title: "Example Component",
    href: `/docs/components/example-component`,
    items: [],
    label: "New",
}
```

### 2. Create Your Component

**File:** `registry/components/snippet/example-component.tsx`

Create the main component file.

```typescript
// Create your component here
import React from 'react'

const ExampleComponent = () => {
  return (
    <div>
      This is your component.
    </div>
  )
}

export default ExampleComponent;
```

### 3. Create a Basic Example Showcasing Your Component

**File:** `registry/components/demo/example-component-demo.tsx`

Provide a basic example to showcase your component.

```typescript
// Create a very basic example showcasing your component
import ExampleComponent from '@/registry/components/snippet-ui/example-component'

const ExampleComponentDemo = () => (
  <div className="relative justify-center">
    <ExampleComponent />
  </div>
)

export default ExampleComponentDemo;
```

### 4. Create MDX Page for Your Component

**File:** `content/docs/components/example-component.mdx`

Create an MDX file for documenting your component.

~~~md
---
title: Example Component
date: 2024-06-25
description: Example component for demonstrating Snippet UI integration
author: asmraihan
published: true
---

<ComponentPreview name="example-component-demo" />

<Steps>

### Installation

Copy and paste the following code into your project.

```text
components/snippet/example-component.tsx
```

<ComponentSource name="example-component" />

</Steps>

## Props

| Prop                      | Type                      | Description                                                  | Default  |
| ------------------------- | ------------------------- | ------------------------------------------------------------ | -------- |
| color                     | String                    | The color of the component                                   | "blue"   |

## Credits

- Credit to [shadcn](https://ui.shadcn.com/)
~~~


### 5. Add Registry Export

**File:** `registry/index.tsx`

Export your component and example in the registry.

```typescript
const ui: Registry = {
  // other components
    "example-component": {
    name: "example-component",
    type: "components:ui",
    files: ["registry/components/snippet/example-component.tsx"],
  },
}

const example: Registry = {
  // other examples
  "example-component-demo": {
    name: "example-component",
    type: "components:demo",
    files: ["registry/components/demo/example-component-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/demo/example-component-demo"),
    ),
  },
}
```

## Ask for Help

For any help or questions, please open a new GitHub issue and we will get back to you :)
