(function(){
  // Guarded GSAP animation
  function init(){
    if(!window.gsap) return;
    gsap.from('.hero h1', {opacity:0, y:20, duration:0.8});
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();