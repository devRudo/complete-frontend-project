document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("annually").style.display = "flex";
    document.getElementById("monthly").style.display = "none";
    document.getElementById('mode').addEventListener('change', () => {
        console.log(document.getElementById('mode').value);
        if (document.getElementById('mode').value == 0) {
            document.getElementById("annually").style.display = "flex";
            document.getElementById("monthly").style.display = "none";
        }
        else if (document.getElementById('mode').value == 1) {
            document.getElementById("annually").style.display = "none";
            document.getElementById("monthly").style.display = "flex";
        }
    });
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            let siblings = [...cards[i].parentElement.children];
            siblings = siblings.filter((elem) => elem.classList.contains('card-active'));
            siblings[0].classList.remove('card-active');
            cards[i].classList.add('card-active');
            if (cards[i].classList.contains('basic')) {
                cards[i].style.borderTopRightRadius = '8px';
                cards[i].style.borderBottomRightRadius = '8px';
            }
            if (cards[i].classList.contains('master')) {
                cards[i].style.borderTopLeftRadius = '8px';
                cards[i].style.borderBottomLeftRadius = '8px';
            }
        });
    }
});