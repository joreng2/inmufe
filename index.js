$(document).ready(function(){
    $(".any_panel>li").click(function(){
        let acco = $(this).children("a").hasClass("on");

        if(acco){
            $(this).children("a").removeClass("on");
            $(this).children("ul").slideUp();

        }else{
            $(".any_panel>li>a").removeClass("on");
            $(".any_panel>li>ul").slideUp();
            
            $(this).children("a").addClass("on");
            $(this).children("ul").slideDown();
        }
    });

    $(window).scroll(function(){

        let windowH = $(window).scrollTop();
        let headH = $("header").offset().top;

        
        if(windowH > headH){
            $("header").css({"background-color":"transparent"});
        }else{
            $("header").css({"background-color":"rgba(0, 0, 0, 0.2)","backdrop-filter":"blur(8px)"});
        }
        
        if (windowH === 0) {
            $("header").css({"background-color":"transparent"});
        }
    });

    //아티스트로 스크롤시 전구 깜빡
    let windowH = $(window).scrollTop();
    if (windowH > triggerOffset) {
        $(".artist").addClass("animate");
    } else {
        $(".artist").removeClass("animate");
    }

    // 스크롤 부드럽게
    class Scrooth {
        constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
          this.element = element;
          this.distance = strength;
          this.acceleration = acceleration;
          this.deceleration = deceleration;
          this.running = false;
      
          this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
          this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
          this.scroll = this.scroll.bind(this);
        }
      
        scrollHandler(e) {
          e.preventDefault();
      
          if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
          } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
          }
        }
      
        scroll() {
          if (this.running) {
            this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
            Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
            Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
      
            this.top += this.currentDistance;
            this.element.scrollTo(0, this.top);
            
            requestAnimationFrame(this.scroll);
          }
        }
      }
      
      const scroll = new Scrooth({
        element: window,
        strength: 27, //스크롤 한번에 이동하는 거리
        acceleration: 1.75,
        deceleration: .875,
      });

});