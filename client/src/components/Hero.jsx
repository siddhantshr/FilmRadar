import React from "react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const [query, setQuery] = React.useState("")
    const [mood, setMood] = React.useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (query.trim() === "") return

        navigate(`/results?q=${encodeURIComponent(query)}`)
    }

    const handleMoodSearch = (e) => {
        e.preventDefault()
        if (mood.trim() === "") return

        navigate(`/mood?mood=${encodeURIComponent(mood)}`)
    }

    return (
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8" id="search">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h1 className="text-blue-600 font-bold text-4xl xl:text-5xl">
                    Welcome to FilmRadar
                    <span className="text-white"><br />SEARCH MOVIES</span>
                </h1>
                <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Find all your favourite movies in one place.
                </p>
                <div>
                    <form onSubmit={handleSearch} className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            onChange={(e) => setQuery(e.target.value)}
                            className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                        />
                        <button type="submit" className="outline-none bg-blue-700 text-white text-center px-4 py-3 rounded-md shadow w-full hover:ring-offset-2 hover:ring-gray-700 hover:ring-2 sm:w-auto">
                            Search
                        </button>
                    </form>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 py-8">
                        Or try searching for moods like <strong className="text-blue-500">happy, sad, excited!</strong>
                    </p>
                    <form onSubmit={handleMoodSearch} className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                        <input
                            type="text"
                            placeholder="Search for mood..."
                            onChange={(e) => setMood(e.target.value)}
                            className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                        />
                        <button type="submit" className="outline-none bg-blue-700 text-white text-center px-4 py-3 rounded-md shadow w-full hover:ring-offset-2 hover:ring-gray-700 hover:ring-2 sm:w-auto">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                <img src="/logo2.png" className="w-full mx-16 sm:w-10/12 lg:w-full" />
            </div>
        </section>
    )
}

export default Hero