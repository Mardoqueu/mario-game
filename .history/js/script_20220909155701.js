const mario =document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');


    setTimeout(funcao, 5);

}
document.addEventListener("keydown", jump);