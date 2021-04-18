window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

    document.getElementsByClassName("placeholder")[0].className += " placeholder";

    document.getElementsByClassName("tm-header")[0].style.top = "15px";
    document.getElementsByClassName("tm-nav")[0].style.top = "-15px";
    document.getElementsByClassName("resim")[0].style.display = "none";


    document.getElementsByClassName("parallax-window")[0].style.minHeight = "0";

  } else if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1){
    document.getElementsByClassName("placeholder")[0].className = "placeholder-2";

    document.getElementsByClassName("tm-header")[0].style.top = "auto";
    document.getElementsByClassName("tm-nav")[0].style.top = "auto";
    document.getElementsByClassName("resim")[0].style.display = "block";

    document.getElementsByClassName("parallax-window")[0].style.minHeight = "460px";
  }
}

