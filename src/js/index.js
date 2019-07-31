require(['./config'],()=>{
    require(['header','swiper','footer'],(header,swiper)=>{
        class Index{
            constructor(){
                this.swiper()
            }
            swiper(){
                $(document).ready(function () {
                    new swiper('.swiper-container', {
                      spaceBetween: 30,
                      centeredSlides: true,
                      autoplay: {
                        delay: 4500,
                        disableOnInteraction: false,
                      },
                      pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                      },
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      },
                    });
                    // console.log(swiper)
                    })
            }
        }
        new Index()
    })
})