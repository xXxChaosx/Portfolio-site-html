document.addEventListener("DOMContentLoaded", () => {
    const flyingPokemon = document.querySelector('.flying-pokemon');
  
    function updateFlyingDirection() {
      const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
      flyingPokemon.style.animationDirection = direction;
  
      if (direction === 'reverse') {
        flyingPokemon.style.transform = 'scaleX(-1)';
      } else {
        flyingPokemon.style.transform = 'scaleX(1)';
      }
    }
  
    setInterval(updateFlyingDirection, 8000);
  });
  