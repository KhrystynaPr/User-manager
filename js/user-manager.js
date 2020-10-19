function addUser(event) {
    event.preventDefault()
    let newUser = getUserFromForm();
    let userHtml = generateUserHtml(newUser);
    document.getElementById("work-space").innerHTML += userHtml;
    closeModalCreate()
}

function editUser (event) {
    event.preventDefault()

    closeModalEdit()
}

function generateUserHtml (user) {
    let userHtml = `
    <div class="user">
    <div class="user-header">
        <span class="user-name">User 1</span>
        <div class = "user-icons">
            <span class="glyphicon glyphicon-pencil" title="edit" onclick='showModalEdit(event, "` + user.id + `")'></span>
            <span class="glyphicon glyphicon-remove" title="delete" onclick="showModalDelete()"></span>
        </div>
    </div>
    <div class="user-content"><br>
        <span>First Name :</span><span id="f-name_` + user.id + `"> ` + user.firstName + `</span><br>
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
    const fName = document.getElementById("fname-create").value;
    // add form
    return {
        "id": getNextID(),
        "firstName": fName,
        "lastName": "Pryslupskiy",
        "age": "25",
        "pets": [
            "Pusik",
            "Volohatyi"
        ]
    }
}

function showModalDelete () {
    document.getElementById("myModal").style.display = "block";
}       

function showModalEdit(event, userID) {
    const fName = document.getElementById("f-name_" + userID).textContent;
    document.getElementById("fname-edit").value = fName;
    document.getElementById("edit-user-form").style.display = "block";
}

function showModalCreate () {
    document.getElementById("add-user-form").style.display = "block";
} 

function closeModal () {
    document.getElementById("myModal").style.display = "none";
}

function closeModalEdit () {
    document.getElementById("edit-user-form").style.display = "none";
}

function closeModalCreate () {
    document.getElementById("add-user-form").style.display = "none";
}

