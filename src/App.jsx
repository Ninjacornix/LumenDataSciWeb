import './App.css'
import './webglunits/Object.jsx'
import { useState } from 'react'
import NavigationBar from './compopnents/NavigationBar'
import UploadFile from './compopnents/UploadFile'
import RotatingStars from './webglunits/RotatingStars'
import { Canvas } from '@react-three/fiber'
import Container from './compopnents/Container'


function App() {
  const [render, setRender] = useState(true)
  const [data, setData] = useState(null)
  const [sound, setSound] = useState(null)

  const setRenderFalse = () => {
    setRender(false)
  }

  const setDataToArray = (data) => {
    setData(data)
  }

  const setSoundToPlay = (sound) => {
    setSound(sound)
  }

  return (
    <>
      <NavigationBar />
      <Canvas style={{height: "93vh"}}>
        <RotatingStars/>
      </Canvas>
      <UploadFile render={render} setRender={setRenderFalse} setData={setDataToArray} setSound={setSoundToPlay}/>
      <Container render={render} data={data} sound={sound}/>
    </>
  )
}

export default App
