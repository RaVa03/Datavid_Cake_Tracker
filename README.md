<h1 align="center"> Datavid Cake Tracker - Demo website using React & Express.js</h1>

<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The scope of "Datavid Cake Tracker" app is to track the birthdays of the added members. Therefore, the functionalites include adding a new member (validations are applied for an unique name, an unique location and a minimum age of 18 years old), viewing all the members with their data and sorting the members based on the closest upcoming birthday.
<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The technologies that were used are: React for front-end (with the Vite build tool), Express.js for back-end and MongoDB for the database (using the Mongoose library).
<br>

## Instructions of how to run the project
  
  Running the Vite app (needs npm version 18+):
1. Clone the repo
2. Navigate to the project
3. Run the 'npm install' command to initialize the npm project
4. Run the 'npm run dev' command to start the application (select React and Javascript when configuring the project)
5. Follow the given link to access the app in the browser, for example: 'http://localhost:5173/'


When installing MongoDB, you can keep all the suggested settings.
Running the server:
1. Open MongoDB Compass and connect to the recommended server (mongodb://localhost:27017/)
1. Navigate the <project_path>/src/server/
2. Run the 'node index.js' command to start the server
*This must be ran in a separate terminal window, to make sure both frond-end and back-end are running at the same time.

## A glimpse of how it should look
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![image](https://github.com/RaVa03/Datavid_Cake_Tracker/assets/133386404/184da079-d101-4b87-b77d-c6e19d726add)

  <p align="center"><sup> Screenshot of AllMembersPage, unordered view of the members </sup></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![image](https://github.com/RaVa03/Datavid_Cake_Tracker/assets/133386404/bfdd780e-b727-4837-898d-5ee087acc50c)


  <p align="center"><sup> Screenshot of AllMembersPage, ordered view of the members based on their closest birthdays</sup></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![image](https://github.com/RaVa03/Datavid_Cake_Tracker/assets/133386404/8b37b54c-7cac-4b02-ae5f-6f08c475241d)



  <p align="center"><sup> Screenshot of the AddMemberPage with the corresponding form</sup></p>
