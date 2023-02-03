const Arena = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.stadium} />
      <h3 className="coach">
        Coach 1: Michael Malone named coach of Team Lebrons
      </h3>
      <h3 className="coach">
        Coach 2: Joe Mazzulla named coach of Team Giannis
      </h3>
    </div>
  )
}

export default Arena
