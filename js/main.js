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
    alert('Ayyy Malte, ya sabía que me amás tonta jijiji ;)\n\nSigamos con la siguiente página :P')
});