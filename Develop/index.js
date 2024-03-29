// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = [
    'None',
    'MIT',
    'BSD',
    'GPL',
    'Apache'
];

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: licenses,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created README.md!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile('README-generated.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();
