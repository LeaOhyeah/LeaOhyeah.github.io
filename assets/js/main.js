var sliderCard = document.querySelector(
     "#sliderCard"
   );
   if (window.matchMedia("(min-width: 768px)").matches) {
     var carousel = new bootstrap.Carousel(sliderCard, {
       interval: false,
     });
     var inner = $(".carousel-inner-cs")[0].scrollWidth;
     var item = $(".carousel-item-cs").width();
     var scrollPosition = 0;
     $("#sliderCard .carousel-control-next-cs").on("click", function () {
       if (scrollPosition < inner - item * 4) {
         scrollPosition += item;
         $("#sliderCard .carousel-inner-cs").animate(
           { scrollLeft: scrollPosition },
           900
         );
       }
     });
     $("#sliderCard .carousel-control-prev-cs").on("click", function () {
       if (scrollPosition > 0) {
         scrollPosition -= item;
         $("#sliderCard .carousel-inner-cs").animate(
           { scrollLeft: scrollPosition },
           900
         );
       }
     });
   } else {
     $(sliderCard).addClass("slide");
   }