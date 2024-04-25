document.addEventListener("DOMContentLoaded", function() {
    const lights = document.querySelectorAll('.light');
    const startButton = document.getElementById('startButton');
    let currentLightIndex = 0;
    let intervalId;
  
    function switchLight() {
      lights.forEach(light => light.classList.remove('active'));
      lights[currentLightIndex].classList.add('active');
      currentLightIndex = (currentLightIndex + 1) % lights.length;
    }
  
    function startTrafficLight() {
      intervalId = setInterval(switchLight, 6000); 
    }
  
    function stopTrafficLight() {
      clearInterval(intervalId);
    }
  
    startButton.addEventListener('click', function() {
      startTrafficLight();
    });
  });
  