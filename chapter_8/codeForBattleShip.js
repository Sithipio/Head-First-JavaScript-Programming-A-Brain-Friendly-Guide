let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit : function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location){
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};
let ships = [
    { location: ["10", "20", "30"], hits: ["", "", ""]},
    { location: ["10", "20", "30"], hits: ["", "", ""]},
    { location: ["10", "20", "30"], hits: ["", "", ""]},
]