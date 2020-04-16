function templateMaker(){
const startingTemplate = 
`
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
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center bg-secondary text-light ">${teamName}</h1>
        </div>
    </div>
    <div class="row containter">
        <div class="col-md-8 mx-auto bg-secondary rounded">
            ${manager}
            <!-- second row -->
            <div class="row">
                <!-- column 1 -->
                <div class="col-md-4">
                    <h1>Employees</h1>
                    ${employee}
                </div>
                <!-- column 2 -->
                <div class="col-md-4">
                    <h1>Engineers</h1>
                    ${engineer}
                </div>
                <!-- column 3 -->
                <div class="col-md-4">
                    <h1>Interns</h1>
                    ${interns}
                </div>
                
            </div>

        </div>
    </div>

</body>

</html>
`
const mtemp = `
<div class="row">
                <div class="col-4  bg-info border border-dark rounded">
                    <div class="row">
                        <div class="col-10">
                            <h1>John Smith</h1>
                            <h4>Team Manager</h4>
                            <hr>
                            <ul class="pl-2">
                                <li>Email: John@smith.org</li>
                                <li>Office: A305</li>
                            </ul>
                        </div>
                        <div class="col-2">
                            <p class="pt-3 float-right">#655312</p>
                        </div>
                        <p></p>
                    </div>
                </div>
                
            </div>
`
const employeeTemp = 
`
<div class="col-12  bg-info border border-dark rounded">
                        <div class="row">
                            <div class="col-10">
                                <h2>${Name}</h2>
                                <h4>Employee</h4>
                                <hr>
                                <ul class="pl-2">
                                    <li>Email: John@smith.org</li>
                                    <li>httpsgithub/bobith</li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <p class="pt-2 float-right">#655312</p>
                            </div>
                        </div>
                    </div>
`
const engineerTemp = 
`
<div class="col-12  bg-info border border-dark rounded">
                        <div class="row">
                            <div class="col-10">
                                <h2>bob bobithy</h2>
                                <h4>Engineer</h4>
                                <hr>
                                <ul class="pl-2">
                                    <li>Email: John@smith.org</li>
                                    <li>httpsgithub/bobith</li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <p class="pt-2 float-right">#655312</p>
                            </div>
                        </div>
                    </div>
`
const internTemp = 
`
<div class="col-12  bg-info border border-dark rounded">
                        <div class="row">
                            <div class="col-10">
                                <h2>bob bobithy</h2>
                                <h4>Intern</h4>
                                <hr>
                                <ul class="pl-2">
                                    <li>Email: John@smith.org</li>
                                    <li>httpsgithub/bobith</li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <p class="pt-2 float-right">#655312</p>
                            </div>
                        </div>
                    </div>
`
}