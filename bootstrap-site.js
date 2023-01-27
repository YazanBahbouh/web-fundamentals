var count = 0;
function countbuttonCliked() {
    count ++;
    alert(count)
}
function over(element) {
    element.style.color = "white";
    element.style.border = "black";
    element.style.backgroundColor = "purple";
}
function out (element) {
    element.style.color = "purple";
    element.style.border = "2px solid purple";
    element.style.backgroundColor = "white";
}