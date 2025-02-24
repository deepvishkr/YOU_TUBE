## GITHUB LINK
https://github.com/deepvishkr/YOU_TUBE

## MERN YouTube Clone

This is a full-stack YouTube clone built using the MERN (MongoDB, Express, React, Node.js) stack. Users can view and interact with videos, like, comment, and upload content. This project will help you understand how to build a real-world application using MongoDB, Express, React, and Node.js.

## Technologies Used

MongoDB: Database for storing user data, videos, comments, and likes.

Express.js: Web framework for handling backend routes and APIs.

React.js: Frontend library for building the user interface.

Node.js: JavaScript runtime for backend logic.
JWT (JSON Web Token): For user authentication and authorization.

Mongoose: MongoDB object modeling for Node.js.

React Router: For handling navigation and routing within the app.

Axios: For making HTTP requests to the backend.

## Frontend Components

Navbar: Displays logo, search bar, and profile button.

HomePage: Displays a list of all videos and a search bar.

VideoPage: Displays a specific video, along with comments and like/dislike buttons.

LoginPage: User login page.

ProfilePage: Displays the user's profile and videos they've uploaded.

UploadPage: Allows users to upload a new video.


## Backend API Endpoints

POST /comment: Adds a new comment to a video, authenticated by JWT.

GET /comment/:videoId: Retrieves all comments for a specific video by its videoId.

POST /signup: Registers a new user with provided details (e.g., username, password).

POST /login: Authenticates a user and generates a JWT token for subsequent requests.

POST /logout: Logs out the user by clearing the session or JWT token.

POST /comment: Adds a new comment on a video, authenticated by JWT.

GET /comment/:videoId: Fetches all comments associated with a specific video by its videoId.

## User Authentication

Sign up: Users can create an account with their email and password.

Login: Users can log in using their credentials.

JWT Authentication: The backend uses JSON Web Tokens (JWT) for authenticating and authorizing users.