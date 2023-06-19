const cloudTypes = [
    { id: 'cloud1', path: 'cloud1.png', zIndex: 10, speed: 1.5 },
    { id: 'cloud2', path: 'cloud2.png', zIndex: 8, speed: 0.8 },
    { id: 'cloud3', path: 'cloud3.png', zIndex: 6, speed: 1.2 },
    { id: 'cloud4', path: 'cloud4.png', zIndex: 4, speed: 0.7 },
    { id: 'cloud5', path: 'cloud5.png', zIndex: 2, speed: 1.0 }
  ];
  
  const cloudCounts = {
    cloud1: 8,
    cloud2: 6,
    cloud3: 5,
    cloud4: 4,
    cloud5: 7
  };
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function createClouds() {
    const background = document.getElementById('background');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    cloudTypes.forEach((cloudType) => {
      const { id, path, zIndex } = cloudType;
  
      for (let i = 0; i < cloudCounts[id]; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.id = `${id}-${i + 1}`;
        cloud.style.zIndex = zIndex;
        cloud.style.backgroundImage = `url('${path}')`;
  
        const initialLeft = getRandomNumber(0, windowWidth );
        const initialTop = getRandomNumber(0, windowHeight);
        cloud.style.left = `${initialLeft}px`;
        cloud.style.top = `${initialTop}px`;
  
        background.appendChild(cloud);
      }
    });
  }
  
  function animateClouds() {
    const clouds = Array.from(document.getElementsByClassName('cloud'));
    const windowWidth = window.innerWidth;
  
    clouds.forEach((cloud) => {
      const cloudType = cloud.id.split('-')[0];
      const speed = cloudTypes.find((type) => type.id === cloudType).speed;
      const currentPosition = parseFloat(getComputedStyle(cloud).left);
      const newPosition = currentPosition + speed;
  
      if (newPosition > windowWidth) {
        cloud.style.left = '-150px';
      } else {
        cloud.style.left = `${newPosition}px`;
      }
    });
  
    requestAnimationFrame(animateClouds);
  }
  
  createClouds();
  animateClouds();
  