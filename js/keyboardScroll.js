jQuery(function ($) {
  window.KeyboardScroll = function () {
    var elem = document.querySelector("#content-scroll");
    var scrollbar = Scrollbar.init(elem, {
      renderByPixels: true,
      damping: 0.1,
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        gsap.to(scrollbar, {
          duration: 1.5,
          scrollTop: scrollbar.scrollTop - window.innerHeight,
        });
      }
      if (e.key === "ArrowDown") {
        gsap.to(scrollbar, {
          duration: 1.5,
          scrollTop:
            screen.height *
              Math.ceil(scrollbar.scrollTop / window.innerHeight) +
            1,
        });
      }
    });
  };
});

var KeyboardScroll = window.KeyboardScroll;
