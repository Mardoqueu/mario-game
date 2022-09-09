const mario =document.querySelector('.mario');
const pipe =document.querySelector('.pipe');


const jump = () => {
        mario.classList.add('jump');


    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition);

}, 10)


document.addEventListener("keydown", jump);