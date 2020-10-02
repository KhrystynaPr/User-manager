function addUser() {
    let newUser = getUserFromForm();
    let userHtml = generateUserHtml(newUser);
    document.getElementById("work-space").innerHTML += userHtml;
}

function generateUserHtml (user) {
    let userHtml = `
    <div class="user">
    <div class="user-header">
        <span class="user-name">User 1</span>
        <div class = "user-icons">
            <span class="glyphicon glyphicon-pencil" title="edit"></span>
            <span class="glyphicon glyphicon-remove" title="delete" onclick="showModalDelete()"></span>
        </div>
    </div>
    <div class="user-content"><br>
        <span>First Name :</span><span> ` + user.firstName + `</span><br>
        <span>Last Name :</span><span> ` + user.lastName + `</span><br>
        <span>Age :</span><span> ` + user.age + ` </span><br>
        <ul>Pets :</ul>  
            <li>Pusik</li>
            <li>Volohatyi</li>
        <br>
    </div>
</div>`
    return userHtml
}

function getUserFromForm () {
    // add form
    return {
        "firstName": "Andrii 1",
        "lastName": "Pryslupskiy",
        "age": "25",
        "pets": [
            "Pusik",
            "Volohatyi"
        ]
    }
}

