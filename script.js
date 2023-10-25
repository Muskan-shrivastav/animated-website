const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from('.nlink',{
    stagger:.2,
    y:10,
    duration:1,
    ease:Power2,
    opacity:0
})

Shery.textAnimate("#headings h1" , {
    
    style: 3,
    y: 13,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from('.anim2' ,{
    y:30,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1
  })

  Shery.imageEffect('#imgtxt img',{
    style:3,
    config:{"uFrequencyX":{"value":52.07,"range":[0,100]},"uFrequencyY":{"value":17.36,"range":[0,100]},"uFrequencyZ":{"value":18.18,"range":[0,100]},"geoVertex":{"range":[1,64],"value":29.64},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999743635942},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    
  })
  Shery.imageEffect('.imgeff img',{
    style:3,
    config:{"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":15.7,"range":[0,100]},"uFrequencyZ":{"value":16.53,"range":[0,100]},"geoVertex":{"range":[1,64],"value":28.07},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666894545837},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
   
  })
  gsap.from("#imgtxt img",{
    z:-3,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
  })

  Shery.imageEffect("#bimg",{
    style:3,
   
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.0620811373076098},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":1.07,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.36,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  });

  document.querySelector(' #ftext button').addEventListener('mouseover',function(){
   gsap.to('#future video',{
    opacity:1,
    duration:1.5,
    ease:Power4
   })

  })
  document.querySelector(' #ftext button').addEventListener('mouseleave',function(){
    gsap.to('#future video',{
        opacity:0,
        duration:1.5,
        ease:Power4
       })
  })