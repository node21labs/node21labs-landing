# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Node21 Labs landing page - a React website for RGB (smart contracts on Bitcoin) infrastructure tools. The main product is Parcel21, a decentralized consignment exchange over Nostr for RGB smart contracts.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server with HMR
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint check
npm run deploy       # Deploy to GitHub Pages
```

## Tech Stack

- React 19 with Vite 7
- ESLint with react-hooks and react-refresh plugins
- GitHub Pages deployment via gh-pages
- No TypeScript (JavaScript/JSX only)

## ESLint Configuration

The `eslint.config.js` has a custom rule: unused variables starting with uppercase letters or underscores are allowed (`varsIgnorePattern: '^[A-Z_]'`).
