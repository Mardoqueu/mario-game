const mario =document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump')
}
document.addEventListener("keydown", jump);