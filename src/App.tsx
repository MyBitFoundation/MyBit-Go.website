import React from 'react'
import { Root, Routes } from 'react-static'
import '../static/css/app.css'
import '../static/css/tachyons-mybit.css'
//import Menu from '@containers/Menu'
import Foooter from '@mybit/ui.footer'
import BannerDao from '@components/BannerDao';

function App() {
  return (
    <Root>
      <BannerDao />
      <div className="center">
        <main>
          <Routes />
        </main>

        <div
          style={{ borderColor: '#D9D9D9' }}
          className="bb mh2 border-1"
        />
        <div style={{maxWidth: '1128px'}} className="pt3 center">
          <Foooter isGo={true} />
        </div>
      </div>
    </Root>
  )
}

export default App
