# Internationalized Recipe Blog with Next.js

This project demonstrates a modern frontend architecture using **Next.js**, focusing on **internationalization (i18n)**, **static site generation (SSG)**, **SEO**, and **Dockerized deployment**.  
The application is designed to work with a headless CMS (such as Contentful), but for submission and evaluation purposes, mock/static data can be used without configuring an actual CMS.

---

## Tech Stack

- Next.js
- React
- Tailwind CSS
- next-i18next (Internationalization)
- Static Site Generation (SSG)
- SEO (metadata + sitemap)
- Docker & Docker Compose

---

## Features

- Multi-language support (English, Spanish, French)
- Static generation for fast performance and SEO
- Dynamic recipe pages using slug-based routing
- Language switcher across all pages
- Client-side search and category filtering
- Newsletter form with frontend validation only
- SEO-friendly sitemap.xml
- Dockerized setup with health check

---

## Architecture Overview

Client  
↓  
Next.js Pages (SSG & Dynamic Routes)  
↓  
Localized Content (i18n)  
↓  
SEO + Sitemap Generation  
↓  
Docker Container (Production-ready)

---

## Folder Structure

/pages  
/components  
/public/locales  
/styles  
Dockerfile  
docker-compose.yml  
next.config.js  
next-i18next.config.js  
.env.example  
README.md  

---
## Running the Application

Start the application using Docker:

```bash
docker-compose up --build

---

The app will be available at:
http://localhost:3000

Health check endpoint:
http://localhost:3000/api/health
Internationalization (i18n)

Supported languages:
English (default)
Spanish
French

Locale files are located in:

/public/locales/{en|es|fr}/common.json
Language switching preserves the current page route.
# recipe-blog
