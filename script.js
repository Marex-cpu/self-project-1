// //select hamburger-menu, side-bar
// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const container = document.querySelector('.container');

// hamburgerMenu = addEventListener('click', () => {
//     container.classList.toggle("change");
// })

//loader
window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 3000);
};



document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

//input
const errorMessage = document.querySelector('.error-mess');
const name = document.querySelector('#error');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    if(name.value.length < 3){
        errorMessage.style.display = "block";
    }else {
         errorMessage.style.display = "none";
    }
})


