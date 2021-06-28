const pic = document.querySelector('#ramen_id');
function toggleRound() {
        pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
