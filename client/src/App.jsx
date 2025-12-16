import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Results from './components/Results'
import Details from './components/Details'
import Footer from './components/Footer'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={
                <>
                    <Navbar />
                    <Carousel />
                    <Hero />
                    <Footer />
                </>
            } />
            <Route exact path="/results" element={
                <>
                    <Navbar />
                    <Results />
                    <Footer />
                </>
            } />
            <Route exact path="/details" element={
                <>
                    <Navbar />
                    <Details/>
                    <Footer />
                </>
            } />
            <Route exact path="/mood" element={
                <>
                    <Navbar />
                    <Results />
                    <Footer />
                </>
            } />
        </Routes>
    )
}

export default App