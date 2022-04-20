new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 2,
    slidesToScroll: 2,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 576px
        breakpoint: 576,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '3',
          slidesToScroll: '3',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });