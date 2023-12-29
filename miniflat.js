"use strict";
document.getElementById("SelectOption").addEventListener("change", function () {
  val = $("#SelectOption").val();

  console.log(val);
  if (val === "Home") {
    window.open("home.php", "_blank");
  }
  if (val === "Contact") {
    window.open("contact.php", "_blank");
  }
  if (val === "Sitemap") {
    window.open("sitemap.php", "_blank");
  }
});
