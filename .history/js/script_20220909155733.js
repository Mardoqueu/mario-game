const mario =document.querySelector('.mario');

const jump = () => {
        mario.classList.add('jump');


    setTimeout(() => {
        mario.classList.add('jump');
    }, 500);

}
document.addEventListener("keydown", jump);