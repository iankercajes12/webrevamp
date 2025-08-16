
    window.addEventListener("scroll", function(){

        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);

    });


    function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}