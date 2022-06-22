# fetch and display trending users
This is a simple project, that uses the github-Trending-Api, to fetch and display users with trending repos based on a selected programming language.


To test this project, you should open the trendingprojects-api folder within an IDE and run the main. Then you'd want to perform npm start within the trendingprojects-ui folder. Keep in mind, that you'd need to execute npm install beforehand, to get the node_modules folder.

The (MVC) architecture of this project is relatively simple and illustrated trough a diagram within the project folder.
A user makes a request through a form field within the view, that gets passed to the controller within the backend, that utilizes a project service, to attain the corresponding response. This project services facillitates  a http-request to the third party api and afterwards processes the response data, to create a list of instances of the project class, which stands for our model.

The backend is written in java and utilizes the Http Client API aswell as the spring framweork.
The frontend utilizes react and it's context api, aswell as plain css 


