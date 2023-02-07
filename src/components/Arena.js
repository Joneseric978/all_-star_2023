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
      <img
        className="malone"
        src="https://cdn.vox-cdn.com/thumbor/bjdasSWTznYXzIPNV7eZi3HJgAE=/0x7:1891x1268/1200x800/filters:focal(0x7:1891x1268)/cdn.vox-cdn.com/uploads/chorus_image/image/50188271/usa-today-9257377.0.jpg"
      />
      <img
        className="mazzula"
        src="https://tse1.mm.bing.net/th?id=OIP.W9Ox6VgvgFeWSqWj2XRGAAHaDn&pid=Api&P=0"
      />
    </div>
  )
}

export default Arena
