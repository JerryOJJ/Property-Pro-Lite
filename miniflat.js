"use strict";
document.getElementById("SelectOption").addEventListener("change", function () {
  val = $("#SelectOption").val();

  console.log(val);
  if (val === "Home") {
    window.open("home.html", "_blank");
  }
  if (val === "Contact") {
    window.open("contact.html", "_blank");
  }
  if (val === "Sitemap") {
    window.open("sitemap.html", "_blank");
  }
});
