function loadingAnimation() {
    var tl = gsap.timeline();

tl.from("#percentage",{
    opacity: 0,
    onStart: () => {
        var count = 0;
        setInterval(()=>{
            if(count < 100){
                document.querySelector("#percentage h5").innerHTML = count;
                count++;
            }
            else{
                clearInterval();
                document.querySelector("#percentage h5").innerHTML = count;
            }
        },30);
    },
    delay: 0.5,
})

tl.from(".line h1,.line h2", {
    y:150,
    stagger: .2,
    duration: .5,
});

tl.to(".line h2",{
    animationName: "nowanime",
    opacity:1
})

tl.to("#loader",{
    // opacity: 0,
    display: "none",
    duration: 0.4,
    delay: 1.5
})

tl.from("#page1",{
    y:1400,
    ease:Power4
})

tl.from(".hero h1",{
    y:120,
    stagger:.2,
    duration:.5
})
}

loadingAnimation();

function cursorAnimation() {
    document.addEventListener('mousemove',(e) => {
        gsap.to('#cursor',{
            x:e.clientX,
            y:e.clientY,
        })
    })
    
    Shery.makeMagnet("#nav-pt2 h4");
}

cursorAnimation();