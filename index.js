const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const renderHtml = require("./src/template")

const teamArray = []

const ManagerQuestions = [{
    type: "input",
    message: "What is your name?",
    name: "name"
},
{
    type: "input",
    message: "What is your ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},
{
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
}]

const InternQuestions = [{
    type: "input",
    message: "What is the Intern's name?",
    name: "name"
},
{
    type: "input",
    message: "What is the Intern's ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is the Intern's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the Intern's school?",
    name: "school"
}]

const EngineerQuestions = [{
    type: "input",
    message: "What is the Engineer's name?",
    name: "name"
},
{
    type: "input",
    message: "What is the Engineer's ID number?",
    name: "id"
},
{
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the Engineer's github username?",
    name: "github"
}]

const selectEmployee = [{
    type: "list",
    message: "What would you like to do next?",
    name: "employeeType",
    choices: ["Add Engineer", "Add Intern", "Build team"]
}]


function init() {
    inquirer.prompt(ManagerQuestions)
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            teamArray.push(manager)
            // console.log(teamArray)
            selectEmployees()
        })
}


function selectEmployees() {
    inquirer.prompt(selectEmployee)
        .then((response) => {
            if (response.employeeType === "Add Intern") {
                addIntern()
            }
            else if (response.employeeType === "Add Engineer") {
                addEngineer()
            }
            else {
                buildTeam()
            }
        })
}

function addIntern() {
    inquirer.prompt(InternQuestions)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            teamArray.push(intern)
            // console.log(teamArray)
            selectEmployees()
        })
}

function addEngineer() {
    inquirer.prompt(EngineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            teamArray.push(engineer)
            // console.log(teamArray)
            selectEmployees()
        })
}



function buildTeam() {


    fs.writeFileSync("index.html", renderHtml(teamArray), "utf-8"
    )

}


init();
