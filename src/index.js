// Modal Setup
var modal = document.getElementById("modal");

modal.addEventListener("click", function () {
  modal.style.display = "none";
});

// global handler
document.addEventListener("click", function (e) {
  console.log("== click ==");
  if (e.target.className.indexOf("modal-target") !== -1) {
    debugger;
    var img = e.target;
    var modalImg = document.getElementById("modal-content");
    var captionText = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});
