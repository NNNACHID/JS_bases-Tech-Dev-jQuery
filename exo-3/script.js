console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici

// Et pas dans votre fichier HTML ! 

//1
$('.jumbotron h1').text('Nicolas');

//2
$('#tagline').text('Do you know da wae ?');

//3
$('.navbar-nav:first').remove();

//4
$('.navbar-right span').replaceWith($('<i class="bi bi-person"></i>'));

//5
$('footer').html('<strong>Copyright 2021</strong>');

//6
$('.row p').text('Mon projet');

//7
$('.row img').attr("src", "plage.jpg");

//8
$('#myLastProject').append('<img src=plagehouse.jpg style=height:250px alt=image>');
$('#myLastProject').append('<p><strong>In da wae we trust</strong></p>');

//9
$('footer').addClass('intro');