# Football Match App Backend

## Overview
This project is a backend application for a football match joining platform built using Spring Boot. It provides RESTful APIs for user management, including registration, login, and point tracking. The application integrates with Firebase for authentication and email notifications.

## Technologies Used
- **Java**: Programming language for backend development.
- **Spring Boot**: Framework for building the backend application.
- **Firebase**: For user authentication and notifications.
- **Maven**: Dependency management and build tool.

## Project Structure
```
backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── footballmatchapp
│   │   │           ├── FootballMatchAppApplication.java
│   │   │           ├── controller
│   │   │           │   └── UserController.java
│   │   │           ├── model
│   │   │           │   └── User.java
│   │   │           ├── repository
│   │   │           │   └── UserRepository.java
│   │   │           └── service
│   │   │               └── UserService.java
│   │   ├── resources
│   │   │   ├── application.properties
│   │   │   └── templates
│   │   │       └── email-template.html
│   └── test
│       └── java
│           └── com
│               └── footballmatchapp
│                   └── FootballMatchAppApplicationTests.java
├── pom.xml
└── README.md
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd football-match-app/backend
   ```

2. **Configure application properties**:
   Update `src/main/resources/application.properties` with your database and Firebase credentials.

3. **Build the application**:
   ```
   mvn clean install
   ```

4. **Run the application**:
   ```
   mvn spring-boot:run
   ```

## API Endpoints
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate a user.
- **GET /api/users/{id}**: Retrieve user details.

## Testing
Run the tests using:
```
mvn test
```

## Contributing
Feel free to submit issues or pull requests for improvements and features.

## License
This project is licensed under the MIT License.