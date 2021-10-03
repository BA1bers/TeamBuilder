function createHtml(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Builder</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../dist/style.css">
    </head>

    <body>
        <header>
            <nav class="navbar">
                <span class="teamNav">Team-Builder</span>
            </nav>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 20rem">
                        <h3 class="card-header">${manager.name}</h3>
                        <h4>Manager</h4>
                    </div>

                    <div class="card-body">
                        <p class="id">ID ${manager.id}</p>
                        <p class ="email">Email <a href="${manager.email}'>${manager.email}</a></p>
                        <p class="officeNum">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
                div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 20rem">
                        <h3 class="card-header">${engineer.name}</h3>
                        <h4>Engineer</h4>
                    </div>

                    <div class="card-body">
                        <p class="id">ID ${engineer.id}</p>
                        <p class ="email">Email <a href="${engineer.email}'>${engineer.email}</a></p>
                        <p class="github">GitHub <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>

                div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 20rem">
                        <h3 class="card-header">${intern.name}</h3>
                        <h4>Intern</h4>
                    </div>

                    <div class="card-body">
                        <p class="id">ID ${intern.id}</p>
                        <p class ="email">Email <a href="${intern.email}'>${intern.email}</a></p>
                        <p class="school">School ${intern.school}</p>
                    </div>
                </div>

            </div>
        </div>
        <script src="../index.js"></script>
    </body>

    </html>
    `
}

module.exports = createHtml;