

const colorSelectors = document.querySelectorAll('.color-select');


function updateSectionColor(event) {
  const selectedColor = event.target.value.toLowerCase(); 
  const section = event.target.closest('section'); 


  section.style.backgroundColor = selectedColor;
}


colorSelectors.forEach(selector => {
  selector.addEventListener('change', updateSectionColor);
});






