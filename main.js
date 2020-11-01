// product-description
(function () {
  var acc = document.getElementsByClassName("show-hide-filters");
  acc[0] &&
    acc[0].addEventListener("click", function () {
      // show or hide filters
      document
        .getElementsByClassName("filter-dropdown")[0]
        .classList.toggle("show-filter");
    });

  var sort = document.getElementsByClassName("sort-by-price");
  sort[0] &&
    sort[0].addEventListener("click", function () {
      if (sort[0].innerHTML === "Sort by: Price (Low to High)") {
        sort[0].innerHTML = "Sort by: Price (High to Low)";
      } else {
        sort[0].innerHTML = "Sort by: Price (Low to High)";
      }
    });
})();

// product-description
(function () {
  var acc = document.getElementsByClassName("checkout-step-1-list-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// product-description
(function () {
  var acc = document.getElementsByClassName(
    "product-description-list-accordion"
  );
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// faqs
(function () {
  var acc = document.getElementsByClassName("faqs-list-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// legal
(function () {
  var acc = document.getElementsByClassName("legal-list-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// customer-support
(function () {
  var acc = document.getElementsByClassName("customer-support-list-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// shopping-bag
(function () {
  var acc = document.getElementsByClassName("shopping-bag-list-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

$(document).ready(function () {
  var $owl = $(".product-secondary-images .owl-carousel");
  $owl.on("initialized.owl.carousel resized.owl.carousel", function (e) {
    $(e.target).toggleClass("hide-nav", e.item.count <= e.page.size);
  });

  $(".recent-products") &&
    $(".recent-products .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 0,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>",
      ],
      responsive: {
        0: {
          items: 1.9,
        },
        400: {
          items: 2.3,
        },
        450: {
          items: 2.5,
        },
        600: {
          items: 3.8,
        },
        650: {
          items: 2.8,
        },
        800: {
          items: 3.8,
        },
        1000: {
          items: 5.1,
        },
        1200: {
          items: 6.1,
        },
      },
    });
  $(".similar-products .owl-carousel") &&
    $(".similar-products .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 0,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>",
      ],
      responsive: {
        0: {
          items: 1.9,
        },
        400: {
          items: 2.3,
        },
        450: {
          items: 2.5,
        },
        600: {
          items: 3.8,
        },
        650: {
          items: 2.8,
        },
        800: {
          items: 3.8,
        },
        1000: {
          items: 5.1,
        },
        1200: {
          items: 6.1,
        },
      },
    });
  $(".product-secondary-images .owl-carousel") &&
    $(".product-secondary-images .owl-carousel").owlCarousel({
      loop: false,
      dots: false,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>",
      ],
      responsive: {
        0: {
          items: 3.2,
        },
        400: {
          items: 4.5,
        },
        600: {
          items: 5.1,
        },
        768: {
          items: 3.1,
        },
        1000: {
          items: 4.5,
        },
        1200: {
          items: 4.9,
        },
      },
    });

  $(".common-collection-carousel .owl-carousel") &&
    $(".common-collection-carousel .owl-carousel").owlCarousel({
      // margin: 10,
      // loop: true,
      nav: true,
      dots: true,
      // center: true,
      items: 3,
      navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>",
      ],
      responsive: {},
    });
});

(function ($) {
  $(document).ready(function () {
    $("#slick-slider-demo").slick({
      dots: true,
      arrows: true,
      slidesToShow: 3,
      prevArrow:
        "<button class='left-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button class='right-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);

(function ($) {
  $(document).ready(function () {
    var sync1 = $(".slider");
    var sync2 = $(".navigation-thumbs");

    var thumbnailItemClass = ".owl-item";

    var slides = sync1
      .owlCarousel({
        startPosition: 12,
        items: 1.1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
      })
      .on("changed.owl.carousel", syncPosition);

    function syncPosition(el) {
      $owl_slider = $(this).data("owl.carousel");
      var loop = $owl_slider.options.loop;

      if (loop) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
      } else {
        var current = el.item.index;
      }

      var owl_thumbnail = sync2.data("owl.carousel");
      var itemClass = "." + owl_thumbnail.options.itemClass;

      var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);

      thumbnailCurrentItem.addClass("synced");

      if (!thumbnailCurrentItem.hasClass("active")) {
        var duration = 300;
        sync2.trigger("to.owl.carousel", [current, duration, true]);
      }
    }
    var thumbs = sync2
      .owlCarousel({
        startPosition: 12,
        items: 4,
        loop: false,
        margin: 10,
        autoplay: false,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left' aria-hidden='true'></i>",
          "<i class='fa fa-angle-right' aria-hidden='true'></i>",
        ],
        dots: false,
        onInitialized: function (e) {
          var thumbnailCurrentItem = $(e.target)
            .find(thumbnailItemClass)
            .eq(this._current);
          thumbnailCurrentItem.addClass("synced");
        },
      })
      .on("click", thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
      })
      .on("changed.owl.carousel", function (el) {
        var number = el.item.index;
        $owl_slider = sync1.data("owl.carousel");
        $owl_slider.to(number, 100, true);
      });
  });
})(jQuery);
