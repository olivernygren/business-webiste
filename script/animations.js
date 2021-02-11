gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite: 'auto'});
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 1.5, delay: .5})
tl.fromTo('nav li', {opacity: 0}, {opacity: 1, duration: 1.25, stagger: .1}, '-=1')
tl.fromTo('.landing-page-content, .p1-landing-page-content, .p2-landing-page-content, .p3-landing-page-content, .p4-landing-page-content, .p5-landing-page-content', {opacity: 0}, {opacity: 1, duration: 1.5}, '-=1.75')
tl.fromTo('.p1-card', {opacity: 0}, {opacity: 1, duration: 1.5, stagger: .3}, '-=1.75')

gsap.from('.anim-1', {
  scrollTrigger: {
    trigger: '.anim-1',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.anim-2', {
  scrollTrigger: {
    trigger: '.anim-2',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.anim-3', {
  scrollTrigger: {
    trigger: '.anim-3',
    start: 'top bottom'
  },
  opacity: 0,
  duration: 1.5,
  stagger: 0.3
})

gsap.from('.anim-4', {
  scrollTrigger: {
    trigger: '.anim-4',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

// ==================================== VARFÖR DEP

gsap.from('.p1-anim-1', {
  scrollTrigger: {
    trigger: '.p1-anim-1',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p1-anim-2', {
  scrollTrigger: {
    trigger: '.p1-anim-2',
    start: 'top bottom'
  },
  y: '-50',
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p1-anim-3', {
  scrollTrigger: {
    trigger: '.p1-anim-3',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

// ==================================== HITTA DRÖM-MEDARBETAREN

gsap.from('.p2-anim-1', {
  scrollTrigger: {
    trigger: '.p2-anim-1',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p2-anim-2', {
  scrollTrigger: {
    trigger: '.p2-anim-2',
    start: 'top bottom'
  },
  y: '-50',
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p2-anim-3', {
  scrollTrigger: {
    trigger: '.p2-anim-3',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

// ==================================== HITTA DRÖMJOBBET

gsap.from('.p3-anim-1', {
  scrollTrigger: {
    trigger: '.p3-anim-1',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p3-anim-2', {
  scrollTrigger: {
    trigger: '.p3-anim-2',
    start: 'top bottom'
  },
  y: '-50',
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.p3-anim-3', {
  scrollTrigger: {
    trigger: '.p3-anim-3',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})



// ==================================== KONTAKT

gsap.from('.p5-anim-1', {
  scrollTrigger: {
    trigger: '.p5-anim-1',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})