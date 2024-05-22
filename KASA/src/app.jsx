import './css/app.scss'
import {Navbar} from './components/Navbar.jsx'
import {Banner} from './components/Banner.jsx'

export function App() {
  //const [count, setCount] = useState()

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  )
}