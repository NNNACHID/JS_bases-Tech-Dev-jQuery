console.log("exercice 4");
console.log("RUBYYYYYY!!!");

// 1
/*
$('.btn-danger').on("click", function(){
    window.alert("Merci nous vous tiendrons informé des différentes offres");
});

// 2

$("#signUpButton").click(function(){
  var str = $("input").val();
  window.alert("Merci " + str + ", nous vous tiendrons informé des différentes offres");
});


// 3

  $('a[href$="#product"]').dblclick(function () {
    $('a[href$="#product"]').hide();
  });
*/
// 4

// let i;

var i = 1;


  $("img").click(function () {
    if ($("#cartIcon").hasClass("glyphicon-shopping-cart")) {

      $("#cartIcon").attr("class", "glyphicon glyphicon-ok-circle");
      $('a[href$="#Cart"]').append("(" + i + ")");
      console.log("the onefdsfsd"); 

    } else {

      i ++;
      $('a[href$="#Cart"]').replaceWith($('a[href$="#Cart"]').append("(" + i + ")"));
      console.log("the one" + i);

    }
  });
