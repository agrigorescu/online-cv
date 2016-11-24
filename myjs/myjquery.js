$(function(){
    console.log("the dom is ready");

    //collapsing the navbar when in mobile mode
    $(".button-collapse").sideNav({
      closeOnClick: true;
    });

    //including the parallax scrolling effect
    $('.parallax').parallax();

})
