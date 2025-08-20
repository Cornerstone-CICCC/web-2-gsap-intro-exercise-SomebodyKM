// PUT YOUR CODE HERE
const boxAnimTl = gsap.timeline()

boxAnimTl
    .from('.red', { top: '-200px', left: '-200px', scale: 0 })
    .from('.green', { top: '-200px', left: '100vw', scale: 0 })
    .from('.blue', { top: '100vh', left: '100vw', scale: 0 })
    .from('.yellow', { top: '100vh', left: '-200px', scale: 0 })
    .to('.red', { top: 0, left: 'calc(100vw - 200px)', backgroundColor: 'green', borderRadius: '50%' })
    .to('.green', { top: 'calc(100vh - 200px)', right: 0, backgroundColor: 'blue', borderRadius: '50%' }, '<')
    .to('.blue', { top: 'calc(100vh - 200px)', left: 0, backgroundColor: 'yellow', borderRadius: '50%' }, '<')
    .to('.yellow', { top: 0, left: 0, backgroundColor: 'red', borderRadius: '50%' }, '<')
    .to('.red', { left: '100vw' }, '+=.5')
    .to('.green', { left: '100vw' }, '<')
    .to('.blue', { left: '-200px' }, '<')
    .to('.yellow', { left: '-200px' }, '<')

