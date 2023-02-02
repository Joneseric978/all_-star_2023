const Button = (props) => {
  console.log(props)

  return (
    <div id="js_timer">
      <div id="timer">00:00</div>
      <button onclick="pause()">pause</button>
    </div>
  )
}

var timer
var ele = document.getElementById('timer')

;(function () {
  var sec = 0
  timer = setInterval(() => {
    ele.innerHTML = '00:' + sec
    sec++
  }, 1000)
})()
function pause() {
  clearInterval(timer)
}
export default Button
