// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    name: "usage",
    message: "Provide usage information:",
  },
  {
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    name: "license",
    message: `Please choose the number from the following licenses: 
    1. MIT License
    2. General Public License (GPL)
    3. Apache License 2.0
    4. Mozilla Public License
    5. Creative Commons Licenses`,
  },
  {
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md has been successfully generated.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Hello");
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("./generatedReadme/README.md", markdown);
  });
}

// Function call to initialize app
init();
