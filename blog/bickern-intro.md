---
slug: "bickern-intro"
date: "2021-10-27"
title: "Bicker!n Introduction"
author: "Christopher Gunter"
description: "A quick introduction into Bicker!n's purpose and tech stack."
---

# Welcome To Bicker!n

> This is the first post along with other posts down the road to describe the vision and journey for this project. This post will be describing the purpose for this project and technologies that will so far be used for building it.

## Purpose

One common hindrance I have face when working on group projects (i.e. Capstone, Hackathon(s)) has been the various chat platforms that I have used to communicate with the rest of my team. When it comes to the market of free chatroom platforms, I have used [Discord](https://discord.com/) and [Slack](https://slack.com/). Eventhough these are very good platforms for chatting with team members and friends, I find them lacking some pretty important features when using them amongst a development team:

1. **Absence of UI Widgets:** Aside from chat messages, Discord and Slack does not allow another way to interact with the chatroom that can enhance a developer's productivity. For instance a _Calendar Widget_ on the right side of the chatroom, could keep a development team up to date with deadlines manually created by the team's Scrum master or one of the team's intergrations(will be discussed later). Other widgets could include a _Notification Organizer_ to list out previous notifications rather than connecting Webhooks that only use certain chatrooms to keep those notifications organized.
2. **Lack of Dev Tool UI Integration:** Alongside UI widgets, better dev tool integration is lacking in the previously mentioned chat platforms. Using our _Calendar Widget_ example, a developer would increase their productivity with being to connect all _GitHub_ issues and _Jira_ tasks into one central calender than having to visit both platforms individually. This calendar would show _Jira_ task deadlines and (by team choice) _GitHub_ issue creation/update dates.

> As an aside, both **Discord** and **Slack** serve different users than **Bicker!n**. **Discord** hosts casual chatrooms for users like gamers and hobby enthusiasts. On the other hand, **Slack** serves more entreprise clients like companies and non-profits. _Bicker!n_ is different from both of these approaches. _Bicker!n_ takes a different approach. _Bicker!n_ is meant to serve on per project basis. Every Bicker!n server hosts a group of developers are intended to work on one (preferrably **BIG**) project. The purpose is so integrations for a project (i.e. _GitHub_ issues and _Jira_ tasks) don't conflict with other projects being worked on by that team.

## Technology Used

This section of the post will be separated into **Frontend** and **Backend**. So far these are the technologies that are going to be used in this project. Throughout the development journey, I will update in future posts if any technolgies are added or removed from the tech stack.

### Frontend

#### Next.js

Next.js is a development framework that gives extra functionalities to React based web applications like server-side rendering. For right now, Next.js is only being used for _Bicker!n's_ marketing website. Since the marketing website is to show off _Bicker!n_ and provide a blog to keep those interested up to date with the development, the website should be static and have fast load time. Therefore, Next.js' "Static Generation" (pre-rendering a site's page before client request) would make the website's load time faster for a first time user.

#### Tauri

Tauri is a cross-platform desktop application development framework written in Rust that allows developers to build desktop applications using HTML/CSS/JS. This framework will be used to build the desktop application for _Bicker!n_. The decision whether to use this framework versus a more popular one like Electron. At the end of the day, I chose Tauri over Electron for three reasons:

1. **Bundle Size:** Tauri applications tend to be less than half the size of an Electron application. This tends to be the problem since Electron bundles both Chromium and Node.js which are big projects that tend to bloat the Electron application. On the other hand, Tauri applications substitutes both Chromium and Node.js with more lightweight and better alternative. This means for Tauri applications bundle size tends to be smaller. According to [Why use Electron Alternative](https://blog.logrocket.com/why-use-electron-alternative/), for an empty application, Electron's bundle size is 200mb while Tauri's bundle size is only 8mb.
2. **Memory Usage:** As mentioned previously, an Electron application bundles both Chromium and Node.js. For anyone who has used either of these projects, Chromium and Node.js are very big and complex applications. This leads the Electron application to consume more resources on a user's computer and drain that computer's battery faster. When it comes to a common developer that could use _Bicker!n_, that developer would have _Bicker!n_ open along with other applications (i.e. Chrome, Visual Studio Code, Xcode, etc.). The more resources _Bicker!n_ uses to run the fewer resources a developer's other applications will have to be able to run. Therefore, Tauri fixes this problem using lighweight alternatives for both Chromium and Node.js. According to [Why use Electron Alternative](https://blog.logrocket.com/why-use-electron-alternative/), for an empty application, Tauri uses 7x's less memory than Electron.
3. **Upcoming Features:** According to [Tauri's road map](https://tauri.studio/en/), Tauri has plans for upcoming support for making Tauri applications into Mobile Applications and Rust-based webrtc.

#### React

React is the Javascript library that will be used on both the marketing website (Next.js) and the desktop application (Tauri). React was chosen due to my familiarity which will allow for faster development.

### Backend

#### Matrix

Matrix is an open network for secure, decentralized communication. Matrix allows messaging with end-to-end encryption.

---

> As said in the first post, I welcome you to **Bicker!n** and hope you enjoy the development's journey. Thank you for taking the time to read this post.

- [Christopher Gunter](https://github.com/Cgunter1)
