const mario =document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');


    setTimeout(() => {


    }, 500);

}
document.addEventListener("keydown", jump);