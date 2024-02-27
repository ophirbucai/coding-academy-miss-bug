# Miss Bug 🪲

Miss Bug, a project to monitor bugs using a simple project using MERN stack and NPM workspaces for CI/CD.
The application is designed to monitor bugs in a project.

Created by [Ophir](https://develophir.com/) and [Coding Academy](https://www.coding-academy.org/).

### Installation

1. Begin by running `npm install` to install the dependencies for the project.


2. Ensure that you have <b>mongoDB</b> installed and running on your local machine, otherwise, you can install it from the [official website](https://www.mongodb.com/docs/manual/administration/install-community/). 


3. If you are running the project on a mac, run `brew services start mongodb-community` to start the mongoDB service, and `brew services stop mongodb-community` to stop the service.


4. Execute `npm run dev`. This script triggers all scripts listed in the root directory using the CLI command `run-p`, simultaneously running the scripts prefixed with `dev:*`. The application will be running on `http://localhost:3000/`.


### Usage
- Create a meaningful project you want to monitor
- Add bugs to the project
- Assign the bugs to a user
- Mark the bugs as resolved when they are fixed
- View the bugs status and the project status
- The admin user can delete the project when it is no longer relevant

