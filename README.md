This is a test app to pull data from themoviedb.org.  It's built in Node.JS using Express, with the front-end being React.
## Build Instructions
### Back-end
Pull repository, navigate to the proper directory and `npm install`, followed by `TMDB_API_KEY=<<enter api key here>> npm start`.  You **must** enter a valid API key in the env var `TMDB_API_KEY` for this to function properly.  
### Front-end
In a new terminal window, navigate to the `./client` directory in a new tab and `npm install`, followed by `npm start`.  This will start both the back-end (:5000 unless configured differently with PORT env var) and the front-end (:3000).  Navigate to `http://localhost:3000` to use the app.
## See it in action
Currently the app is online at https://rocky-wildwood-36465.herokuapp.com/.  Feel free to interact with it there.