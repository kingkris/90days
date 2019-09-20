$(document).ready(function () {


  elem = $('.section-header h1');
  elem.addClass('page-title');

  console.log($('.page-title').text());
  $('.page-title').text("Good Morning, India. How are you gys doing Today? ");

// this is a comment: 
// Here we are looking at the demo of events
  // $('.site-nav a').click(function (e) { 
  //   e.preventDefault();
  //   $('.site-nav a').removeClass('active');
  //   $(this).addClass('active');

  //   // Printing the text of of the link, which was clicked
  //   linktext = $(this).text();
  //   console.log("You clicked on " + linktext);
  // });

var activelink = 0;

  $('.site-nav a').click(function (e) { 
    e.preventDefault();
    $('.site-nav a').eq(activelink).removeClass('active');
    
    $(this).addClass('active');
    activelink = $('.site-nav a').eq();
    console.log(activelink);
    // Printing the text of of the link, which was clicked
    linktext = $(this).text();
    console.log("You clicked on " + linktext);
  });


  originaltext = $('.text-demo').text();
  console.log(originaltext);

  $('.text-demo').text("Text Set through jQuery ");

  $('.col-full h1').click(function (e) { 
    e.preventDefault();
    $(this).next().slideToggle();
  });



// ham menu

$('.ham').click(function (e) { 
  e.preventDefault();
  $(this).next().slideToggle();
  
});



});
