const renderTeam = (team) => {
    let html = ""

    team.forEach((member) => {
        if (member.getRole() === "Manager") {

            html += `<div class="card p-0" style="max-width: 14rem;background-color: rgb(238, 234, 234);float: left;margin: 5px;">
                <div class="card-header bg-primary mb-3 text-white"
                    style="font-size: large;font-family: Arial, Helvetica, sans-serif;">${member.getName()}<br><i
                        class="fas fa-coffee"></i> Manager</div>
                <div class="card-body" style="background-color: rgb(238, 234, 234);">
                    <div class="row" style="background-color: white; margin-bottom: 1px;">ID: ${member.getId()}</div>
                    <div class="row" style="background-color: white;margin-bottom: 1px">Email: ${member.getEmail()}</div>
                    <div class="row" style="background-color: white;margin-bottom: 1px">Office Number: ${member.getOfficeNumber()}</div>
                </div>
            </div>
        `
        }
        else if (member.getRole() === "Engineer") {
            html += `<div class="card p-0" style="max-width: 14rem;background-color: rgb(238, 234, 234);float: left;margin: 5px;">
                <div class="card-header bg-primary mb-3 text-white"
                    style="font-size: large;font-family: Arial, Helvetica, sans-serif;">${member.getName()}<br><i
                    class="fas fa-glasses"></i> Engineer</div>
                <div class="card-body" style="background-color: rgb(238, 234, 234);">
                    <div class="row" style="background-color: white; margin-bottom: 1px;">ID: ${member.getId()}</div>
                    <div class="row" style="background-color: white;margin-bottom: 1px">Email: ${member.getEmail()}</div>
                    <div class="row" style="background-color: white;margin-bottom: 1px">GitHub: ${member.getGithub()}</div>
                </div>
            </div>
         
            `}
        else if (member.getRole() === "Intern") {
            html += `<div class="card p-0" style="max-width: 14rem;background-color: rgb(238, 234, 234);float: left;margin: 5px;">
                    <div class="card-header bg-primary mb-3 text-white"
                        style="font-size: large;font-family: Arial, Helvetica, sans-serif;">${member.getName()}<br><i class="fas fa-user-graduate"></i> Intern</div>
                    <div class="card-body" style="background-color: rgb(238, 234, 234);">
                        <div class="row" style="background-color: white; margin-bottom: 1px;">ID: ${member.getId()}</div>
                        <div class="row" style="background-color: white;margin-bottom: 1px">Email: ${member.getEmail()}</div>
                        <div class="row" style="background-color: white;margin-bottom: 1px">School: ${member.getSchool()}</div>
                    </div>
                </div> 
                `}

    })
    // console.log(html)
    return html
}

const renderHtml = (team) => {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Team Profiles</title>
    </head>
    
    <body>
        <div class="jumbotron"
            style="height: 120px;background-color: rgb(184, 61, 61);color: white;text-align: center;text-emphasis: bold;font-size: 50px; padding-top: 20px;margin-bottom: 50px;">
            My Team
        </div>
        
        
        <div class = "container">
        <div class = "row justify-content-center">
            ${renderTeam(team)}
        </div>
        </div>
    </body>
    
    </html>`

}

module.exports = renderHtml