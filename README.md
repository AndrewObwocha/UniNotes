# UniNotes React — Django Application

## Welcome!
UniNotes is a web application designed to centralize course material from your professor, textbook, and anywhere online, all in one place. Leveraging REST APIs for resource management and JWT for authentication, this application provides secure, personalized note management. I aim to improve students' studying efficiency by minimizing the friction of looking for resources they previously found.

## UniNotes' Vision
My vision is to free student time to do what matters to them more beyond studying. Repeatedly looking for that textbook or the 'slides' would compound into over 30 minutes of wasted time while studying. This application is my solution to that problem.

## Features
- **User Authentication**: JWT-based registration and login system
- **Course Management**: View available courses with instructor information
- **Personal Notes**: Create, view, update, and delete notes organized by course


## Technologies Used
- **React** — Presents a usable UI to the end-user 
- **REST API** — Handles HTTP requests from the frontend to the backend
- **Django (Python)** — Implements the backend operations, including routing, server logic, ORMs, etc.
- **PostgreSQL Database** — Manages data storage, including courses and notes
 
## Setup & Running

### Pre-Requisites
- Download and install Python 3.8 from the official website — https://www.python.org/downloads/

### Backend Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/{yourUsername}/UniNotes.git
   cd UniNotes
   ```
2. **Create and activate virtual environment**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install the dependencies**
	 ```sh
	 pip3 install -r requirements.txt
	 ```
4. **Run database migrations**
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
5. **Start development server**
   ```sh
   python manage.py runserver
   ```
6. **Access Backend**
	 - Visit `http://localhost:8000` for the backend server.

### Frontend setup

1. **Navigate to frontend directory**
   ```sh
   cd frontend
   ```
2. **Install dependencies**
   ```sh
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
   ```sh
   npm start
   ```
5. **Access Frontend**
	 - Visit `http://localhost:3000` for the frontend server.

## Contributing

Contribution is not only welcome, but encouraged! Here are some ways you can contribute:

- **Feature requests** — You can send feature ideas by opening an issue with the tag feature-request.
- **Bug reports** — You can report a bug by opening an issue with the tag bug
- **Pull requests** — You can contribute directly by forking, coding, and submitting PRs!

## License

This project is licensed under the MIT License.

For further information, feel free to initiate contact:

- **Email** — obwochandrew@gmail.com 
- **Project Link** — https://github.com/AndrewObwocha/UniNotes

