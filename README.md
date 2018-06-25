# Expensify

This is a web app about saving expenses, the app has also a responsive layout.
- yarn is used as a package manager

- **Reactjs** and **Redux** are used in the project to build and manage the state of the components.

- CSS and SASS are used for styling the app.

- For the back-end Express and Firebase are used to create a server and Realtime database.

- Google authentication, Webpack and Babel are used.

- Jest and Enzyme is used for testing.

 The deployed version of the app on **Heroku** can be find [here](https://expensify-reactjs-course-udemy.herokuapp.com/dashboard).
 
 
##### To install dependencies 
	yarn install 
	or
	npm install

##### Set database for development
A file with name .env.development should be created as follow:

	FIREBASE_API_KEY=
	FIREBASE_AUTH_DOMAIN=
	FIREBASE_DATABASE_URL=
	FIREBASE_PROJECT_ID=
	FIREBASE_STORAGE_BUCKET=
	FIREBASE_MESSAGING_SENDER_ID=

##### Set database for test
A file with name .env.test should be created as follow:

	FIREBASE_API_KEY= 
	FIREBASE_AUTH_DOMAIN=
	FIREBASE_DATABASE_URL=
	FIREBASE_PROJECT_ID=
	FIREBASE_STORAGE_BUCKET=
	FIREBASE_MESSAGING_SENDER_ID=

The values should be taken from the firebase projects created by you (no qoutes needed). The previous step provides the ability of having two separate databases depending on what mode we are in *Development* or *test*

 #### To run the app in development mode:
 
	yarn run dev-server
	
 #### To run the app in test mode: 
 
	yarn test
