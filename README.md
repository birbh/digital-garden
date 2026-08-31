# My Digital Garden

Welcome to my digital garden. Unlike a traditional blog, this is a living workspace where notes range from rough seeds to fully mature thoughts. 

This project acts as my online identity: it introduces who I am, showcases the projects I’ve built, gives people a quick way to contact me, and connects my [Physical hardware project](https://github.com/birbh/SmartTap) to a digital presence.

This project was built as a learning project. I wanted to learn modern web development tools creating something useful, personal, and deployable.


## Why I built this??

I wanted a modern personal website that could live with my physical [NFC-enabled business card](https://github.com/birbh/SmartTap). Instead of a boring resume or static profile, I wanted a site that feels personal and premium;something that shows my work, timeline, projects, and contact links in one place.

Actually,my goal was to build something that is:
- fast and lightweight
-  modern
- useful for networking and utilize my linkedin profile


## What this project includes

My project is a  responsive, digital portfolio optimized for both desktop and mobile viewing. It opens with a section that features an avatar, name, brief introduction, and location. To make networking easy, the site includes direct call and email buttons alongside a functional vCard download tool for instant contact saving. Visitors can seamlessly explore social media and portfolio links and follow a visual timeline tracking key learning milestones of my life. Built  as a static site, it comes pre-configured and completely ready for quick deployment on GitHub Pages for now.


## Why this matters to me??


This isn’t just a website. It’s a product that connects my irl work to my digital identity. It gives future collaborators, clients, and recruiters a better way to understand who I am, what I build, and how to contact me quickly.

It also represents an important learning milestone for me: learning modern frontend tools.

## Live demo 

### Website:
https://birbh.github.io/digital-garden/

### Video:


## Tech used

I just used simple tech behind the website,like:
a) Next.js
b) React
c) Tailwind CSS
d) JavaScript

## How to run locally??

Use the following guide to use it locally:

1. Clone the repository

```bash
git clone https://github.com/birbh/digital-garden.git
cd digital-garden
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open the app in your browser

```bash
http://localhost:3000
```

Note: if the images dont load then you should modify the file `next.config.mjs` to :

```ts 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images:{
    unoptimized:true,
  }
};

export default nextConfig;
```
ONLY CHANGE THIS IF RUNNING LOCALLY!!!!!!


## Some inportant scripts

```bash
npm run dev      # start local development server
npm run build    # create production build
npm run start    # run production build locally
npm run lint     # run lint checks
```
You dont need this to run the hosted website. (Only if running locally. )

## Deployment

This project is configured for static hosting and is intended to be deployed on GitHub Pages.



