const Player = (props) => {
  console.log(props)
  return (
    <li className="player" id={props.name}>
      <div>
        <img src={props.picture} />
        <h3>
          Name: {props.first}
          {props.last}
        </h3>
        <h5>Votes: {props.vote}</h5>
      </div>
    </li>
  )
}

export default Player
