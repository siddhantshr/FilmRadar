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
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                        <Card 
                            title="The Dictator"
                            description="A satirical comedy film that follows the story of a dictator who risks his life to ensure that democracy never comes to the country he so lovingly oppressed."
                            imageUrl="/thedictator.jpg"
                        />
                        <Card
                            title="Mission: Impossible - Fallout"
                            description="Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."
                            imageUrl="/mitfr.jpg"
                        />
                    </div> */}
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