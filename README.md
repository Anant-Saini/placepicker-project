# PlacePicker

A full-stack mini application that demonstrates how to build a responsive Angular frontend that communicates with a lightweight Express backend to manage a personalized travel wishlist.

This project was built to strengthen practical frontend and full-stack development skills, with a focus on reusable Angular architecture, HTTP communication, reactive state handling, and backend integration. It reflects hands-on learning in building real user flows instead of isolated UI components.

## Project Overview

PlacePicker allows users to:

- Browse a curated list of destinations.
- Add places to a personal favorites list.
- Remove places from their saved collection.
- Experience responsive UI feedback for loading and error states.

The application is structured as an Angular 18 frontend connected to a Node.js + Express backend, making it a good example of clean client-server separation and practical API consumption.

## Recruiter-Focused Highlights

- Built with **Angular 18** using standalone components, reflecting modern Angular development practices.[page:1]
- Implemented REST-based communication between frontend and backend using `GET`, `PUT`, and `DELETE` operations.[page:1]
- Used Angular Signals for reactive UI state management and smoother component updates.[cite:1]
- Applied RxJS operators such as `map`, `tap`, and `catchError` to manage asynchronous HTTP flows and side effects.[cite:1]
- Structured business logic inside dedicated services, improving maintainability and separation of concerns.[cite:1]
- Added centralized error handling through a shared error service and modal-based feedback mechanism.[cite:1]
- Built a lightweight Express backend with file-based JSON persistence to simulate real CRUD workflows.[cite:1]
- Managed loading states and delayed API responses to better understand real-world frontend resilience patterns.[cite:1]

## Tech Stack

| Layer | Technologies |
|------|-------------|
| Frontend | Angular 18, TypeScript, HTML, CSS |
| State & Data Flow | Angular Signals, RxJS, HttpClient |
| Backend | Node.js, Express |
| Persistence | JSON file storage |
| Tooling | Angular CLI, npm |

## Architecture

### Frontend

The frontend is built with standalone Angular components and is divided into focused responsibilities:

- `AvailablePlacesComponent` fetches and displays all available destinations.
- `UserPlacesComponent` manages the user's saved places.
- `PlacesComponent` acts as a reusable presentation component for rendering place lists.
- `PlacesService` handles all API communication and user-place state updates.
- `ErrorService` manages shared application-level error state.

This structure helped reinforce how scalable frontend systems are designed using reusable components and service-driven logic.

### Backend

The backend is built with Express and exposes endpoints for:

- Fetching all places
- Fetching saved user places
- Adding a place to favorites
- Removing a place from favorites

It also serves image assets statically and uses local JSON files as a persistence layer, which is useful for understanding backend fundamentals before moving to database-backed systems.

## Key Learning Outcomes

This project helped strengthen my understanding of:

- Building modern Angular applications with standalone components.
- Using Signals for reactive state updates.
- Managing asynchronous API calls with RxJS.
- Designing reusable service layers for data fetching and mutation.
- Handling loading and error states in a user-friendly way.
- Connecting frontend interactions to backend persistence.
- Structuring simple REST APIs with Express.
- Working with CORS, static asset serving, and JSON-based storage.

## Why This Project Matters

PlacePicker is a strong learning project because it goes beyond static UI development. It demonstrates the ability to connect interface behavior with backend data operations, organize code using maintainable frontend patterns, and build a small but complete full-stack feature end to end.

For recruiters, this project reflects practical exposure to:

- Angular application design
- API integration
- Client-server communication
- State management
- Error handling
- Full-stack development fundamentals

## Run Locally

### Frontend

```bash
npm install
npm start
```

Frontend runs on:

`http://localhost:4200`

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

`http://localhost:3000`

## Future Improvements

Some valuable next steps for extending this project include:

- Replacing JSON storage with a database such as MongoDB or PostgreSQL.
- Adding authentication for user-specific saved places.
- Writing unit and integration tests for components and services.
- Introducing environment-based API configuration.
- Deploying frontend and backend separately for production use.

## Author

**Anant Saini**

Backend-focused software engineer with growing full-stack development experience across Java, Spring Boot, Angular, REST APIs, and modern software architecture.
