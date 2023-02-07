const Arena = (props) => {
  console.log(props)
  return (
    <div>
      <img
        className="jazz"
        src="https://cdn.nba.com/manage/2019/12/arena1-6aee5e47fa0184e679a2ad6c053f555e.jpg"
      />
      <img
        className="utah"
        src="https://www.ticketnews.com/wp-content/uploads/2017/08/utah-jazz-arena-640x300.jpg"
      />
      <h3 className="coach">
        Coach 1: Nuggets: Michael Malone named coach of Team Lebrons
      </h3>
      <h3 className="coach">
        Coach 2: Joe Celtics: Mazzulla named coach of Team Giannis
      </h3>
    </div>
  )
}

export default Arena
