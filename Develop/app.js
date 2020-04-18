const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const bhtml = require("./template")
const employeeArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = []
let team = "";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
const startInfo = {}
let firstStart = 1;
//handles first start
if (firstStart) {

    const questions = [
        {
            type: "input",
            message: "Please Enter Your Team's Name",
            name: "team"
        },
        {
            type: "number",
            message: "How Many People Are On Your Team, Besides you?",
            name: "teamSize"
        },
        {
            type: "input",
            message: "Enter Manager Name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager Id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager Email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Manager Office Number",
            name: "office"
        },
    ]
    promptManager()
    async function promptManager() {
        for (let i = 0; i < questions.length; i++) {
            await inquirer.prompt(questions[i])
                .then(function (answer) {
                    //adds the user's answer for each question to startInfo
                    let key = Object.keys(answer)[0]
                    //if teamsize is not a number,asks for valid data then re-asks question 
                    if (key === "teamSize" && isNaN(answer[key])) {
                        console.log("Please Input an Integer for team size");
                        i--;
                    }
                    //if answer is a blank string, asks for valid data then re-asks question 
                    else if (answer[key] === "") {
                        console.log("Please Input valid Data");
                        i--;
                    }
                    //if the key contains email, but the given answer doesnt match the regex, asks for valid email. re-asks question
                    else if (key.includes("email") && !answer[key].match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)@(?:[a-z0-9]+)\.(?:[a-z0-9]+)$/g)) {
                        console.log("Please Input valid Email Address   Example:'johnsmith@example.com'");
                        i--;
                    }
                    //if no validation problems are found, adds key/attribute pair to startInfo
                    else {
                        startInfo[key] = answer[key];
                    }
                })
        }
        console.log(startInfo)
        let man = new Manager(startInfo.name, startInfo.id, startInfo.email, startInfo.office)
        team = startInfo.team
        managerArray.push(man)
        addMember(startInfo.teamSize,)
    }
}
function addMember(amount) {
    //if loop > 1, function runs once
    let loop = 0;
    //changes the value of loop if amount is specified
    if (amount !== undefined || amount !== null) {
        loop = amount;
    }
    //default employee questions
    const employee = [
        {
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Email",
            name: "email"
        },

    ]
    //job specific questions to be combined with employee questions if engineer, manager, or intern is selected
    const extraQuestion = [
        //Manager question
        {
            type: "input",
            message: "Enter Office Number",
            name: "extra"
        },
        //Engineer question
        {
            type: "input",
            message: "Enter Github Username",
            name: "extra"
        },
        //Intern question
        {
            type: "input",
            message: "Enter School Name",
            name: "extra"
        },
    ]
    const memberInfo = {}
    inquirer
        .prompt({
            type: "list",
            message: "What type of team member is being added?",
            name: "job",
            choices: ["Engineer", "Employee", "Intern", new inquirer.Separator(), "Finished Adding Members"]
        })
        .then(function ({ job }) {
            let questionArray = []
            // if (job === "Manager") {
            //     questionArray = employee.concat(extraQuestion[0])
            // }
             if (job === "Engineer") {
                questionArray = employee.concat(extraQuestion[1])
            }
            else if (job === "Intern") {
                questionArray = employee.concat(extraQuestion[2])
            }
            else if (job === "Finished Adding Members") {
                buildHtml()
                return
            }
            else { questionArray = employee }
            promptTeam(questionArray, job, team)
        })


    async function promptTeam(array, job) {
        //loops through given array of questions using inquirer. builds an object
        for (let i = 0; i < array.length; i++) {
            await inquirer.prompt(array[i])
                .then(function (answer) {
                    let key = Object.keys(answer)[0];

                    //if answer is a blank string, asks for valid data then re-asks question 
                    if (answer[key] === "") {
                        console.log("Please Input valid Data");
                        i--;
                    }
                    //if the key contains email, but the given answer doesnt match the regex, asks for valid email. re-asks question
                    else if (key.includes("email") && !answer[key].match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)@(?:[a-z0-9]+)\.(?:[a-z0-9]+)$/g)) {
                        console.log("Please Input valid Email Address   Example:'johnsmith@example.com'");
                        i--;
                    }
                    //if no validation problems are found, adds key/attribute pair to startInfo
                    else {
                        memberInfo[key] = answer[key];
                    }
                })
        }
        let member = {};
        //Saves new class/subclass according to selected job
        if (job === "Engineer") {
            member = new Engineer(memberInfo.name, memberInfo.id, memberInfo.email, memberInfo.extra);
            engineerArray.push(member)
        }
        else if (job === "Manager") {
            member = new Manager(memberInfo.name, memberInfo.id, memberInfo.email, memberInfo.extra);
            managerArray.push(member)
        }
        else if (job === "Intern") {
            member = new Intern(memberInfo.name, memberInfo.id, memberInfo.email, memberInfo.extra);
            internArray.push(member)
        }
        else {
            member = new Employee(memberInfo.name, memberInfo.id, memberInfo.email);
            employeeArray.push(member)
        }
        //if given team size is more than one, runs function again
        if (loop > 1) {
            addMember(--loop);
        }
        else {
            buildHtml()
        }
    }
}
function buildHtml(){
    let template = bhtml.templateMaker(managerArray, engineerArray, employeeArray, internArray,team);
            console.log("loop complete")
            fs.writeFile("../output/team.html", template, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("File saved successfully!");
            });
}
