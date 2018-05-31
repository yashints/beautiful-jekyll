const load = () => {  
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    navigation: false,
    loop: true,
    autoplay: true
  });
} 
window.onload = load;