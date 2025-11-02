This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# 🛍️ Modern Storefront (Next.js + React)

A simple, modular e-commerce demo built with **Next.js (App Router)** and **React**.  
This project demonstrates component-based architecture, API integration, and UI state management (cart, filters, and product fetching).

---

## 🚀 Features

- **Product Listing** – Displays items fetched from a local API route (`/api/products`)
- **Add to Cart** – Dynamically updates quantity and total
- **Stock Management** – Decrements available stock when items are added
- **Filters**
  - **CategoryFilter** – Filter products by category via dropdown
  - **PriceFilter** – Filter by max price input
  - **Reset Filters** – Quickly clear filter selections
- **CartSummary** – Displays total items and total cost, with reset functionality
- **StatusMessage** – Handles loading, error, and empty states gracefully
- **Responsive Layout** – Two-column design with sidebar filters and product grid
- **Modern Styling** – Clean UI built with CSS variables and light/dark theme support
