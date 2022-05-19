# Backend Tasks - Part 1 - Groundwork

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

- `cd server`
- `npm i`

This will automatically install the following packages:
- express
- mongoose
- dotenv

To run the backend at any time, you can use the following command

- `node server.js`

##### If you have nodemon installed

- `nodemon server.js`

## Task 1 - Write a .env file

> **Note**: For this assignment, we already assume you have a MongoDB server, and know how to access your credentials.

1. Create a file in your root folder called `.env`. This file will contain all the connection information for accessing your database.

2. Copy and paste the text in the file `.env.example`, into your `.env` file

3. For the key `DB_NAME`, use **fullstack-messageboard**

4. For the other keys, fill in the details as provided to you by your MongoDB service.
    - DB_HOST=
    - DB_USER=
    - DB_PASS=

## Task 2 - Creating your User schema

We would like to store information about each user

Open the `/models/User.js` file

1. Use the following information to complete the schema:

   ```text
   username: string, required, unique
   firstname: string, required
   lastname: string
   ip: string 
   hash: string, required
   avatar: string, default: generateRobohashAvatar()
   dates: {
       registered: date, default: Date.now()
       last_active: date
   }
   messages: number
   ```

2. For the fieldname `avatar`, use the helper function `generateRobohashAvatar()` found in `/helpers/avatar.js`

A model has already been created and exported for you

## Task 3 - Creating your Message schema

We would like to build a collection that stores information about each post (message)

Open the `/models/Message.js` file

Use the following information to complete the schema:

```text
user_id: ObjectId, ref, required
content: string, required
dates: {
    created: date, default: Date.now()
    last_edited: date
}
category: enum (decide on your own categories)
deleted: boolean
```

> **Hint**: Don't forget, this schema references the `User` model, via the `user_id` field

A model has already been created and exported for you

## Task 4 - Setting up our routes

We want to filter traffic based on the route of the request

Setup the following routes in `/server.js`:

1. path `/user` should go to the `routes/user.js` module
2. path `/message` should go to the `routes/message.js` module

## Task 5 - Add missing dependencies

Install the following npm packages:

   - `bcrypt`
   - `cors`

## Task 6 - Setting up new middleware

In `/server.js`:

1. Setup the `cors()` middleware, so that cross-origin requests are allowed

2. Setup the `express.json()` middleware, so that requests that include JSON objects, can be parsed and read by the server

## Task 7 - Writing the user 'register' controller

This task is to be completed in the `/controllers/userControllers.js` file

Create and export a function which can be used to handle registration

The following data is to be expected from the client request:

   ```text
   username
   firstname
   lastname
   password
   ```

1. Use the `username` to see if the user has already registered. If the user can be found, respond with an error

2. If the `username` is not found, create the user

3. For the `ip` field, you can use the `request.ip` to get the user IP address

> **Hint 1**: Do not save the password directly into the database! Use `bcrypt.hash` and save the hash

> **Hint 2**: You will need to interact with the `User` model

## Task 8 - Writing the message 'create' controller

This task is to be completed in the `/controllers/messageControllers.js` file

Create and export a function which can be used to create a message

The following data is to be expected from the client request:

   ```text
   user_id
   content
   category
   ```

## Task 9 - Writing the message 'view-single-message' controller

This task is to be completed in the `/controllers/messageControllers.js` file

Create and export a function which can be used to get 1 message from the `Message` collection

The client only needs to send the `message_id` with the request

1. Search the `Message` collection for the message that matches the `message_id` and where the `deleted` field is `false`

2. Use the `populate()` method on your search to reference the `user_id` field, and populate it with the user data

3. If a message if found, return the result to the client

4. Otherwise, return an error

## Task 10 - Writing the message 'edit' controller

This task is to be completed in the `/controllers/messageControllers.js` file

Create and export a function which can be used to edit a message

The following data is to be expected from the client request:

   ```text
   user_id
   message_id
   content
   ```

1. Use the `message_id` to see if the message exists. If it does not exist, respond with an error

2. If `user_id` does not match the `user_id` of the message, respond with an error

3. Otherwise, update the message `content` with the new content from the request

4. Modify the `dates.last_edited` field with a new value (the current date)

## Task 11 - Writing the message 'delete' controller

This task is to be completed in the `/controllers/messageControllers.js` file

Create and export a function which can be used to delete a message

The following data is to be expected from the client request:

   ```text
   user_id
   message_id
   content
   ```

1. Use the `message_id` to see if the message exists. If it does not exist, respond with an error

2. If `user_id` does not match the `user_id` of the message, respond with an error

3. Otherwise, set the message `deleted` field to `true` for the message

> **Note**: We are not actually deleting the message! Some online services actually do this - deleting content does not actually 'delete' it, it just hides it.
> 
> So be careful what you type on the internet!

## Task 12 - Writing the message 'view-all-by-category' controller

This task is to be completed in the `/controllers/messageControllers.js` file

Create and export a function which can be used to get all messages from the `Message` collection

The client only needs to send the `category` with the request

1. Search the `Message` collection for all messages that match the `category` and where the `deleted` field is `false`

2. Use the `populate()` method on your search to reference the `user_id` field, and populate it with the user data

3. Return the results to the client

> Bonus: Instead of displaying **all** the messages, you can limit the results, for example - to the last 20 messages. You would first need to `sort()` by date and then `limit()` the results

## Task 13 - Setting up our user-registration endpoint

Open the file `/routes/user.js`. We will create 1 endpoint here.

1. Create 1 endpoint to register the user

   > **Note**: Here you must also decide what request method this should have

2. Import the registration controller from `/controllers/userControllers` and assign it

## Task 14 - Setting up our message endpoints

Open the file `/routes/message.js`. We will create 4 endpoints here.

1. Create 4 endpoints;
   - 1 for viewing messages
   - 1 for creating messages
   - 1 for editing (updating) messages
   - 1 for deleting messages

   > **Note**: Here you must also decide what request methods these should have

2. Import the controllers from `/controllers/messageControllers` and assign them to their respective endpoint

## Backend Part 1 - Complete!

Now move onto [Part 2](./BACKEND_TASKS_2.md) 🥳