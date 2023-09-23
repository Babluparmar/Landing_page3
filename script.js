gsap.to(".imagecontainer" , {
    ease : Expo.easeInOut,
    width: "75%",
    duration: 5,
    stagger: 3
})

gsap.to(".text h1",{
    ease : Expo.easeInOut,
    stagger: 3,
    top : 0
})


gsap.to(".text h1",{
    duration: 5,
    ease : Expo.easeInOut,
    stagger: 3,
    top : "-110%" 
})