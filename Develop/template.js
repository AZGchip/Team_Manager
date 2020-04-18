
function templateMaker(manager, engineer, employee, intern, team) {

    const arguments = [manager, engineer, employee, intern]
    // console.log(arguments)
    let manTemp = ``;
    let engTemp = ``;
    let empTemp = ``;
    let intTemp = ``;

    for (let i = 0; i < arguments.length; i++) {
        let selected = arguments[i]

        if (selected != undefined) {
            for (let x = 0; x < selected.length; x++) {
                if (selected[x] !== undefined) {
                    let s = selected[x];
                    console.log(s)
                    // console.log(s[0])
                    // const extraquest = [s.getOfficeNumber(), s.getGithub(), "", s.getSchool()]
                    if (i === 0) {
                        manTemp += `<div class="row">
                        <div class="col-5  bg-info border border-dark rounded mx-auto">
                            <div class="row">
                                <div class="col-10">
                                    <h1>${s.getName()}</h1>
                                    <h4>Team Manager</h4>
                                    <hr>
                                    <ul class="pl-2">
                                        <li>${s.getEmail()}</li>
                                        <li>Office:${s.getOfficeNumber()}</li>
                                    </ul>
                                </div>
                                <div class="col-2">
                                    <p class="pt-3 float-right">${s.getId()}</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        
                    </div>`
                    }
                    if (i === 1) {
                        engTemp += `
                        <div class="col-11  bg-info border border-dark rounded">
                            <div class="row">
                                <div class="col-10">
                                    <h1>${s.getName()}</h1>
                                    <h4>Engineer</h4>
                                    <hr>
                                    <ul class="pl-2">
                                        <li>${s.getEmail()}</li>
                                        <li>Github:${s.getGithub()}</li>
                                    </ul>
                                </div>
                                <div class="col-2">
                                    <p class="pt-3 float-right">${s.getId()}</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        `}
                    if (i === 2) {
                        empTemp += `
                        <div class="col-11  bg-info border border-dark rounded">
                            <div class="row">
                                <div class="col-10">
                                    <h1>${s.getName()}</h1>
                                    <h4>Employee</h4>
                                    <hr>
                                    <ul class="pl-2">
                                        <li>${s.getEmail()}</li>
                                    </ul>
                                </div>
                                <div class="col-2">
                                    <p class="pt-3 float-right">${s.getId()}</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        `}
                    if (i === 3) {
                        intTemp += `
                        <div class="col-11  bg-info border border-dark rounded">
                            <div class="row">
                                <div class="col-10">
                                    <h1>${s.getName()}</h1>
                                    <h4>Intern</h4>
                                    <hr>
                                    <ul class="pl-2">
                                        <li>${s.getEmail()}</li>
                                        <li>School:${s.getSchool()}</li>
                                    </ul>
                                </div>
                                <div class="col-2">
                                    <p class="pt-3 float-right">${s.getId()}</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        `}
                }
            };

        }
    }



    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <div class="row">
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <span class="navbar-brand mb-0 h1">${team}</span>
  </nav>
    </div>
    <div class="row containter">
    
        <div class="col-md-8 mx-auto bg-secondary rounded mt-5 pt-2" id="back">
            ${manTemp}
            <!-- second row -->
            <div class="row">
                <!-- column 1 -->
                <div class="col-md-4 border-right border-top border-dark">
                    <h1>Employees</h1>
                    ${empTemp}
                </div>
                <!-- column 2 -->
                <div class="col-md-4 border-right border-top border-dark">
                    <h1>Engineers</h1>
                    ${engTemp}
                </div>
                <!-- column 3 -->
                <div class="col-md-4 border-top border-dark">
                    <h1>Interns</h1>
                    ${intTemp}
                </div>
                
            </div>

        </div>
    </div>

</body>

</html>
`;

}
module.exports = {
    templateMaker: templateMaker,
}
