const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const render = require('./pageTemp.js');

const team = [];
const teamId = [];

const path = require('path');

//large function for menu 
//create manager function
//add engineer function
//add intern function
//create team function
//callback to create manager
//callback function to trigger 



// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'What is your name?' ,
//         name: 'fName',
//     },
//     {
//         type: 'input',
//         message: 'What is your position?',
//         name: 'position',
//     },
//     {
//         type: 'input',
//         message: 'What is your email?',
//         name: 'email',
//     },
    

//   ])
//   .then((data) => {
//     const readMeContent = generateReadMe(data)
//     fs.writeFile ('readme.md', readMeContent, (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
