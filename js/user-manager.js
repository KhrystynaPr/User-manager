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
 let modal = document.getElementById("myModal");

function showModalDelete () {
    modal.style.display = "block"
}       

function closeModal (){
    modal.style.display = "none";
}

function generateModalDeleteHtml (user) {
let modalDeleteHtml = `
<div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>Are you want to delete user?</h2>
            </div>
            <div class="modal-body">
                <p>The user will be permanently deleted</p>
                </div>
            <div class="modal-buttons">
            <button>OK</button>
            <button>Cancel</button>
            </div>`
            return modalDeleteHtml;
}

function addModalDelete () {
    let modalDelete = generateModalDeleteHtml ();
    document.getElementById("work-space").innerHTML += modalDeleteHtml;
}
