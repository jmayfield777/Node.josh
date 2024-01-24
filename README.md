# Node.josh

## Description 

This project is a command line application that generates README.md files for the user. The user must have inquirer@8.2.4 installed, and once it is, they will be asked a series of questions that will be used to create the new README.md. The finished document will be complete with a title, description of the project, table of contents, installation, usage, license, conrtributing, tests, and questions sections. 

[Link to screencastify video](https://drive.google.com/file/d/1b-fnvMFqFg2ZOjUSG63z_RJAZMAW3RoC/view) 

## Installation

To run this project, run the following command:

```
npm init 
```

(add "-y" to answer yes to all questions regarding the creation of the package.json), then run the following code to install the inquirer package to receive the questions to generate the README.md:

```

npm i inquirer@8.2.4
```

## Usage

Clone this repo and save it locally to your computer. Open terminal, git bash, or whichever command line interface you are using and navigate to the directory holding the two js files. Run this command to start the application:

```
node index.js
```

Once you have answered all of the questions, "Successfully created README.md!" will be logged to the console. Navigate to your README.md and see that the file has been rendered from the answers you have given in the commmand line. 

## Credits

https://shields.io/badges (consulted this code for some help with building out the functions)

https://stackoverflow.com/questions/47263055/writefile-does-not-create-file (consulted this code for some help with building out the functions)

https://nodejs.org/api/fs.html#fsappendfilepath-data-options-callback (consulted this code for some help with building out the functions)

https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts#step-4-using-lists-raw-lists-expandable-lists-checkboxes-passwords-and-editors (consulted this code for some help with building out the functions)

https://github.com/lstillwe/readme-generator/blob/main/utils/generateMarkdown.js (consulted this code for some help with building out the functions)

## License

Please refer to the MIT License in the repo