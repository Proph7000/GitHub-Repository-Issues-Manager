# GitHub Repository Issues Manager

This project is a GitHub repository issues manager built with React (Vite) and TypeScript. It allows users to load issues from a GitHub repository and organize them into three categories: todo, in progress, and done. Users can also sort issues by dragging and dropping within a category or changing the category altogether.

## Features

- Load issues from a GitHub repository
- Organize issues into todo, in progress, and done categories
- Sort issues by dragging and dropping within categories
- Change the category of an issue
- Validate input URL
- Create links to the repository owner and the repository itself
- Navigate to individual issues and their creators' profiles (if available)
- Store issues in localStorage separately for each repository
- Issues are loaded from localStorage after the initial load

## Technologies Used

- React v18+ (Vite) + TypeScript
- GitHub API
- Ant Design
- Zustand (persist, immer)
- React Beautiful DnD
- React Hook Form + Yup
- React Router v6+
- React Toastify
- Eslint (custom settings) + Prettier

## Demo

[Add a link to the live demo if available]

## Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Enter the URL of the GitHub repository you want to manage issues for.
2. Click on the "Load Issues" button to fetch issues from the repository.
3. Organize issues into different categories by dragging and dropping them.
4. Click on an issue title to view its details.
5. Click on the username to view the profile of the issue creator.
6. To clear the localStorage and load issues from a different repository, use the "Clear Storage" button.
