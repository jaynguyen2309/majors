// Majors Group landing page — subtle press feedback on the Instagram buttons.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ig-btn").forEach(function (btn) {
    btn.addEventListener("mousedown", function () {
      btn.style.transform = "translateY(0) scale(0.98)";
    });
    ["mouseup", "mouseleave"].forEach(function (ev) {
      btn.addEventListener(ev, function () {
        btn.style.transform = "";
      });
    });
  });
});
