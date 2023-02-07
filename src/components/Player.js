const Player = (props) => {
  console.log(props)
  return (
    <li className="player" id={props.special}>
      <div>
        <img src={props.picture} />
        <h3>
          Name: {props.first} {props.last}
        </h3>
        <h5>Votes: {props.vote}</h5>
        <p1>Team: {props.team}</p1>
        <di> ....... </di>
        <p2>All Star Games: {props.appearances}</p2>
      </div>
    </li>
  )
}

export default Player
