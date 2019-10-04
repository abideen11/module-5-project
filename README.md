# module-5-project

Project Premise: A platform that enables users to lend microloan to aspiring and budding entrepreneurs in developing countries.

The platform works by the user signing up to be a lender, after their credentials have been validated, they will be directed to the page that list all entrepreneurs. Each entrepreneur has five attributes on the entrepreneur, they are name, continent, country, reason for the loan and loan amount. At that page, the lender can choose which entrepreneur they want to loan to. After picking, they will be directed to that entrepreneur's own page, where they will enter the amount they want to loan and the duration. The lender can only enter an amount that is less than or equal the amount the entrepreneur is seeking. If not, the "Accept" button will be disabled. 

Guidelines
There are two parts of the project, the client(frontend) and the server(backend). It recommended to install both of them before making changes to the projects.

-Install backend
In the terminal create the folder to hold the backend and frontend files and cd into the folder.
Install the backend by typing --rails new <my-project> --api -T --database=postgresql--

-Install frontend
Install the frontend by typing --npm install -g create-react-app--

--Implement data on backend
Authentication and authorization of the project will be implemented in the backend
Create models that will be used to run the authentication and authorization
Create the models for the data that will be used