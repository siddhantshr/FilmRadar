# FilmRadar
FilmRadar is a movie recommendation web application made with ReactJS & Express and uses OMDb API, GROQ API.

# PLEASE NOTE
This project was created when I was on a vacation abroad and hence the code quality might not be up to the mark. Also please consider I am pretty bad at frontend dev so the UI/UX might not be the best, I used tailwindcss and flowbite for frontend.

# How To Run Locally
1. Clone the repository
```
git clone https://github.com/siddhantshr/FilmRadar
```
2. Navigate to the project directory

3. Setup the server
```
cd server
npm install
```
4. Create a `.env` file in the `server` directory and add your OMDb and GROQ API keys, refer to `.env.example` for the format.
PLEASE KEEP PORT AS 5212 else you will need to change client code as well.

5. Start the server
```
npm start
```

6. Setup the client
```
cd ../client
npm install
```

7. Start the client
```
npm start
```
 
8. Go to your react app

# Features

- Search for movies by title
- Get movie recommendations based on mood
- View detailed information about each movie

# Technologies Used
- ReactJS
- Express
- OMDb API
- GROQ API

# Future Improvements
- Add user authentication
- Allow users to save favorite movies
- Improve UI/UX design
