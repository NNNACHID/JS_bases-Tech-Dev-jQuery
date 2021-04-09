console.log("exercice 4");


// 1
/*
$('.btn-danger').on("click", function(){
    window.alert("Merci nous vous tiendrons informé des différentes offres");
});
*/
// 2

$(".btn-danger").click(function(){
  var str = $("input").val();
  alert("Merci " + str + ", nous vous tiendrons informé des différentes offres");
});

// 3 

