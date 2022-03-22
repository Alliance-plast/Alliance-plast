$(document).ready(function () {
  (function ($) {
    $.fn.parallax = function (options) {
      var windowHeight = $(window).height();

      // Establish default settings
      var settings = $.extend(
        {
          speed: 0.15,
        },
        options
      );

      // Iterate over each object in collection
      return this.each(function () {
        // Save a reference to the element
        var $this = $(this);

        // Set up Scroll Handler
        $(document).scroll(function () {
          var scrollTop = $(window).scrollTop();
          var offset = $this.offset().top;
          var height = $this.outerHeight();

          // Check if above or below viewport
          if (
            offset + height <= scrollTop ||
            offset >= scrollTop + windowHeight
          ) {
            return;
          }

          var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

          // Apply the Y Background Position to Set the Parallax Effect
          $this.css("background-position", "center " + yBgPosition + "px");
        });
      });
    };
  })(jQuery);

  //Loader
  $(window).load(function () {
    $(".loader-overlay").fadeOut("slow");
  });

  //Counter
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $("a[data-rel^=lightcase]").lightcase();

  // Instantiate MixItUp
  $(".portfolio-items").mixItUp({
    animation: {
      duration: 300,
    },
  });

  // Parallax
  $(".parallax-section").parallax({
    speed: 0.1,
  });


  //Header Class Change on Resize
  var $window = $(window);

  // Function to handle changes to style classes based on window width
  function checkWidth() {
    if ($window.width() < 767) {
      $("#top-header").removeClass("header-home").addClass("header-default");
    }

    if ($window.width() >= 767) {
      $("#top-header").removeClass("header-default").addClass("header-home");
    }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

});

var pixels = 750;
const logo = document.querySelector(".header-home");

const getOffset = () => {
	if (window.pageYOffset > pixels) {
		logo.style.background = "rgba(0,0,0,1)";
		logo.style.transition = "background .5s ease-out";
	}
	if (window.pageYOffset < pixels) {
		logo.style.background = "transparent";
		logo.style.transition = "background .5s ease-out";
	}
};

window.addEventListener("scroll", getOffset);