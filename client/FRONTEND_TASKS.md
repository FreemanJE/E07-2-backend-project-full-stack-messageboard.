# Frontend Tasks

The frontend is stored in the `/client` folder

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

    - `cd client`
    - `npm i`

To run the frontend at any time, you can use the following command

    - `npm start`

## Task 1 - Read the code in your frontend application

Spend some time familiarising yourself with the frontend code in the `/client` folder

- `App.js` - is the root of our application
- `/components` - contains all the components for our application
- `/components/Homepage` - contains the files for the `Homepage` component
- `/components/Login` - contains the files for the `Login` component
- `/components/Register` - contains the files for the `Register` component

## Task 2 - Installing react-router-dom

We will want to use routing to allow the application to load different components, based on the routes used in the URL

> Note: `react-router-dom` is designed specifically for browsers

1. Install the `react-router-dom` npm package

> Hint: Make sure you are in the `/client` folder when you install this!

## Task 3 - Using react-router-dom

1. Inside `App.js`, import the following objects from `react-router-dom`: `BrowserRouter, Route, Switch`

2. Import the `Homepage`, `Register` and `Login` components

2. Use `react-router-dom` to create routes to each of these components

If you run the frontend server, you should be able to test that the routes you use in the browser, successfully redirects to their corresponding component

## Task 4 - Updating the Register component

The Register component should interact with the backend register route, which you have already setup

Update the Register component so that when the form is submitted:

- the component sends a request to the backend
- the values from the input fields (via the `TextField` component) are sent as part of that request
- errors from the backend are dealt with accordingly
- if registration is successful, the user is redirected to another page

> **Hint 1**: You could use `fetch` but `axios` might be easier

> **Hint 2**: If you prefer to use `axios`, don't forget to install it first!

> **Hint 3**: For redirection, you can use the `useHistory` hook from `react-router-dom`

## Task 5 - Updating the Login component

The Login component should interact with the backend login route, which you have already setup

Update the Login component so that when the form is submitted:

- the component sends a request to the backend
- the values from the input fields (via the `TextField` component) are sent as part of that request
- errors from the backend are dealt with accordingly
- if login is successful, the JWT token returned from the server is stored in the localStorage
- if login is successful, the user is redirected to another page

## Further Tasks for consideration

Use the following information to structure the rest of your application. Consider these components as building blocks.

### Navigation

1. Create a navigation component which will be visible to users who are NOT logged into the website
2. Create a navigation component which will be visible to users who ARE logged into the website

Update your application so that the correct navigation shows when the user is either logged in or not

### Logout

Create a component that removes the JWT token from localStorage, and causes the application to switch state from logged in to logged out

### Viewing messages

1. Create a component which allows users to view all messages from the server, based on category
2. Create a component which allows users to view an individual message from the server

### Creating messages

Create a component which allows a user to create a message

### Deleting messages

Create a component which allows a user to delete a message
