# Codex

<p align="center">
  <img src="./public/project-preview-1.png" alt="Codex Preview 1" width="900"/>
</p>

<p align="center">
  <img src="./public/project-preview-2.png" alt="Codex Preview 2" width="900"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Convex-1E293B?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABKUlEQVRYR+2WvQ2CQBCGv8JuCj6Ck6CjcBy0I3YCU2wHSwt0gK3oCdApU9uhnmiQvGBgMDA1OJCmTj6PmjrCTT1pZ58vn9gMSaAZhEARY66zm6sQxoCyxAZXANXQ+1KgB/gDqWbgmKAG3dQCcyiw8m3ACJ4DbAT6AVSJ0gG3cAdyXRApQArWGVLDh8Bq4GvDCOuF5gCe0E1s5gTVreg8tTXMawfLT+ymifNY+gEukTrHS73hJEeF6Kf0RbUK+J4WXYTWNxE0BxrQ3gCvTXwgB1FrxGZn9i43SeAOxBV9D+gWf5voAkxOdjQ2ycQ44ZQH6egxzwUrM0As9J/8okXy/VpD8htxIzkcysAYHlwZZ4C1puls+akzYRyRXoAAAAASUVORK5CYII=" alt="Convex" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/PistonAPI-FF3E00?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABIklEQVRYR+2WwQ2AMAxD3yIMIISJGRUXR2sRKwiIk1Y2MTN7AykFJ6gC1YiofM6P+WK7T+CAYNn1+g/N9Q+ZYDhOVS8A3gA+4A1ugmgRfoCLUg3AL/xb0Mhqp6gEQAZXAPJoA3kDOYBM6gP1wGgB/qB/GUOo6Qb8HMAf4yXIBzwLnAa4BjzYuCUf7jv1wBxT/hc8M5yU2gb8rAF6kFmwPv4Am+Fr0r5UIK+lm7AD6sBR4wUlChpZxBbuGvm4DJ6y/ka2NfgC8X6i9gAciG+1MB/0y3qj3hN8OODybYk1uM9QAAAABJRU5ErkJggg==" alt="Piston API" />
</p>

## Live Demo

Explore the project live here:  
🔗 https://codex-gold-tau.vercel.app/

---

## Description

**Codex** is an interactive web application where users can write, run, and experiment with code in the browser. It leverages a powerful combination of **React**, **Next.js**, and **TypeScript** for a smooth frontend experience, styled with **TailwindCSS**, and powered by backend logic using **Convex** and secure authentication with **Clerk**.  
To evaluate and run code snippets dynamically, it integrates the **Piston API**, enabling real code execution in a sandboxed environment.

---

## Tech Stack

### Frontend

- **React** — UI library
- **Next.js** — Full-stack React framework
- **TypeScript** — Static typing for robust code
- **TailwindCSS** — Utility-first styling

### Backend & Services

- **Convex** — Backend data & functions
- **Clerk** — Authentication & user management
- **Piston API** — Remote code execution engine

---

# In the latest code update:

<p align="center">
  <img src="./public/The ban of Piston API.png" alt="Piston API BAN" width="900"/>
</p>

Somehow engineer-man banned public use of Piston API on everyone and they created a whitelist that people that are added by themselves can actually use it, at first I contacted him on his Discord but got no reason with the help of KIMI AI we were able to build our own server to run the code on docker containers, I will add the commit message `piston banned solved` and if you are interested you can use it. Everything is working fine like before.

# Get Started:
npm install

--- Open three terminal ---
first terminal run: `npx convex dev` (for convex)
second terminal run: `npm run dev` (for Next.js)
third terminal run: `sudo docker ps` (I don't know if it is working on windows you should see something like 0.0.0.0:2000->2000/tcp, [::]:2000->2000/tcp   inspiring_meitner) 
