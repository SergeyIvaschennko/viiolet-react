# Music Streaming Application V I O L E T

This is a music streaming application built using Spring Boot. The application consists of two microservices:

1. **User Service**: Handles user authentication and authorization using JWT.
2. **Music Service**: Manages music tracks, playlists, and provides streaming functionality.

The application uses PostgreSQL as its database for storing user information and music data.

## Features

- User registration and authentication with JWT tokens.
- Secure access to music content based on user roles.
- CRUD operations for music tracks and playlists.
- Streaming music tracks.
- Separation of concerns through microservices architecture.

## Architecture

- **User Service**: 
  - Handles user-related operations: registration, login, and JWT token management.
  - Exposes REST APIs for user management.
  - Communicates with PostgreSQL to store and retrieve user data.

- **Music Service**:
  - Manages music tracks and playlists.
  - Handles streaming of music content.
  - Exposes REST APIs for managing music content.
  - Communicates with PostgreSQL to store and retrieve music data.

## Technologies Used

- **Java**: Programming language used for developing the microservices.
- **Spring Boot**: Framework for building the microservices.
- **Spring Security**: For securing the APIs with JWT.
- **PostgreSQL**: Relational database for storing user and music data.
- **JWT (JSON Web Token)**: For authentication and secure communication between microservices.
- **Docker**: Containerization of services (optional).

## Prerequisites

- Java 17 or higher
- Maven or Gradle
- PostgreSQL
- Docker (optional, for containerization)

## Setup and Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/music-streaming-app.git
    cd music-streaming-app
    ```

2. **Set Up PostgreSQL Database:**

   - Create a database for each microservice:
     ```sql
     CREATE DATABASE user_service_db;
     CREATE DATABASE music_service_db;
     ```

   - Update the database connection properties in the `application.yml` or `application.properties` files for each service.

3. **Build and Run the Microservices:**

    - **User Service:**
      ```bash
      cd user-service
      ./mvnw spring-boot:run
      ```

    - **Music Service:**
      ```bash
      cd music-service
      ./mvnw spring-boot:run
      ```

4. **Access the Application:**
   
   - The User Service will be available at `http://localhost:8080`.
   - The Music Service will be available at `http://localhost:8081`.

5. **Pics:**

   ![Start page](https://sun9-13.userapi.com/impg/1m3LBVu5uTX4vZSHnMt3J7beaXKMLMftUfAujw/hgxJtAUjydM.jpg?size=2560x1383&quality=96&sign=8bde1d67c1efef2481f85728495b516b&type=album)

    

