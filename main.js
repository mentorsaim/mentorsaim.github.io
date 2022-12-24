function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  var button = document.getElementById("learnMoreButton");
  button.addEventListener("click", showModal);
  
  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", hideModal);
  