const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = ({fName, position, email}) => 

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?' ,
        name: 'fName',
    },
    {
        type: 'input',
        message: 'What is your position?',
        name: 'position',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    

  ])
  .then((data) => {
    const readMeContent = generateReadMe(data)
    fs.writeFile ('readme.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
