jQuery(function ($) {
  window.Custom = function () {
    const year = document.getElementById("year");

    year.innerText = "2024-" + (new Date().getFullYear() + 1);
  };
});

var Custom = window.Custom;
