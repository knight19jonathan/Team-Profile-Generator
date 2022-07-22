const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./util/generateHTML');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const team = [];

async function startProgram() {
    const managerForm = await managerQuestions()
    const manager = new Manager(managerForm.managerName, managerForm.managerId, managerForm.managerEmail, managerForm.managerOfficeNumber)
    team.push(manager)
    startTeam()

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
async function startTeam() {
    const teamFillin = await teamClassPick();
    console.log(teamFillin)
    if(teamFillin === 'Intern') {
        const internFillin = await internQuestions();
        const intern = new Intern(internFillin.internName, internFillin.internId, internFillin.internEmail, internFillin.internSchool);
        team.push(intern);
    } else if (teamFillin === 'Engineer') {
        const engineerFillin = await engineerQuestions();
        const engineer = new Engineer(engineerFillin.engineerName, engineerFillin.engineerId, engineerFillin.engineerEmail, engineerFillin.engineerGithub);
        team.push(engineer);
    } else {
        console.log("Exit!");
        return;
    }
    outputHtml()
}
async function teamClassPick() {
    const teamClass = await inquirer.prompt([
        {
            type: 'list',
            name: 'teamOperatorClass',
            message: 'What type of team member would you like to add?',
            choices: ['Intern', 'Engineer', 'Quit']
        }
    ])
    return teamClass.teamOperatorClass;
}
async function internQuestions() {
    const internFillin = await inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern?'
        },
        {
            type: 'number',
            name: 'internId',
            message: 'What is the ID number of this intern?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of this intern?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school is this intern attending?'
        }
    ])
    return internFillin;
}
async function engineerQuestions() {
    const engineerFillin = await inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is the ID number of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of this engineer?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the github username of this engineer?'
        }
    ])
    return engineerFillin;
}
async function outputHtml() {
    const newHtml = await inquirer.prompt([
        {
            type: 'list',
            name: 'htmlOutput',
            message: 'Complete filling out team members or create HTML team portfolio?',
            choices: ['Complete Team', 'Create More Team Members']
        }])
    if(newHtml.htmlOutput === 'Create More Team Members') {
        teamClassPick();
    } else {
        const html = generateHTML(team);

        fs.writeFile('./output/team.html', html, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
}

startProgram();



