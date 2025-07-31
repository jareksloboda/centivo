1. Used mongoose lib to simplify connectivity and interactions with MongoDB. Mongoose also helps with defining a schema that maps to the MongoDB collection, defined in models/User.js
2. To create the REST endpoint i used Express.js - small, but flexible web application framework for Node.js. Routes are defined in routes/index.js
3. index.js - main app file that:
    a. loads routes (or REST endpoints)
    b. starts a web server at port 3000
    b. connects to MongoDB
4. package.json - contains dependencies that this app is using
4. How to run
    a. npm install
    b. node index.js
    c. open a browser at http://localhost:3000/users/<<ObjectId>>