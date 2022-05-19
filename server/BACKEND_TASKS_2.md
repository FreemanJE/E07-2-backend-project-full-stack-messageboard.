# Backend Tasks - Part 2 - Authentication / Authorisation

## Task 1 - Add missing dependencies

Install the following npm packages:

- `passport`
- `passport-jwt`
- `jsonwebtoken`

## Task 1 - Setting up a JWT Token Issuer

We need to be able to create JWT tokens and issue them to clients, so that we they can use them to authorise future requests

You will create a function which when called will:
   - receive a `User` object as an argument
   - return a signed token

1. Create a new file called `jwtIssuer.js` inside a folder called `helpers`

2. Import the npm package `jsonwebtoken`. You will use this library to sign your tokens.
   
3. Create your token generation function. Some useful names you can use are `generateToken` or `issueToken`
   
4. Inside this function, create a variable `payload`. This should be an object with 2 keys:
   - `sub` - the value for this key should be the id of the user
   - `iat` - the value for this key should be `Date.now()` (the current time)
   
5. Modify your function to return a signed token, which encodes the `payload` variable into the token
   
   > **Hint 1**: You may want to use the `jsonwebtoken.sign` method
   
   > **Hint 2**: Don't forget your secret key! A good place to store this would be in the `.env` file

6. Inside this function use the following function to create a token:

7. Export this function

## Task 2 - Writing the user 'login' controller

For this controller, we can assume the client will send their username and their password as part of the request body

1. Find the user by their username from the `User` model

2. If the user can not be found, respond with an error

3. Otherwise use bcrypt to check that the supplied password, when hashed matches the hashed password in the database

   > Hint: You might want to use `bcrypt.compare`

4. If the passwords do not match, respond with an error

5. If the passwords match, generate a new token with the function you created in **Task 1** and send it to the user in your response object

## Task 3 - Setting up the user-login endpoint

Open the file `/routes/user.js`. We will create 1 more endpoint here.

1. Create 1 endpoint to login the user

   > **Note**: Here you must also decide what request method this should have

2. Import the login controller from `/controllers/userControllers` and assign it

## Task 4 - Configure passport

Before we can use passport, we must configure it. We would like to use it to authorise with JWT

Create a passport configuration file (`passport-config.js`). Create a function which when run:

1. Uses the `passport-jwt` strategy

2. Reads the JWT from the header of the request with the `ExtractJWT.fromAuthHeaderAsBearerToken()` method

3. Finds the user from the `User` model (using the encoded `user_id` in the token)

4. If the user can be found in the collection, use the `done` method to return the user object

5. Otherwise, use the `done` method to return an error

6. Export your function

## Task 5 - Import passport

Import the `passport` configuration file in your `server.js` file, and run the function you exported in **Task 4**

## Task 6 - Authorising routes / endpoints

We want to use passport (and the passport JWT strategy) to authorise specific routes / endpoints, so only authorised users can perform specific tasks

We wouldn't want somebody deleting another person's message!

Use the `passport.authenticate('jwt',{session:false})` as middleware in the routes / endpoints you wish to protect

## Task 7 - Running and testing our API

Now everything is setup, test your API with a testing tool such as Postman or Insomnia, (or any other tool).

Validate that the results you receive are what you would expect. You can check which are valid usernames by looking through your `users` collection

## Backend Part 2 - Complete!

Now move onto the [frontend tasks](../client/FRONTEND_TASKS.md) 🥳