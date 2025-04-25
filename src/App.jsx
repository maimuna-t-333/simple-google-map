
import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {


  return (
    <>

      <h1>React google map</h1>
      <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 24.9048, lng: 91.8600}}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />

    </>
  )
}

export default App
