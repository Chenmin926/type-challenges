let canvas: HTMLCanvasElement = document.querySelector('#canvas')!
let ctx = canvas.getContext('2d')!

canvas.width = screen.availHeight
canvas.height = screen.availWidth

let strs: string[] = ['a', 'b', 'c', 'x', 'g', '1', '2', '0', 'f', 'i']
let arr = Array(Math.ceil(canvas.width / 10)).fill(0)

const rain = () => {
  ctx.fillStyle = 'rgba(0,0,0,0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#0f0'
  arr.forEach((item, index) => {
    ctx.fillText(strs[Math.floor(Math.random() * strs.length)], index * 10, item + 10)
    arr[index] = item > canvas.height || item > Math.random() * 10000 ? 0 : item + 10
  })
}

setInterval(rain, 40)

