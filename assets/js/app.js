const colors = [
  'green',
  'red',
  'blue',
  'royalblue',
  'lime',
  'tomato',
  'rgba(133,243,120,0.5)',
  '#f15025',
]

const btn = document.querySelector('.gameChanger')
console.log(btn)

const color = document.querySelector('.color')
btn.addEventListener('mouseenter', function () {
  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
