"use strict";
document.getElementById("prev").addEventListener("click", function () {
  document.getElementById("img-container1").classList.remove("next-animation"),
    document
      .getElementById("img-slider-up")
      .classList.remove("pause-prev-animation"),
    document
      .getElementById("img-container2")
      .classList.remove("next-animation"),
    document
      .getElementById("img-slider-down")
      .classList.remove("pause-prev-animation"),
    document.getElementById("img-slider-up").classList.add("prev-animation"),
    document.getElementById("img-slider-down").classList.add("prev-animation"),
    (document.getElementById("prev").disabled = !0),
    (document.getElementById("next").disabled = !1);
}),
  document.getElementById("next").addEventListener("click", function () {
    document.getElementById("img-container1").classList.add("next-animation"),
      document.getElementById("img-container2").classList.add("next-animation"),
      document
        .getElementById("img-slider-up")
        .classList.add("pause-prev-animation"),
      document
        .getElementById("img-slider-down")
        .classList.add("pause-prev-animation"),
      (document.getElementById("next").disabled = !0),
      (document.getElementById("prev").disabled = !1);
  });
