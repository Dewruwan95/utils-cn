# utils-cn 🌀

A lightweight utility function for conditionally applying and merging Tailwind CSS classes.

[![npm version](https://img.shields.io/npm/v/utils-cn.svg)](https://www.npmjs.com/package/utils-cn)
[![npm downloads](https://img.shields.io/npm/dm/utils-cn.svg)](https://www.npmjs.com/package/utils-cn)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ Conditionally apply class names
- ✅ Intelligently merge Tailwind CSS classes
- ✅ Resolve conflicting Tailwind utility classes
- ✅ TypeScript support
- ✅ Zero dependencies (other than clsx and tailwind-merge)
- ✅ Tiny bundle size

## Installation

```bash
# npm
npm install utils-cn

# yarn
yarn add utils-cn

# pnpm
pnpm add utils-cn
```

Note: This package has peer dependencies on `clsx` and `tailwind-merge`. Make sure to install them if not already installed:

```bash
npm install clsx tailwind-merge
```

## Usage

The `cn` function provides a simple way to conditionally apply classes and handle Tailwind CSS class conflicts:

### Basic Usage

```jsx
import cn from "utils-cn";

function Button({ variant, isActive, className }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-200 text-gray-800",
        isActive && "ring-2 ring-offset-2",
        className
      )}
    >
      Click me
    </button>
  );
}
```

### Handling Class Conflicts

The `cn` function automatically resolves Tailwind CSS class conflicts:

```jsx
// Without utils-cn:
// The mt-4 class would remain and potentially conflict with mt-6
"mt-4 p-2 mt-6";

// With utils-cn:
// The mt-4 class is intelligently overridden by mt-6
cn("mt-4 p-2", "mt-6"); // -> "p-2 mt-6"
```

### With React Components

```jsx
import React from "react";
import cn from "utils-cn";

type TitleProps = {
  children: React.ReactNode,
  className?: string,
  size?: "sm" | "md" | "lg",
};

export default function Title({
  children,
  className,
  size = "md",
}: TitleProps) {
  return (
    <h1
      className={cn(
        "font-bold tracking-normal",
        size === "sm" && "text-xl md:text-2xl",
        size === "md" && "text-2xl md:text-4xl",
        size === "lg" && "text-3xl md:text-5xl lg:text-6xl lg:leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
```

### TypeScript Support

The package includes TypeScript types:

```tsx
import cn from "utils-cn";

// Full type safety with TypeScript
const className = cn(
  "base-class",
  true && "applied-class",
  false && "not-applied-class",
  { "conditional-class": true },
  ["array", "of", "classes"]
);
```

## Why utils-cn?

- **Simple API**: Just a single function with a straightforward interface
- **Tailwind-aware**: Intelligently handles Tailwind's utility class conflicts
- **Tiny footprint**: Minimal impact on your bundle size
- **Type-safe**: Full TypeScript support included

## How It Works

`utils-cn` combines two popular libraries:

1. `clsx` - For conditionally joining class names
2. `tailwind-merge` - For intelligently handling Tailwind CSS class conflicts

## API Reference

```typescript
function cn(...inputs: ClassValue[]): string;
```

### Parameters

- `inputs`: Any number of class values (strings, objects, arrays, undefined, null, booleans, etc.)

### Returns

- A merged string of class names with Tailwind conflicts resolved

## License

MIT
