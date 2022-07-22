const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./util/generateHTML');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const team = [];

const startProgram = () => {
    const managerForm = await managerQuestions()
    const manager = new Manager(managerForm.managerName, managerForm.managerId, managerForm.managerEmail, managerForm.managerOfficeNumber);
    team.push(manager);
    startTeam();

}

async function managerQuestions() {
    const managerFillin = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager of the team?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID number of this manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of this manager?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the office number of this manager?'
        }
    ])
    return managerFillin;
}










