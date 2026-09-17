const delKnap = document.querySelector(".del-knap");
const delPopup = document.querySelector("#delPopup");
const delPopupLuk = document.querySelector("#delPopupLuk");
const kopierLink = document.querySelector("#kopierLink");

/* ========================================
   ÅBN POPUP
======================================== */

delKnap.addEventListener("click", function (event) {
  event.preventDefault();

  delPopup.classList.add("aktiv");

  // Forhindrer siden bag popup'en i at scrolle
  document.body.style.overflow = "hidden";
});

/* ========================================
   LUK POPUP
======================================== */

function lukPopup() {
  delPopup.classList.remove("aktiv");

  // Giver siden scroll tilbage
  document.body.style.overflow = "";
}

delPopupLuk.addEventListener("click", lukPopup);

/* ========================================
   LUK VED KLIK UDEN FOR POPUP-BOKSEN
======================================== */

delPopup.addEventListener("click", function (event) {
  if (event.target === delPopup) {
    lukPopup();
  }
});

/* ========================================
   LUK MED ESC
======================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && delPopup.classList.contains("aktiv")) {
    lukPopup();
  }
});

/* ========================================
   KOPIER LINK
======================================== */

kopierLink.addEventListener("click", async function () {
  const link = window.location.href;

  try {
    await navigator.clipboard.writeText(link);

    const gammelTekst = kopierLink.textContent;

    kopierLink.textContent = "Link kopieret!";

    setTimeout(function () {
      kopierLink.textContent = gammelTekst;
    }, 1500);
  } catch (error) {
    console.error("Kunne ikke kopiere linket:", error);
  }
});
