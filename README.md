<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.plasmic.app">
    <img alt="Plasmic" role="img" src="https://cdn-images-1.medium.com/max/176/1*D1nV2o_le9dJEO3G80P4xg@2x.png" width="120">
  </a>
</p>
<h1 align="center">
  Plasmic
</h1>
<h3 align="center">
  The headless page builder + CMS for React, Vue, Angular, PHP, vanilla JS, and more.
</h3>
<p align="center">
  Drag and drop your own code components.
  Let non-developers create stunning content,
  and free up developers from pixel-pushing.
</p>

<p>&nbsp;</p>

<p align="center">
  <a href="https://www.plasmic.app">
    <img src="https://user-images.githubusercontent.com/7129/146098801-0691ff13-e302-40fb-827e-90488a7a28b4.gif"/>
  </a>
</p>

<p align="center">
  <a href="https://docs.plasmic.app/learn/quickstart">
    <img src="https://user-images.githubusercontent.com/7129/139351025-8acd6f6d-8e32-4486-982e-a6f26a53d865.png"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/plasmicapp/plasmic"><img alt="License" src="https://img.shields.io/github/license/plasmicapp/plasmic" /></a>
  <a href="https://www.npmjs.com/package/@plasmicapp/loader-react"><img alt="Types" src="https://img.shields.io/npm/types/@plasmicapp/loader-react" /></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" /></a>
  <a href="https://github.com/plasmicapp/plasmic/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
</p>

## Quick links

