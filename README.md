# Online Job Portal

This is a full-stack web application that serves as an online job portal, allowing users to search and apply for relevant job opportunities. The project consists of a React.js frontend and a Spring Boot backend.

## Features

- **Job Listing**: Employers can post job listings with detailed descriptions, requirements, and other relevant information.
- **Job Search**: Users can search for jobs based on various criteria, including job title, experience level, work mode (remote, hybrid, or on-site), and keywords.
- **Custom Search**: Users can perform advanced searches by combining multiple search filters and keywords.
- **Job Application**: Users can apply for jobs directly through the platform.
- **Notifications**: Users receive notifications for new job postings matching their search criteria.

## Technologies Used

### Frontend
- React.js
- React Router
- Axios (for HTTP requests)
- Tailwind CSS

### Backend
- Spring Boot
- Spring Data JPA (for database interaction)
- Spring Security (for authentication and authorization)
- MONGODB

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/online-job-portal.git`
2. Set up the backend:
   - Navigate to the `backend` directory: `cd online-job-portal/backend`
   - Update the database configuration in `src/main/resources/application.properties`
   - Build the project: `./mvnw clean install`
   - Run the Spring Boot application: `./mvnw spring-boot:run`
3. Set up the frontend:
   - Navigate to the `frontend` directory: `cd online-job-portal/frontend`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`
4. Access the application at `http://localhost:3000`

### Home Page
![Home Page](Snapshots/image1.png)

### Apply Page
![Apply Page](Snapshots/image2.png)

### Custom Search
![Custom Search](Snapshots/image3.png)

### Text Search
![Text Search](Snapshots/image4.png)


### Add JobPage
![Add Jobpage](Snapshots/image5.png)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).