# QA Automation Portfolio

My QA Automation portfolio using Playwright and TypeScript.

## About the Project

This project contains automated tests created to practice and demonstrate QA Automation skills, including test assertions, locators, browser interactions, and business rules validation.

## Technologies

- TypeScript
- Playwright
- Node.js
- npm
- Git and GitHub

## Project Structure

- `e2e/` — Automated tests and TypeScript practice exercises.
- `playwright.config.ts` — Playwright configuration for Chromium, Firefox, and WebKit.
- `package.json` — Project dependencies and npm scripts.

## Prerequisites

- Node.js and npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/ariosr/qa-playwright-portfolio.git
cd qa-playwright-portfolio
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers if needed:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in Chromium:

```bash
npm run test:chromium
```

Run tests in Firefox:

```bash
npm run test:firefox
```

Run tests in WebKit:

```bash
npm run test:webkit
```

Open the HTML report:

```bash
npm run report
```

## Project Status

This portfolio is a learning project that will continue to evolve as I develop my QA Automation skills.