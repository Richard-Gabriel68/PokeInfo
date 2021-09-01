let config = document.querySelector(".config")
let body = document.querySelector("body")

config.addEventListener('click', ()=>{
    body.style.backgroundColor = "#fff"
    body.style.color = "#000"

})

let numberOfIcons = document.querySelectorAll('.icon').length;

let currentSlide = 0;

function goPrev()
{
    currentSlide--;
    if(currentSlide < 0)
    {
        currentSlide = numberOfIcons - 1;
    }
    updateMargin();
}

function goNext()
{
    currentSlide++;
    if(currentSlide > (numberOfIcons - 1))
    {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin()
{
    let newMargin = currentSlide * 260;

    document.querySelector('.icons').style.marginLeft = `-${newMargin}px`;
}

//let timer = setInterval(goNext, 5000);