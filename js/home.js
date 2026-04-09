"use strict";

function toggleMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.getElementById("SelectOption").addEventListener("change", function () {
  val = $("#SelectOption").val();

  console.log(val);
  if (val === "miniflat") {
    window.open("miniflat.html", "_blank");
  }
  if (val === "Contact") {
    window.open("contact.php", "_blank");
  }
  if (val === "Sitemap") {
    window.open("sitemap.php", "_blank");
  }
});
