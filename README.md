## Personal Portfolio Website

This repository contains the source code for my personal portfolio website, built with **Next.js (App Router)** and **TypeScript**. The site dynamically pulls data from the GitHub API to showcase my projects, technologies, and development focus areas.

Rather than hardcoding content, the portfolio uses **server-side API routes** to fetch, process, and present live data from GitHub in a structured and curated way.

---

## Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **React**
* **Server Components & Route Handlers**
* **GitHub REST API**
* **Environment-based configuration**

---

## Architecture Overview

### App Router

This project uses the Next.js **App Router** for routing, layouts, and server-side logic. All GitHub integration is handled via **server-only API routes**, ensuring that API tokens remain secure and are never exposed to the client.

### Component Design

The UI is composed of reusable, focused components that consume clean, normalized API responses rather than raw GitHub data. This separation keeps presentation logic simple and allows backend data processing to evolve independently.

---

## API Routes

The portfolio exposes internal API routes under `/app/api/*` to aggregate and transform GitHub data for frontend consumption.

### `/api/github-projects`

Fetches and curates GitHub repositories for display as portfolio projects.

**Behaviour:**

* Fetches up to 100 repositories from the GitHub API
* Filters out:

    * Forked repositories
    * Archived repositories
    * Repositories without descriptions
* Normalizes repository data into a portfolio-friendly structure

**Returned data includes:**

* Project title (derived from repository name)
* Description
* Technologies (GitHub topics)
* Primary language
* GitHub repository link
* Live demo link (if available)
* Star count

This ensures only meaningful, presentable projects appear on the portfolio.

---

### `/api/github-languages`

Analyzes language usage across all repositories to highlight technical focus areas.

**How it works:**

* Fetches all repositories for the configured GitHub user
* Queries GitHub language breakdowns per repository
* Aggregates language byte counts across all repositories
* Categorizes languages into:

    * **Frontend**
    * **Backend**
    * **Cloud / DevOps**
* Converts totals into percentages
* Returns the top five languages per category

This route powers technology charts and summaries without any manual curation.

---

## Environment Variables

The following environment variables are required:

```
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_personal_access_token
```

These variables are validated server-side at runtime. The GitHub token is used exclusively in server-side route handlers and is never exposed to the client.

---

## Development

Run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open:

```
http://localhost:3000
```

---

## Deployment

The project is designed to be deployed on **Vercel**, with environment variables configured through the platform dashboard.

---

## Design Goals

* Live, data-driven content instead of static portfolio entries
* Secure server-side API access
* Clear separation between data aggregation and UI rendering
* A scalable structure for adding future integrations or sections
