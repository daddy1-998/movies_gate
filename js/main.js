$ = jQuery;


$("document").ready(function () {

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: "1.5", 
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  



  //slider must-viewd
  $(".slider-must-viewd").slick({
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          infinite: false,
        }
      },
    ]
  });


  $('.slider-infinit').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });




});




document.querySelector('.watchmore.my-btn a').addEventListener('click', function (event) {
  event.preventDefault(); 
  document.getElementById('toggle-cards').style.display = 'flex';
  this.parentElement.style.display = 'none';
});



/***Modal video***/
function toggle_video_modal() {
  $(".openBtn").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr("data-youtube-id");

    var autoplay = "?autoplay=1";
    var related_no = "&rel=0";

    var src = "https://www.youtube.com/embed/" + id + autoplay + related_no;

    $("#youtube").attr("src", src);
    $("body").addClass("show-video-modal noscroll");
  });

  function close_video_modal() {
    event.preventDefault();

    $("body").removeClass("show-video-modal noscroll");
    $("#youtube").attr("src", "");
  }

  $("body").on("click", ".close-video-modal, .video-modal .overlay", function (event) {
    close_video_modal();
  });

  $("body").keyup(function (e) {
    if (e.keyCode == 27) {
      close_video_modal();
    }
  });
}

$(document).ready(function () {
  toggle_video_modal();
});





document.getElementById('movieSearch').addEventListener('input', function () {
  const searchQuery = this.value.toLowerCase();
  const movieCards = document.querySelectorAll('.div-search .my-card');
  const hideSearchSections = document.querySelectorAll('.hide_search');

  let anyCardVisible = false;

  if (!searchQuery) {
      hideSearchSections.forEach(section => {
          section.style.display = '';
      });
      movieCards.forEach(card => {
          card.style.display = ''; 
      });
      return; 
  }

  movieCards.forEach(card => {
      const movieTitle = card.querySelector('.titre').textContent.toLowerCase();
      if (movieTitle.includes(searchQuery)) {
          card.style.display = ''; 
          anyCardVisible = true; 
      } else {
          card.style.display = 'none'; 
      }
  });

 
  hideSearchSections.forEach(section => {
      if (anyCardVisible) {
          section.style.display = 'none'; 
      } else {
          section.style.display = ''; 
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.search_icon');
  const hideBar = document.querySelector('.header .hide_bar');

  if (searchIcon && hideBar) {
      searchIcon.addEventListener('click', function (event) {
          hideBar.style.display = 'block';
          event.stopPropagation(); 
      });

      // document.addEventListener('click', function (event) {
      //     if (!hideBar.contains(event.target) && !searchIcon.contains(event.target)) {
      //         hideBar.style.display = 'none';
      //     }
      // });
  }
});






