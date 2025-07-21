# Course Notes Application

A full-stack web application for organizing and managing notes by course. Users can register, authenticate, view available courses, and create personal notes associated with specific courses.

## Features

- **User Authentication**: JWT-based registration and login system
- **Course Management**: View available courses with instructor information
- **Personal Notes**: Create, view, and delete notes organized by course
- **Secure Access**: Users can only access their own notes

## Technology Stack

### Backend
- **Framework**: Django (latest) with Django REST Framework
- **Database**: SQLite (development)
- **Authentication**: JWT (JSON Web Tokens) using `djangorestframework-simplejwt`
- **Language**: Python 3

### Frontend
- **Framework**: React
- **HTTP Client**: Axios (api integration)
- **Styling**: CSS

## API Endpoints

### Authentication (`/authentication/`)
- `POST /authentication/` - User registration
- `POST /authentication/token/get` - Obtain JWT token pair
- `POST /authentication/token/refresh` - Refresh access token

### Courses (`/courses/`)
- `GET /courses/course/list` - List all available courses

### Notes (`/notes/`)
- `GET /notes/note/createAndList` - List user's notes (with optional `?course=<course_id>` filter)
- `POST /notes/note/createAndList` - Create a new note
- `DELETE /notes/note/delete/<int:pk>` - Delete a specific note (user must be owner)

## Data Models

### Course
- `title` - Course name (max 100 characters)
- `code` - Course code (max 10 characters)
- `instructor` - Instructor name (max 100 characters)

### Note
- `title` - Note title (max 100 characters)
- `content` - Note content (text field)
- `created_at` - Auto-generated timestamp
- `author` - Foreign key to User (owner of the note)
- `course` - Foreign key to Course

## Setup Instructions

### Backend Setup

1. **Clone the repository and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install django
   pip install djangorestframework
   pip install djangorestframework-simplejwt
   pip install django-cors-headers
   ```

4. **Run database migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start development server**
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file**
   Create a `.env` file in the frontend root directory:
   ```env
   REACT_APP_ACCESS_TOKEN=your_jwt_access_token
   REACT_APP_REFRESH_TOKEN=your_jwt_refresh_token
   ```
   Note: These tokens will be set after user login

4. **Start development server**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## Usage

1. **Register**: Create a new user account through the registration endpoint
2. **Login**: Authenticate to receive JWT tokens
3. **Browse Courses**: View all available courses on the home page
4. **Manage Notes**: Create, view, and delete personal notes for specific courses
5. **Filter Notes**: Use course parameter to filter notes by specific course

## Security Features

- JWT-based authentication for secure API access
- User isolation - users can only access their own notes
- Permission-based views with authentication requirements
- CORS configuration for cross-origin requests

## Development Notes

- Database uses SQLite for development - consider PostgreSQL for production deployment
- No additional environment variables required for backend configuration

## Future Enhancements

- Course enrollment system
- Note sharing capabilities
- Search and filtering functionality
- File attachments for notes
- Production deployment configuration
