# alx-project-0x14
# Project Description
CineSeek is a modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. The application allows users to browse movies from the MoviesDatabase API, view movie details, and search for films by year or genre. The project focuses on creating a responsive, well-structured web application with proper API integration and TypeScript typing.

# Learning Objectives
Understanding API documentation and integration
Implementing TypeScript interfaces for API responses
Creating reusable React components
Building a responsive layout with Tailwind CSS
Managing application state for filtering and pagination
Implementing proper error handling and loading states
Setting up Next.js API routes for server-side data fetching
Environment variable management for API keys
Requirements
Technical Stack
Next.js 14 (Pages Router)
TypeScript
Tailwind CSS
Font Awesome icons
MoviesDatabase API
Development Requirements
Node.js (v16 or higher)
npm or yarn
Git for version control
File Structure
alx-movie-app/
├── components/
│   ├── commons/
│   │   ├── Button.tsx
│   │   ├── Loading.tsx
│   │   └── MovieCard.tsx
│   └── layouts/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts
│   ├── movies/
│   │   └── index.tsx
│   ├── _app.tsx
│   └── index.tsx
├── public/
├── styles/
│   └── globals.css
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
Best Practices
Code Quality
TypeScript interfaces for all props and API responses
Component-based architecture with clear separation of concerns
Proper error handling in API requests
Loading states for better UX
Environment variables for sensitive data
Performance
Client-side navigation with Next.js router
Efficient API calls with proper pagination
Responsive design with Tailwind CSS
Image optimization with Next.js Image component
Maintainability
Consistent code formatting
Clear folder structure
Reusable components
Comprehensive prop typing
Proper documentation in README
# API Integration
The application uses the MoviesDatabase API with the following key endpoints: - /titles - Main endpoint for fetching movie data - Supports filtering by year and genre - Implements pagination for browsing through results

# Authentication
API key authentication via headers
Environment variable storage for API key
Server-side API route to protect client-side exposure of keys
Error Handling
Loading component for pending states
Try/catch blocks in API routes
Status code checking for API responses
Type guards for API data
Usage Limits
API rate limiting considerations
Pagination to limit request size
Client-side caching of responses where appropriate
Error boundaries for graceful failure
# 📝 Project Assessment (Hybrid)
Your project will be evaluated primarily through manual reviews. To ensure you receive your full score, please:

✅ Complete your project on time
📄 Submit all required files
🔗 Generate your review link
👥 Have your peers review your work

An auto-check will also be in place to verify the presence of core files needed for manual review.

# ⏰ Important Note
If the deadline passes, you won’t be able to generate your review link—so be sure to submit on time!

We’re here to support your learning journey. Happy coding! ✨

# Objectives: To use an API right, you need to read and understand the API documentation. This will give you a clear outline of what is needed to successfully make an API request, while further manipulating the response object. Especially, in TypeScript, knowing the structure of the request and response object allows you to design types or interfaces.

Instructions:

Create a New Project Directory:
Create a new project repository named alx-project-0x14.

Create README.md:
Create a README.md file in the root directory of your project.

Review API Documentation:
Visit the MoviesDatabase API documentation and review the available endpoints and features.

Add API Overview:
In your README.md, add a heading using ## for the API overview. Summarize the key features of the API in your own words.

Add API Version:
Below the API overview heading, add another heading using ## for version and state the version from the API documentation.

List Available Endpoints:
Create a section titled ## Available Endpoints and list the main endpoints available in the API along with a brief description of each.

Describe Request and Response Format:
Add a section titled ## Request and Response Format detailing the structure of a typical request and the corresponding response object. Use examples from the documentation.

Authentication Requirements:
Create a section titled ## Authentication and describe how to authenticate your requests (e.g., API key, headers required).

Error Handling:
Include a section titled ## Error Handling where you explain common error responses from the API and how to handle them in your code.

Usage Limits and Best Practices:
Add a final section titled ## Usage Limits and Best Practices that outlines any usage limitations (e.g., rate limits) and recommendations for effectively using the API.
