let config = document.querySelector(".config")
let body = document.querySelector("body")

config.addEventListener('click', ()=>{
    body.style.backgroundColor = "#fff"
    body.style.backgroundImage = "none"
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

/*
%fundamento-item {
    width:30vw;
    margin: 0.3rem auto;
    padding: 10px;
    border: 2px solid #000;
}

@for $i from 1 through 6 {
    .item-#{$i} {
        @extend %fundamento-item;
        @if $i < 4 {
            color: blue;
        }
        &:hover {
            background-color: burlywood;
        }
    }
}
*/