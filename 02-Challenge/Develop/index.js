const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./util/generateHTML');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const { getSystemErrorName } = require('util');
const team = [];


async function startProgram() {
    getName();

async function getName() {
    const newTeamMember = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team member?'
        }
    ])
    getId();
    return this.name;
}
async function getId() {
    const newId = await inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'What is the ID number of this employee?'
        }
    ])
    getEmail();
    return this.id;
}
async function getEmail() {
    const newEmail = await inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of this employee?'
        }
    ])
    getRole();
    return this.email;
}
async function getRole() {
    const role = await inquirer.prompt([
        {
            type: 'list',
            name: 'teamOperatorClass',
            message: 'What type of team member would you like to add?',
            choices: ['Intern', 'Engineer', 'Manager']
        }
        
    ]).then(ans => {
        // console.log(role.teamOperatorClass);
        switch (ans.teamOperatorClass) {
            case 'Intern':
                console.log("fuck");
                getSchool();
                const intern = new Intern(this.name, this.id, this.email, this.school);
                team.push(intern)
                console.log("fucks");
                break;
            case 'Engineer':
                getGithub();
                const engineer = new Engineer(this.name, this.id, this.email, this.github);
                team.push(engineer)

                break;
            case 'Manager':
                getOfficeNumber();
                const manager = new Manager(this.name, this.id, this.email, this.officeNumber);
                team.push(manager)
                break;
        }
        
    })
    // outputHtml();
    
    
}
}
function getSchool() {
    console.log("ass")
    const newSchool = inquirer.prompt(
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?'
        }).then(({ school }) => {
            console.log(school);
            const intern = new Intern(this.name, this.id, this.email, school);
            team.push(intern);
            console.log(team);
            outputHtml();
        })

        };
    
 

function getGithub() {
    const newGithub = inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of this engineer?'
        }
    ])
    
    return this.github;
    
}
function getOfficeNumber() {
    const newOfficeNumber = inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of this manager?'
        }
    ])
    
    return this.officeNumber;
    
}

async function outputHtml() {
    const newHtml = await inquirer.prompt([
        {
            type: 'list',
            name: 'htmlOutput',
            message: 'Complete filling out team members or create HTML team portfolio?',
            choices: ['Complete Team', 'Create More Team Members']
        }])
    if (newHtml.htmlOutput === 'Create More Team Members') {
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



