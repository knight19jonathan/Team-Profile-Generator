// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        getName();
        return this.name;
    }
    getId() {
        getId();
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// const getName = async () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the employee's name?"
//         }
//     ]).then(async (answer) => {
//         console.log(answer.name)
//         return answer.name;
//     }).catch(err => {
//         console.log(err);
//     });
// }

// const getId = async () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "id",
//             message: "What is the employee's id?"
//         }
//     ]).then(async (answer) => {
//         console.log(answer.id)
//         return answer.id;
//     }).catch(err => {
//         console.log(err);
//     });
// }

// const getEmail = async () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "email",
//             message: "What is the employee's email?"
//         }
//     ]).then(async (answer) => {
//         console.log(answer.email)
//         return answer.email;
//     }).catch(err => {
//         console.log(err);
//     });
// }
// const getRole = async () => {   
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "role",
//             message: "What is the employee's role?"
//         }
//     ]).then(async (answer) => {
//         console.log(answer.role)
//         return answer.role;
//     }).catch(err => {
//         console.log(err);
//     });
// }

 module.exports = Employee;