- [Website](https://www.plasmic.app/)
- [Documentation][docs]
- [Quickstart][quickstart]
- [Slack Community][slack]

[docs]: https://www.plasmic.app/learn/
[quickstart]: https://www.plasmic.app/learn/quickstart/

## How it works

**Step 1.** Install Plasmic into your codebase (exact package [depends on your framework][quickstart]).

```
npm install @plasmicapp/loader-nextjs
```

**Step 2 (optional).** Make components from your app or design system available for drag-and-drop in the visual editor:

```tsx
// Take any component from your app or design system...
export default function HeroSection({ children }) {
  return <div className="hero-section">{children}</div>;
}

// ...and make it available for drag-and-drop, along with any props you want to
// expose.
PLASMIC.registerComponent(HeroSection, {
  props: {
    children: "slot",
  },
});
```

**Step 3.** Add placeholders that render pages/components made in the visual editor anywhere in your app:

```tsx
// pages/index.tsx

import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

// Here we fetch dynamically on the client, but you can also fetch and render
// components server-side in SSG/SSR frameworks, such as via getStaticProps
// in Next.js.
export default function IndexPage() {
  return (
    <PlasmicRootProvider plasmic={PLASMIC}>
      <PlasmicComponent component="Summer22LandingPage" />
    </PlasmicRootProvider>
  );
}
```

**Step 4.** Non-developers (or developers!) can now create new pages, sections, or components that ship directly into the app/website.

**Step 5.** When you hit Publish, changes get picked up via webhooks that trigger rebuilds,
or more specific mechanisms such as incremental static revalidation or dynamic fetching from the Plasmic CDN.

## Overview

Plasmic is a platform that contains a few things:

- Visual builder / web design tool--**this is the heart of Plasmic**
- Headless CMS for structured content (or bring your own CMS)
- Growth optimization tools (A/B testing, personalization, analytics)

Plasmic's main feature is its visual builder for the web.
Developers integrate this into their codebase,
and anyone (including non-developers) can build pages or parts of pages.

The goal is to empower and unblock non-developers such as marketers and designers, while freeing up developers from pixel-pushing content, thus letting the whole team move faster.

Plasmic as a page builder and “visual CMS” is its simplest and most common use case. Editors can create and update content in Plasmic without code, and publish this into their production site without needing to block on developers.

A key capability is that **Plasmic lets you drag and drop your own components**.
There are multiple ways to use Plasmic--editors can:

- Design and build from scratch entirely in the visual tool, as a freeform page builder. No developer code needed.
- Exclusively use existing components as building blocks (this can be enforced). This ensures consistency and makes editing easier for non-designer/non-developers.
- Anything in between.

Beyond website content, Plasmic can even be used to create frontends for complex web applications (such as Plasmic itself, which was built in Plasmic).
This is a more advanced use case.

Learn more on [our website][website] and [our docs][docs]. Or check out [comparisons of Plasmic vs other tools][comparisons].

[website]: https://www.plasmic.app
[comparisons]: https://docs.plasmic.app/learn/comparisons/

Or check out our [Next.js-based talk and demo at Next.js Conf 2021][nextconf-talk]:

[![Next.js-based talk and demo at Next.js Conf 2021](https://user-images.githubusercontent.com/7129/139349085-0e72defe-89c2-47c4-8915-b92143fbb33c.png)][nextconf-talk]

[nextconf-talk]: https://www.youtube.com/watch?v=fhEwNlzzobE

## Get help and join our community

Connect with the Plasmic team and with other Plasmic users on the [Plasmic Community Slack][slack].

[slack]: https://www.plasmic.app/slack

## Features

A smattering of interesting highlights about Plasmic:

- **Drag/drop and visually manipulate your own React components**, and seamlessly nest design elements within your React components (using slots).
- **Import designs from Figma**, translating its proprietary vector document format into DOM/CSS.
- **Scalable component system** with slots/props, variants (that can be combined), and style mixins/tokens.
- **High-performance and high-quality codegen**. Supports static site generation, automatic image optimization, layout shift reduction, and more.
- **Design fully functional and accessible design system components**. For designers, you can craft completely bespoke, complex design system components like dropdowns, and we wire it up to [react-aria](https://react-spectrum.adobe.com/react-aria/). Most component libraries give you variables to tweak, but here you can completely change the structure and layout of these components.
- **Versatility in use cases**. Use it as a page builder to create simple static content like marketing/landing pages and promotional sections, or use it as a development tool for visually building complex, stateful React UIs.

## Users of Plasmic

Plasmic is used by companies ranging from Fortune 500s to boutique brands to solo makers.
It's used for websites ranging from headless commerce storefronts to marketing websites to logged-in app content.

Check out the [Case Studies and Community Showcase][customers].

[customers]: https://www.plasmic.app/casestudies

<p align="center">
  <a href="https://www.plasmic.app/casestudies">
    <img alt="Customer logos" src="https://user-images.githubusercontent.com/7129/139349783-70fc4289-ea1a-4ca2-bff1-400c8b367c17.png">
  </a>
</p>

<p align="center">
  <a href="https://www.plasmic.app/casestudies">
    <img alt="Showcase" src="https://user-images.githubusercontent.com/7129/139349675-a807ad9d-aaaf-411b-ab4b-8247a09be676.png">
  </a>
</p>

## Technical overview

(Read [the full technical overview](https://docs.plasmic.app/learn/technical-overview/).)

The main way to integrate Plasmic into a codebase is via the Headless API.
The Headless API lets developers fetch and render into your existing codebase, without touching your code base besides the initial setup.
This allows your Plasmic users to build designs and pages, and publish directly to production, without involving the development team.

You can think of Plasmic as a CMS, but where editors get to edit HTML/CSS rather than JSON data.
Developers then just render the content as-is.

Plasmic does not host your site;
your site continues to run on your existing infrastructure and tech stack.

For static site generators and server-rendered pages,
Plasmic content is loaded at build-time or server-side and thus pre-rendered,
optimizing page load performance.
For other sites that fetch and render client-side,
Plasmic content is loaded from the AWS Cloudfront CDN.

New pages can automatically just show up.
The codebase integration can be configured such that
as users create pages and routes in Plasmic Studio,
they will be auto-loaded into your app without developer involvement.

### Bring your own React components

You can register your own arbitrary custom React components for use as building blocks within Plasmic Studio.
[Learn more about code components](https://code-components.plasmic.site).

### Codegen

Besides the Headless API, you can also [generate React code](https://docs.plasmic.app/learn/codegen-guide) into your codebase.
This is a powerful way to use Plasmic as a UI builder for creating rich interactive web applications—one example of this is Plasmic Studio itself.
See the [application development tutorials](https://docs.plasmic.app/learn/minitwitter-tutorial) to learn more.

### Note on versioning

One common issue we see is mismatched or duplicate versions of packages.

`@plasmicapp` packages can depend on each other.
Each package always has an *exact* version of its @plasmicapp dependencies.
This is because we want to ensure that all packages are always in sync, and that we don't end up with a mismatched set of packages.

Packages like `@plasmicapp/host` must also be deduped, since functionality such as `registerComponent` make use of globals and side effects, so with multiple versions you could end up using the wrong "instance" of this package.
Additionally, types can be tightly coupled across multiple packages.

Unfortunately, npm and yarn make it easy for you to end up with mismatched versions and duplicate versions of packages.
Use the `npm list` command to ensure that you have unique deduped versions of packages.
Furthermore, issues can be "sticky," since npm/yarn are stateful.
At times, you may need to rely on `npm dedupe`, or removing and reinstalling Plasmic packages (including `@plasmicpkgs` packages), resetting package-lock.json/yarn.lock, in order to unwedge npm/yarn.

`@plasmicpkgs` (the built-in code component packages) have `@plasmicapp` packages as peer dependencies,
and these specify ranges rather than exact versions--this is to offer some flexibility for developers to use the core package versions they need, while still using `@plasmicpkgs`.

Note: exact versioning does not imply that every package increments versions for every release.
Packages are only incremented if they or their dependencies have changed.
Incrementing versions, including those referenced in `dependencies` and `devDependencies`, is done automatically when our deployment scripts run `lerna version patch --exact...`,
which detects whether a package has changed since its last git-tagged release.

## Contributing

This repo contains the code for all Plasmic component store packages (`@plasmicpkgs/*`), client libraries/SDKs (`@plasmicapp/*`), and examples (under the `examples/` dir).

(For hacking on code components or `plasmicpkgs`, see specific additional instructions further down.)

We use `lerna` to help us manage dependencies among all the packages.

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

### Getting started with development in this repo

```
yarn lerna bootstrap  # inter-links all the lerna-managed packages together
```

We also make use of [Verdaccio](https://verdaccio.org/) to locally test packages. This just stands up a local npm registry that you can publish your test packages to.

```
yarn global add verdaccio
verdaccio &  # Runs the verdaccio server at http://localhost:4873
```

You'll need to update the verdaccio config file, at `~/.config/verdaccio/config.yaml`, to instruct verdaccio to not use npmjs for our test packages:

```
packages:
  '@plasmicapp/isomorphic-unfetch':
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs
  '@plasmicapp/react-ssr-prepass':
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs
  '@plasmicapp/*':
    access: $all
    publish: $all
    unpublish: $all
  '@plasmicpkgs/*':
    access: $all
    publish: $all
    unpublish: $all
```

Then kill and restart the verdaccio server:

```
verdaccio &
```

Finally, in order to publish, you may be required to have a user login.
Create this one-time in your Verdaccio--it doesn't matter what user/password/email you input:

```
npm --registry=http://localhost:4873 adduser
```

### Development workflow

```bash
# Step 1.
# Make some changes! Let's say, to @plasmicapp/host.
# vim packages/host/src/registerComponent.ts

# Step 2.
# Publish a specific package to verdaccio.
# This unpublishes YOURPKG and its dependencies from your verdaccio, re-builds them, and publishes them to your local
# verdaccio.
# Note that this does not bump versions!
# We are using nx under the hood, so if your dependencies haven't changed, this should be fast.
# In this example, even though we edited @plasmicapp/host, we can just think about publishing the "root" package(s) we're ultimately installing into the test app, in this case @plasmicapp/loader-nextjs.
yarn local-publish @plasmicapp/loader-nextjs &&

# Or publish all packages to verdaccio. This will take longer.
# yarn local-publish

# Step 3.
# Go to the package you're testing, e.g. test-host-app.
# You can quickly create a test target app with `npx create-plasmic-app`.
cd ~/test-host-app &&

# Step 4.
# Simply blow away existing package manager state, to ensure we're getting your locally published versions of packages.
# This is the simplest approach if this is a throwaway test app where you don't need to maintain version lock state.
rm -rf node_modules package-lock.json yarn.lock &&

# Or, to be more surgical: you can delete anything that pulls in any @plasmicapp/@plasmicpkgs packages.
# In this case, we want to remove anything that depends on the @plasmicapp/host package we updated.
# npm un @plasmicapp/loader-nextjs @plasmicpkgs/plasmic-rich-components

# Step 5.
# Delete any framework-specific caches, such as these for Next.js and Gatsby.
# Frameworks might cache node_modules packages in ways that won't pick up your changes, depending on how you carried out the prior steps.
rm -rf .next/ .cache/ &&

# Step 6.
# (Re-)install the necessary packages, from your local verdaccio.
# These will pull in the changes you made to @plasmicapp/host.
# Note: this proxies to npmjs.org for packages that aren't published locally to verdaccio.
npm i @plasmicapp/loader-nextjs @plasmicpkgs/plasmic-rich-components --registry=http://localhost:4873
```

Check that the versions in your package.json are also not holding back any plasmicpkgs and plasmicapp versions!

In general, you probably want all @plasmicapp/@plasmicpkgs packages to be installed from your local verdaccio, rather than having some installed from npmjs.org and others installed from local,
since you want to prevent mismatched and duplicate package versions.

### Odds and ends

For a few packages like react-ssr-prepass, these are not currently integrated into the NX workspace system.
You can publish these as individual packages with, for instance:

```
cd plasmicpkgs/SOMETHING
yarn publish --registry=http://localhost:4873
# Or with more options: yarn publish --canary --yes --include-merged-tags --no-git-tag-version --no-push --registry=http://localhost:4873 --force-publish
```

## Contributing code components (`plasmicpkgs`)

The above general contribution instructions also apply to plasmicpkgs, so read that if you haven't done so.

Before starting, we recommend reading our docs for Code Components:

- [Docs on code components][code component docs]

### Creating a new package

Ignore this if you are just updating an existing package.

To create a new plasmicpkg, the easiest approach is to clone one of the existing packages (like react-slick) and fix up the names in package.json and README. Then author your registration code in src. Please use `yarn` for package management.

The directory name should be the same name as the main package you'll be using to import the React components. Your package must be named `@plasmicpkgs/{package-name}` and start with version 1.0.0.

### Versioning

`@plasmicpkgs/*` packages should depend on `@plasmicapp/*` packages as both peer dependencies and dev dependencies.
You should always use a permissive range in peerDependencies, so that users can install your `@plasmicpkgs/*` package with whatever their current versions are of `@plasmicapp/*` packages.
Dev dependencies should specify the most recent version of the package.

In general, `@plasmicpkgs/*` depend on `@plasmicapp/host` because it is the package that is used by Plasmic Studio to register components.
But you may also need others such as `@plasmicapp/data-sources`.

So a typical `package.json` might look like this:

```json
{
   "devDependencies": {
      "@plasmicapp/data-sources": "0.1.53",
      "@plasmicapp/host": "1.0.119",
      "@size-limit/preset-small-lib": "^4.11.0",
      "@types/node": "^14.0.26",
      "size-limit": "^4.11.0",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^3.9.7"
   },
   "peerDependencies": {
      "@plasmicapp/data-sources": ">=0.1.52",
      "@plasmicapp/host": ">=1.0.0",
      "react": ">=16.8.0",
      "react-dom": ">=16.8.0"
   },
   "dependencies": {
      "memoize-one": "^6.0.0"
   }
}
```

### Note on registration functions

The package must work for both codegen and loader users. This means that the register functions must have a optional parameter for the loader. It should also have an optional metadata parameter for users that want to use their own custom metadata.

```typescript
export function registerFooBar(
  loader?: { registerComponent: typeof registerComponent },
  customFooBarMeta?: ComponentMeta<FooBarProps>
) {
  if (loader) {
    loader.registerComponent(FooBar, customFooBarMeta ?? FooBarMeta);
  } else {
    registerComponent(FooBar, customFooBarMeta ?? FooBarMeta);
  }
}
```

Feel free to create wrapper components if it makes the final result better for the user. You also don't need to register all the props available for the component, only the ones that will be used in the studio.

Remember to export any wrapper components/types used to register the component. Everything should be also exported from the `index.ts` file, so all the imports are from `@plasmicpkgs/{package-name}`.

We recommend a `registerAll()` function for an easy way to register all the available components in the package.

### Submitting changes

Checklist to test:

- Does your component behave well in the Studio in **both** editing and live preview modes?
- Do _all_ of the props and slots work correctly?

Remember that your package will be used by a wide variety of users, so it's important to have easy-to-use components, with good descriptions.

After testing in the Studio, it's also good to test both the available code options: loader and codegen.
Testing codegen ensures your import paths are correct.

- [Codegen guide](https://docs.plasmic.app/learn/codegen-guide/)
- [Next.js loader guide](https://docs.plasmic.app/learn/nextjs-quickstart/)

## Getting help

Feel free to join our [Slack Community][slack] and ask us anything! We're here to help and always welcome contributions.
