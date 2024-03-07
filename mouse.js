const COLORS = ['#06d6a0', '#118ab2', '#ef476f', '#ffd166', '#073b4c']
const SPARKLE_POP = document.querySelector('[js-hook="sparkle-pop"]')
const POP_GROUP = document.querySelector('[js-hook="pop-group"]')
const POP_CIRCLE = document.querySelector('[js-hook="pop-circle"]')

// GSAP( DrawSVGPlugin, AttrPlugin) 
class Scene {
  constructor () {
    this.initEvents()
  }

  initEvents () {
    document.addEventListener('click', (e) => {
      const mouseX = e.pageX
      const mouseY = e.pageY
      this.pop(mouseX, mouseY)      
    })
  }

  pop (mouseX, mouseY) {
    const tlPop = new TimelineMax().timeScale(1.4)

    tlPop
      .set(SPARKLE_POP, {
        x: mouseX - SPARKLE_POP.getBoundingClientRect().width / 2,
        y: mouseY - SPARKLE_POP.getBoundingClientRect().height / 2
      })
      // .set(POP_GROUP, {
      //   attr: {
      //     stroke: COLORS[(Math.random() * COLORS.length) | 0]
      //   }
      // })
      .set(POP_CIRCLE, {
        transformOrigin: '50% 50%',
        attr: {
          stroke: COLORS[(Math.random() * COLORS.length) | 0]
        }
      })
      // .fromTo(POP_GROUP.querySelectorAll('line'), 0.4, {
      //   drawSVG: '30% 30%'
      // }, {
      //   drawSVG: '60% 80%',
      //   ease: Linear.easeNone
      // })
      // .to(POP_GROUP.querySelectorAll('line'), 1, {
      //   drawSVG: '100% 100%'
      // })
      .fromTo(POP_CIRCLE, 1.4, {
        scale: 0,
        strokeWidth: '30%',
        attr: {
          r: 0
        }
      }, {
        scale: 1,
        strokeWidth: '0%',
        attr: {
          r: 15
        },
        ease: Power2.easeOut
      }, 0)
  }
}

// init
const app = new Scene()

//여기까지 마우스 효과