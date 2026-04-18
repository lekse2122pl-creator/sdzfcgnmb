(function () {
  function initHologram() {
    const holos = document.querySelectorAll(".holo-back");
    const bases = document.querySelectorAll(".base-back");
    const tops = document.querySelectorAll(".godlo-top");

    if (holos.length === 0) {
      return;
    }

    bases.forEach((base) => {
      base.style.display = "block";
      base.style.opacity = "1";
    });

    tops.forEach((top) => {
      top.style.display = "block";
      top.style.opacity = "1";
    });

    holos.forEach((holo) => {
      holo.style.opacity = "0.7";
      holo.style.backgroundPosition = "center 50%";
    });
  }

  initHologram();

  window.addEventListener("pageshow", function (event) {
    initHologram();
  });

  function startAutoAnimation() {
    const holos = document.querySelectorAll(".holo-back");
    if (holos.length === 0) return;

    let startTime = Date.now();
    
    function animate() {
      const elapsed = Date.now() - startTime;
      // Zmienia się od 0 do 1
      const cycle = (Math.sin(elapsed / 800) + 1) / 2; 
      
      const opacity = 0.35 + (cycle * 0.5);
      const pos = cycle * 100;
      
      holos.forEach((holo) => {
        holo.style.backgroundPosition = `center ${pos}%`;
        holo.style.opacity = opacity;
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  // Uruchamiamy jedyną i zapętloną animację niezależną od żyroskopu
  startAutoAnimation();
})();

