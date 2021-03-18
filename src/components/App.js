import React from 'react'
import {Provider} from 'react-redux'
import Player from './Player'

import Game from './Game'

const App = ({store}) => {
  return (
    <Provider store={store}>
         <Player/>
      <Game />
   
    </Provider>
  )
}

export default App
