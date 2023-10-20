const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*90);
    const randomY = parseInt(Math.random()*-55);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

const yesBtn = document.querySelector('#siBtn');

yesBtn.addEventListener('click', function () {
    alert('Ayyyyy Malte, ya sabía que me amás tonta jiji')
    window.location.href = "https://www.youtube.com/watch?v=HjojdEArPzU";
});