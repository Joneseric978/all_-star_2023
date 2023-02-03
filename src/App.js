import './App.css'
import './allStar.json'
import playerArray from './allStar.json'
import Player from './components/Player'
import Accolades from './components/Accolades'
import SideBar from './components/SideBar'
import Button from './components/Button'
import Arena from './components/Arena'

const App = () => {
  return (
    <div>
      <h1>NBA All-Stars</h1>
      <Arena />
      <div className="flex-row">
        <SideBar />
        <Button />
      </div>
      <ul>
        {playerArray.map((player) => {
          return (
            <div>
              <Player
                key={player.last}
                first={player.first}
                last={player.last}
                vote={player.vote}
                appearances={player.appearances}
                picture={player.picture}
                stadium={player.stadium}
              />
              {player.accolades.map((accolades) => (
                <Accolades accolades={accolades} />
              ))}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
