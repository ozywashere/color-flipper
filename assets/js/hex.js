const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
console.log(hex)

const btn = document.querySelector('.gameChanger')
const color = document.querySelector('.color')

//Event listener
btn.addEventListener('mouseenter', function () {
  let hexColor = '#'
  //For Loop
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }

  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
  color.style.backgroundColor = hexColor
})

//Random number generator
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
