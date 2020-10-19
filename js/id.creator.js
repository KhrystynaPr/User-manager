let currentID = 1;

function getNextID() {
    let current = currentID;
    currentID++;
    return current;
}