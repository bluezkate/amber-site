    var owl = $(".carousel-header");
    owl.owlCarousel({
         itemsCustom: [[0, 1], [400, 1], [700, 1], [1000, 1], [1200, 1]],
        responsive: true,
        loop: true,
    });


    var owl = $(".carousel-quote");
    owl.owlCarousel({
        itemsCustom: [[0, 1], [400, 1], [700, 1], [1000, 1], [1200, 1]],
    });
    

    var owl = $(".carousel-works");
    owl.owlCarousel({
        itemsCustom: [[0, 1], [480, 1], [767, 2] , [992, 3], [1200, 3]],
        loop: true,
        pagination: false,
    });

   







    $(".next_button").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        owl.trigger("owl.prev");
    });



  
 
 $(function(){
  $('.team-content-button-itself1').hover(function(){
    $('.team-content1').addClass('when_team-content_hover');
  }, function(){
    $('.team-content1').removeClass('when_team-content_hover');
  })
});

  $(function(){
  $('.team-content-button-itself2').hover(function(){
    $('.team-content2').addClass('when_team-content_hover');
  }, function(){
    $('.team-content2').removeClass('when_team-content_hover');
  })
});

   $(function(){
  $('.team-content-button-itself3').hover(function(){
    $('.team-content3').addClass('when_team-content_hover');
  }, function(){
    $('.team-content3').removeClass('when_team-content_hover');
  })
});

    $(function(){
  $('.team-content-button-itself4').hover(function(){
    $('.team-content4').addClass('when_team-content_hover');
  }, function(){
    $('.team-content4').removeClass('when_team-content_hover');
  })
});




        $(function(){
  $('.blog-item-links1').hover(function(){
    $('.blog-item-comments1').addClass('when_blog-item-links_hover1');
  }, function(){
    $('.blog-item-comments1').removeClass('when_blog-item-links_hover1');
  })
});

           $(function(){
  $('.blog-item-links2').hover(function(){
    $('.blog-item-comments2').addClass('when_blog-item-links_hover2');
  }, function(){
    $('.blog-item-comments2').removeClass('when_blog-item-links_hover2');
  })
});



        $(function(){
  $('.blog-item-links3').hover(function(){
    $('.blog-item-comments3').addClass('when_blog-item-links_hover3');
  }, function(){
    $('.blog-item-comments3').removeClass('when_blog-item-links_hover3');
  })
});     