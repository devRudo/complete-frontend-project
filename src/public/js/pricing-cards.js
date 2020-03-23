document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("annually").style.display = "flex";
    document.getElementById("monthly").style.display = "none";
    document.getElementById('mode').addEventListener('click', () => {
        if (document.getElementById('mode').value == 0) {
            document.getElementById("annually").style.display = "flex";
            document.getElementById("monthly").style.display = "none";
        }
        else if (document.getElementById('mode').value == 1) {
            document.getElementById("annually").style.display = "none";
            document.getElementById("monthly").style.display = "flex";
        }
    });
});