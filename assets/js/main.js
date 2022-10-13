var multipleCardCarousel = document.querySelector(
     "#carouselExampleControls"
   );
   if (window.matchMedia("(min-width: 768px)").matches) {
     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
       interval: false,
     });
     var carouselWidth = $(".carousel-inner-cs")[0].scrollWidth;
     var cardWidth = $(".carousel-item-cs").width();
     var scrollPosition = 0;
     $("#carouselExampleControls .carousel-control-next-cs").on("click", function () {
       if (scrollPosition < carouselWidth - cardWidth * 4) {
         scrollPosition += cardWidth;
         $("#carouselExampleControls .carousel-inner-cs").animate(
           { scrollLeft: scrollPosition },
           900
         );
       }
     });
     $("#carouselExampleControls .carousel-control-prev-cs").on("click", function () {
       if (scrollPosition > 0) {
         scrollPosition -= cardWidth;
         $("#carouselExampleControls .carousel-inner-cs").animate(
           { scrollLeft: scrollPosition },
           900
         );
       }
     });
   } else {
     $(multipleCardCarousel).addClass("slide");
   }