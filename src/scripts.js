// Sidebar Menu
document.getElementById("handle-sidebar").className = '-ml-[100%]'
function showSidebar() {
  document.getElementById("handle-sidebar").className = 'ml-[0] transition-all ease-in-out duration-500'
  document.getElementById("open-menu").className = "hidden"
}
function hideSidebar() {
  document.getElementById("handle-sidebar").className = '-ml-[100%] transition-all ease-in-out duration-700'
  document.getElementById("open-menu").className = "block"
}


// Banner Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); 
}

// Our Partners Slider
var swiper = new Swiper(".partners-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });


//   Accordions 
var MODULE = MODULE || {};

(function ($, MODULE) {
  MODULE.init_accordion = function () {
    // Logic for accordion
    var accordion = (function () {
      var $accordion_elem = $(".c-accordion"),
        $accordion_headerlink = $accordion_elem.find(
          ".js-accordion__entry-header-link"
        ),
        $accordion_item = $accordion_elem.find(".c-accordion__entry");

      var settings = {
        speed: parseInt($accordion_elem.attr("data-speed")) || 400,
        individual_openable:
          $accordion_elem.attr("data-individual-openable") === "true",
      };

      return {
        init: function () {
          $accordion_headerlink.on("click", function (e) {
            e.preventDefault();
            accordion.toggle($(this));
          });

          if (
            !settings.individual_openable &&
            $(".c-accordion__entry.is-expanded").length > 1
          ) {
            $(".c-accordion__entry.is-expanded").removeClass(
              "is-expanded"
            );
          }
        },
        toggle: function (self) {
          if (
            !settings.individual_openable &&
            self[0] !=
              self
                .closest(".c-accordion")
                .find(
                  ".c-accordion__entry.is-expanded .c-accordion__entry-header-link"
                )[0]
          ) {
            self
              .closest(".c-accordion")
              .find(".c-accordion__entry")
              .removeClass("is-expanded")
              .find(".c-accordion__entry-body")
              .slideUp();
          }

          self
            .closest(".c-accordion__entry")
            .toggleClass("is-expanded")
            .attr("aria-expanded", function (i, attr) {
              return attr == "true" ? "false" : "true";
            });

          self.parent().attr("aria-selected", function (i, attr) {
            return attr == "true" ? "false" : "true";
          });

          self
            .parent()
            .next()
            .stop()
            .slideToggle(settings.speed)
            .attr("aria-hidden", function (i, attr) {
              return attr == "true" ? "false" : "true";
            });
        },
      };
    })();

    accordion.init();
  };

  $(function () {
    MODULE.init_accordion();
  });
})(jQuery, MODULE);


// Amazing Customers Section Slider
var swiper = new Swiper(".customer-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });
