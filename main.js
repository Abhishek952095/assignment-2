let firstindex=0
function slide(){
    setTimeout(slide,3000)
    let pic;
    const img =document.getElementsByClassName('img')
    for(pic=0; pic<img.length;pic++){
        img[pic].style.display="none"

    }
    firstindex++;
    if(firstindex>img.length){
        firstindex=1
    }
    img[firstindex-1].style.display="block"
}
slide();

// for side-nav hide and show

  function myFunction(){
    let x =document.getElementById("side-nav")
    let y=document.getElementById("hamburger")
    if(x.style.left=="1300px"){
        x.style.left="0px"
        y.style.zIndex=5
        x.style.display="block"
        x.style.transition="all ease 1s"
    }else{
        x.style.left= "1300px"
        y.style.zIndex=0
        x.style.display="none"
        x.style.transition="all ease 1s"
    }
  }

// second image slider...
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

console.log(nextDom,prevDom)
nextDom.addEventListener("click",function(){
    showSlider('next')

})
prevDom.addEventListener("click",function(){
    showSlider('prev')
})
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// counter effect.............................
function myScroll(){
    let counter=document.getElementsByClassName("counter")
    let counter2=document.getElementsByClassName("counter2")
    let counter3=document.getElementsByClassName("counter3")
    let counter4=document.getElementsByClassName("counter4")
    let c=Array.from(counter)
    let b=Array.from(counter2)
    let d=Array.from(counter3)
    let e=Array.from(counter4)
    if(window.pageYOffset>=780, window.pageYOffset<=850){

        // let counts = setInterval(updated);
        // let upto = 0;
        // function updated() {
        //     let counter = document.getElementById("counter");
        //     counter.innerHTML = ++upto;
        //     if (upto === 35) {
        //         clearInterval(counts);
        //     }
        // }
        c.forEach((ele)=>{
            ele.classList.add("c")
        })
        b.forEach((ele)=>{
            ele.classList.add("b")
        })
        d.forEach((ele)=>{
            ele.classList.add("d")
        })
        e.forEach((ele)=>{
            ele.classList.add("e")
      })}}
