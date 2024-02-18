const options = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'gray', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indian-blue', color: '#3F51B5' },
  ];
  
  const body = document.querySelector('body');
  const changeColorButton = document.querySelector('.change-color');
  const textColorElement = document.querySelector('.color');
  
  changeColorButton.addEventListener('click', onBtnColorChange);
  
  function onBtnColorChange() {
    const randomColor = getRandomHexColor();
    textColorElement.textContent = randomColor;
    body.style.backgroundColor = randomColor;
  }
  
  function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }