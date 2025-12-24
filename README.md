# UniNotes: University Note‑Taking App with React, Django & PostgreSQL

## Capture, organize, and revisit your university notes in one place.

This is a full‑stack note‑taking platform with a React + Vite frontend, a Django REST API backend, and a PostgreSQL database running in Docker. It offers JWT-based authentication, course-linked notes, responsive UI components, and interactive CRUD workflows for organizing and reviewing university material and exams.

- Centralizes lecture slides, textbook excerpts, and online resources by course.
- Secure registration, login, and JWT-protected routes for private notes.
- Create, edit, and delete notes linked to specific courses.
- Filter and browse notes by course for focused revision.
- Clean, responsive UI optimized for laptops and mobile devices.
- Dockerized services for consistent, reproducible local deployments.

## How to install UniNotes on Docker

These steps assume no prior developer experience—just follow them in order.

1. Install Docker Desktop from the official Docker website and open it.
2. Download this project’s code from GitHub ("Code → Download ZIP"), then unzip the folder.
3. Open a terminal and navigate into the project folder, for example:
   ```bash
   cd UniNotes
   ```
4. Create a file named `.env` in the project root and add:
   ```bash
   DATABASE_PASSWORD=yourStrongPasswordHere
   VITE_API_URL=http://backend:8000
   ```
5. In the same terminal, start everything with:
   ```bash
   docker compose up --build
   ```
6. Wait until the logs show the backend and frontend are running, then open your browser at:
   - Frontend: http://localhost:5173
   - API (for reference): http://localhost:8000

## How to tweak this project for your own use cases

This project was predominantly designed to help any student in need, feel free to clone and rename this project to use for your own purposes. Be as creativeas you wish!

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tabs above. If you would like to submit a PR with a fix, reference the issue you created!

## License

This project is licensed under the MIT License.
