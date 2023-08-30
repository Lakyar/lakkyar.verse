const homeTag = document.getElementById("homeLink");
const aboutTag = document.getElementById("aboutLink");
const servicesTag = document.getElementById("servicesLink");
const contactTag = document.getElementById("contactLink");

homeTag.addEventListener('click', function(){
  document.getElementById("check").checked = false;
});
aboutTag.addEventListener('click', function(){
  document.getElementById("check").checked = false;
});
servicesTag.addEventListener('click', function(){
  document.getElementById("check").checked = false;
});
contactTag.addEventListener('click', function(){
  document.getElementById("check").checked = false;
})











AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 60, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});