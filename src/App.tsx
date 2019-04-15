import React from 'react'
import { Root, Routes } from 'react-static'
import '../static/css/app.css'
import '../static/css/tachyons-mybit.css'
//import Menu from '@containers/Menu'
import Foooter from '@mybit/ui.footer'

function App() {
  return (
    <Root>

      <div className="center">
        <main>
          <Routes />
        </main>

        <div
          style={{ borderColor: '#D9D9D9' }}
          className="bb mh2 border-1"
        />
        <div className="pt3"/>
        <Foooter isGo={true} />
      </div>
    </Root>
  )
}

export default App
