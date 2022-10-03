import { useState } from 'react'
import reactLogo from './assets/react.svg'
/* import './App.css' */
/* import './styles.css' */

//importamos los componentes de interface
import Navbar from './components/Navbar'
/* import Carrousel from './components/Carrousel'
import Marketing from './components/Marketing'
import Footer from './components/Footer' */
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)
  const [countdos, setCountDos] = useState(0)

  return (
    
    <>
        {/* <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Carousel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto mb-2 mb-md-0">
                    <li class="nav-item active">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </header> */}
        <Navbar/>
        
       {/*  <main>

            <Carrousel/>

            <Marketing/>

            <Footer/>

        </main> */}

        <Main/>
    </>

  )
}

export default App
