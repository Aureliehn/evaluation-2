// gestion des slides avec slick

$('.slide_background').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    autoplay:true,
    autoplaySpeed:1500,
});

$('.small_slide').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    autoplay:false,
    
})


// ESSAI
let titre=document.createElement('h1');
titre.textContent="Bienvenue à bord";
document.body.insertBefore(titre, document.querySelector('.contenant'));


// var maintenant=new Date();
// document.write(maintenant);

// test avec plugin non concluant 
// let ias = new InfiniteAjaxScroll('.container', {
//     item: '.item',
//     next: '.next',
//     pagination: '.pagination'
//   });