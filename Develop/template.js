const createCards = members => {

    const engineerCard = (engineer) => {
        return `
        <div class="card" style = "width:18rem; border-radius: 15px";>
        <h5 class= 'card-title '>${engineer.name}</h5>
        <h6 class='card-subtitle'>Engineer<i class='fas fa-user-tie'></i>
        <ul class ='card-text'>
        <li>ID: ${engineer.id}</li>
        <li class = 'text-white'><a href ='https://github.com/${engineer.github}' target="_blank">
        <i class="fab fa-github"></i>${engineer.github}
        </a></li>
        <li class = 'text-white'><a href ='mailto:${engineer.email}?submit= Feedback&body = Message'>
        <i class = 'fas fa-paper-plane'></i>${engineer.email}
        </a></li>
        </ul>
        </div>
        </div>
        `
    }
    const internCard = (intern) => {
        return `
        <div class="card" style = "width:18rem; border-radius: 15px;">
        <h5 class= 'card-title'>${intern.name}</h5>
        <h6 class='card-subtitle'>Intern<i class='fas fa-user-tie'></i>
        <ul class ='card-text'>
        <li>ID: ${intern.id}</li>
        <i class="fas fa-graduation-cap"></i><li>${intern.school}</li>
        <li class = 'text-white'><a href ='mailto:${intern.email}?submit= Feedback&body = Message'>
        <i class = 'fas fa-paper-plane'></i>${intern.email}
        </a></li>
        </ul>
        </div>
        </div>
        `
    }



    const managerCard = (manager) => {
        return `
        <div class="card" style = "width:18rem; border-radius: 15px;">
        <h5 class= 'card-title'>${manager.name}</h5>
        <h6 class='card-subtitle'>Manager<i class='fas fa-user-tie'></i>
        <ul class ='card-text'>
        <li>ID: ${manager.id}</li>
        <li>Office Number: ${manager.officeNumber}</li>
        <li class = 'text-white'><a href ='mailto:${manager.email}?submit= Feedback&body = Message'>
        <i class = 'fas fa-paper-plane'></i>${manager.email}
        </a></li>
        </ul>
        </div>
        </div>
        `;
    };

    const cardArray = [];

    cardArray.push(members.filter(employee => employee.getRole() === 'Manager').map(manager => managerCard(manager)));

    cardArray.push(members.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerCard(engineer)));
    cardArray.push(members.filter(employee => employee.getRole() === 'Intern').map(intern => internCard(intern)));
    return cardArray.join('');
}

module.exports = members => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading" id='banner'>
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createCards(members)}
            </div>
        </div>
    </div>
</body>
</html>
    `;

}


