const vilkaarLink = document.getElementById("vilkaarLink");
const vilkaarPopup = document.getElementById("vilkaarPopup");
const lukPopup = document.getElementById("lukPopup");

vilkaarLink.addEventListener("click", function (event) {
  event.preventDefault();

  vilkaarPopup.style.display = "flex";
});

lukPopup.addEventListener("click", function () {
  vilkaarPopup.style.display = "none";
});
