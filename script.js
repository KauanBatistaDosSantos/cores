const slices = document.querySelectorAll('.slice');
const powerInfo = document.getElementById('power-info');
const powerImage = document.getElementById('power-image');
const result = document.getElementById('result');
const powerDescription = document.getElementById('power-description');

let selectedColors = [];

function calculatePower(color1, color2) {
  let power = {};
  if ((color1 === 'yellow' && color2 === 'red') || (color1 === 'red' && color2 === 'yellow')) {
    power.name = 'Controle de Água';
    power.description = 'O poder de manipular e controlar a água em todas as suas formas.';
    power.image = '/water.gif'; // URL da imagem do Controle de Água
  } else if ((color1 === 'gray' && color2 === 'white') || (color1 === 'white' && color2 === 'gray')) {
    power.name = 'Velocidade ou Vidência';
    power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
    power.image = '/velocista.png '; // URL da imagem do Controle de Terra
  } else if ((color1 === 'brown' && color2 === 'blue') || (color1 === 'blue' && color2 === 'brown')) {
    power.name = 'Controle de Fogo';
    power.description = 'O poder de manipular e controlar o fogo, incluindo chamas e calor intenso.';
    power.image = '/fire.gif'; // URL da imagem do Controle de Fogo
  } else if ((color1 === 'bisque' && color2 === 'green') || (color1 === 'green' && color2 === 'bisque')) {
    power.name = 'Controle de Ar';
    power.description = 'O poder de manipular e controlar o ar, incluindo vento e atmosfera.';
    power.image = '/air.gif'; // URL da imagem do Controle de Ar
  } else if ((color1 === 'white' && color2 === 'indigo') || (color1 === 'indigo' && color2 === 'white')) {
    power.name = 'Controle de Terra';
    power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
    power.image = '/earth.gif'; // URL da imagem do Controle de Ar
  } else if ((color1 === 'gray' && color2 === 'orange') || (color1 === 'orange' && color2 === 'gray')) {
    power.name = 'Transmutação';
    power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
    power.image = '/transmutação.gif'; // URL da imagem do Controle de Ar
  } else {
    power.name = 'Combinação sem poder';
    power.description = 'Essas cores não geram nenhum poder especial.';
    power.image = ''; // Sem imagem
  }
  return power;
}

function updateSelectedColors(colors) {
  const selectedColorsDiv = document.querySelector('.selected-colors');
  selectedColorsDiv.innerHTML = '';

  colors.forEach((color, index) => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('selected-color');
    colorDiv.style.backgroundColor = color;
    selectedColorsDiv.appendChild(colorDiv);
  });
}

slices.forEach(slice => {
  slice.addEventListener('click', () => {
    if (selectedColors.length < 2) {
      selectedColors.push(slice.style.backgroundColor);
      updateSelectedColors(selectedColors); // Atualiza as cores selecionadas
      slice.style.opacity = '0.5';
    }
    if (selectedColors.length === 2) {
      let power = calculatePower(selectedColors[0], selectedColors[1]);
      result.textContent = `Poder resultante: ${power.name}`;
      powerDescription.textContent = power.description; // Define a descrição do poder
      powerImage.src = power.image;
      powerInfo.style.display = 'block';
      selectedColors = [];
      slices.forEach(slice => slice.style.opacity = '1');
    }
  });
});
