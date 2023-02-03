const Button = (props) => {
  console.log(props)

  var timer
  var ele = document.getElementById('timer')
  var minutes = Math.floor((minutes % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((seconds % (1000 * 60)) / 1000)

  ;(function () {
    var sec = 0,
      stop = 60,
      counterstarted = false,
      counter
    var minutes = 0
    timer = setInterval(() => {
      ele.innerHTML = '00:' + sec
      sec++
    }, 1000)
  })()

  function pause() {
    clearInterval(timer)
  }

  return (
    <div id="timer">
      <span class="timer_part timer_part-minutes">00</span>
      <span class="timer_part">:</span>
      <span class="timer_part timer_part-Seconds">00</span>
      <button type="button" class="timer_btn-control timer_btn-start">
        start
      </button>
      <button type="button" class="timer_btn timer_btn-reset">
        reset
      </button>
    </div>
  )
}

export default Button
