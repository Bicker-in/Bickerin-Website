---
slug: "foundation"
date: "2021-11-08"
title: "Foundation"
author: "Christopher Gunter"
description: "A quick explanation on the foundations of the Bicker!n App."
---

# App Foundations

> This post explains the current foundation for the Bicker!n App. This includes linting, unit-testing, GitHub Actions, etc...

## Tauri

Tauri is the software system that **Bicker!n** is using for the desktop app. Tauri's software system builds desktop apps from web apps. Given Tauri is the main foundation for **Bicker!n's** desktop app, it was a priority to make sure that the workflow with developing the app on Tauri was as smooth and error-free as possible. 

### React

When I began deciding what framework I was going to use along with Tauri, I chose React with [Create React App](https://github.com/facebook/create-react-app) (CRA) as the boilerplate. At first, I thought CRA was going to be a good boilerplate to start with for the project. As I began developing the **Bicker!n** desktop app with React on top of Tauri, I noticed a couple of major problems that I had overlooked:

1. **Package Bloat:** Given that CRA has to cover many different scenarios a developer who would use this boilerplate might face, it already has pre-downloaded packages to serve those many different scenarios (i.e. unit-testing, web workers). Given that **Bicker!n** is a desktop app, web workers are not needed for the app. The inclusion of other packages (other than Babel) creates unnecessary space in an app that needs to be as small, concise as possible.
2. **Library conflicts:** This problem is connected to the first major problem. Since CRA preloads a lot of packages that **Bicker!n** might not use, it means any packages downloaded could conflict with those preadded packages. Any conflicts would mean that a developer would have to go into the app and remove any unnecessary packages which would defeat the purpose of starting with a boilerplate as the foundation of the web app.

Through some research, I found a better boilerplate than CRA. It was `nano-react-app.` It creates a react app with only Vite and Babel, and the only functional files it has are `App.jsx`, `index.jsx`, and `index.html`. This means no extraneous packages that could bloat the app or create many library conflicts down the road. For any developers wanting a React boilerplate with more customization and fewer headaches with package bloat or library conflicts, [nano-react-app](https://github.com/nano-react-app/nano-react-app) could be your best option.

## Linting

With any software project, having a consistent coding style is a must. For **Bicker!n**, `ESLint` (linting package) keeps a consistent coding style throughout the project. The plugins used for the ESLint linter are:
- **React:** The React plugin makes ESLint be able to lint `.jsx`/`.tsx` files.
- **@typescript-eslint:** The typescript plugin makes ESLint be able to parse through typescript files.
- **jsdoc:** The jsdoc plugin was used to make **Bicker!n's** code compliant with jsdoc.
- **testing-library:** The testing-library plugin makes ESLint be able to find any errors in **Bicker!n's** unit-tests

## Unit-Testing

The main unit-testing library that **Bicker!n** is using is `jest`. The more contentious decision is which library to simulate user events on the **Bicker!n** app. The two main libraries that I had to choose from were `Enzyme` or `react-testing-library`.

Through some research, the **Bicker!n** team chose react-testing-library. The main reason for this choice is the testing philosophy of react-testing-library. react-testing-library's purpose is to test React component using only tools that mimic a client's interaction with that component. For instance, react-testing-library has tools like typing, hovering, or clicking on an element. Once you have interacted with the component in some way, you can then use react-testing-library to look through the DOM for any changes. 

On the other hand, Enzyme tests a component by going inside an element and interacting with its state and internal APIs. Unlike react-testing-library any changes inside that component have the potential of breaking an Enzyme test even if the component's behavior is the same. Therefore, react-testing-library seems like the best React component testing library for this project.

## Husky

Before every commit, it is important to make sure that all files changed/created/deleted are linted and unit-tested. `Husky`/`lint-staged` is the package that solves problem for **Bicker!n**.

## GitHub Actions

For now, every commit to any branch or `main` is checked for any lint errors, unit-test failures, or inability to be built for `macOS`, `Windows`, or `Linux`.