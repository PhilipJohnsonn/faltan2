# Football Match App

## Overview
Football Match App is a responsive web application that allows users to join football matches. The application is built using Java with Spring Boot for the backend and Next.js with TypeScript and Tailwind CSS for the frontend. It integrates Firebase for user authentication and provides email notifications for important updates.

## Project Structure
The project is organized into three main directories: `backend`, `frontend`, and `firebase`.

### Backend
- **src/main/java/com/footballmatchapp**: Contains the main application code.
  - `FootballMatchAppApplication.java`: Entry point of the Spring Boot application.
  - `controller/UserController.java`: Handles user-related HTTP requests.
  - `model/User.java`: Represents the user entity.
  - `repository/UserRepository.java`: Provides CRUD operations for the user entity.
  - `service/UserService.java`: Contains business logic for user management.
- **src/main/resources**: Contains configuration and template files.
  - `application.properties`: Configuration properties for the application.
  - `templates/email-template.html`: HTML template for email notifications.
- **src/test/java/com/footballmatchapp**: Contains test cases for the application.
- `pom.xml`: Maven configuration file for dependencies and plugins.
- `README.md`: Documentation for the backend.

### Frontend
- **public**: Contains static assets for the Next.js application.
- **src/components**: Contains reusable components.
  - `Navbar.tsx`: Navigation bar component.
- **src/pages**: Contains page components.
  - `_app.tsx`: Custom App component for global styles and state.
  - `index.tsx`: Main landing page.
  - `login.tsx`: Login page for user authentication.
- **src/styles**: Contains global CSS styles.
  - `globals.css`: Global styles for the application.
- **src/utils**: Contains utility functions.
  - `firebase.ts`: Functions for Firebase initialization and authentication.
- **src/types**: Contains TypeScript types and interfaces.
  - `index.ts`: Type definitions used throughout the application.
- `next.config.js`: Configuration settings for Next.js.
- `package.json`: npm configuration file for dependencies and scripts.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: Documentation for the frontend.

### Firebase
- `firebase-config.js`: Configuration settings for Firebase.
- `README.md`: Documentation for Firebase setup.

## Features
- User registration and login using Firebase authentication.
- Ability to join and manage football matches.
- Email notifications for match reminders and updates.

## Getting Started
1. Clone the repository.
2. Set up the backend by configuring the `application.properties` file with your database and Firebase credentials.
3. Run the backend server using Maven.
4. Set up the frontend by installing dependencies with npm and running the Next.js application.
5. Ensure Firebase is configured correctly for authentication and notifications.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.