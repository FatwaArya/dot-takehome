# E-commerce & Task Management Application For DOT Take Home Assignment

A modern web application built with React, TypeScript, and Vite that combines e-commerce functionality with task management capabilities.

## Features

- **Product Catalog**: Browse and search for products
- **Product Details**: View detailed information about products
- **Shopping Cart**: Add products to cart and manage quantities
- **User Authentication**: Register and login functionality
- **Task Management**: Create, complete, and filter tasks
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: TanStack Router
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Styled Components and Radix UI
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   pnpm install
   ```
   Or if using npm:
   ```
   npm install
   ```

### Running the Development Server

To start the development server:

```
pnpm dev
```

This will start the application at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:

```
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

To preview the production build locally:

```
pnpm preview
```

## Project Structure

- `src/components/` - Reusable UI components
- `src/routes/` - Route definitions and page components
- `src/hooks/` - Custom React hooks
- `src/store/` - Global state management
- `src/services/` - API services and data fetching
- `src/types/` - TypeScript type definitions
- `src/styles/` - Global styles and theme configuration
- `src/utils/` - Utility functions

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the app for production
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview the production build locally
