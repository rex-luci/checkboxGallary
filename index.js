

function myFunction() {
    var x = document.getElementById("box1");
    var y = document.getElementById("box2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"
        document.querySelectorAll('#box1').checked = false;
    } else {
        x.style.display = "none";
        y.style.display = "block";
        document.querySelectorAll('#box2"]').checked = false;
    }
}
document.getElementById('select').onclick = function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length===16) {
        myFunction();
    }
}
