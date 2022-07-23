console.log('hi')
const board = document.querySelector('.board')
for(let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.classList.add(`b${i}`)
    div.classList.add('box')
    board.appendChild(div)
    div.addEventListener('click', () => console.log(i))
}