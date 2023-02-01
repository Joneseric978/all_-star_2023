import React from 'react'

const Accolades = (props) => {
  console.log(props.accolades.special)
  let colorVariable

  switch (props.accolades.special) {
    case 'GOAT':
      colorVariable = 'red'
      break
    case 'Clutch':
      colorVariable = 'orange'
      break
    case 'Captain':
      colorVariable = 'yellow'
      break
    case 'Top 10':
      colorVariable = 'blue'
      break
    case 'Closer':
      colorVariable = 'pink'
      break
    case 'Defender':
      colorVariable = 'green'
      break
    case 'normal':
      colorVariable = 'lightgray'
      break
    case 'reserve':
      colorVariable = 'purple'
      break
    case 'Maybe Next Year':
      colorVariable = 'tan'
      break
    case 'MVP Candidate':
      colorVariable = 'brown'
      break

    default:
      colorVariable = 'white'
  }
  return (
    <ul className="accolades">
      <div style={{ backgroundColor: colorVariable }}>
        {props.accolades.special}
      </div>
    </ul>
  )
}

export default Accolades
