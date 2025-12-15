import Card from "./Card"
import { Navigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Results = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const mood = searchParams.get("mood")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState("Loading...")

    if ((query === null || query.trim() === "") && (mood === null || mood.trim() === "")) {
        return <Navigate to="/" replace />
    }

    useEffect(() => {
        async function fetchResults() {
            if (query === null || query.trim() === "") return
            const res = await fetch(`http://localhost:5212/search?q=${encodeURIComponent(query)}`)
            const data = await res.json()
            if (data.results.length === 0) {
                setLoading("No results found, try different keywords.")
            }
            setMovies(data.results)
        }
        fetchResults()
    }, [query])

    useEffect(() => {
        async function fetchMoodResults() {
            if (mood === null || mood.trim() === "") return
            const res = await fetch(`http://localhost:5212/mood?mood=${encodeURIComponent(mood)}`)
            const data = await res.json()
            setMovies(data)
        }
        fetchMoodResults()
    }, [mood])

    return (
        <div className="min-h-screen py-10 px-5">
            <h1 className="text-white text-3xl mb-6">Results for {query}{mood} </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {
                    movies.map((movie) => (
                        <Card
                            key={movie.imdbID}
                            title={movie.title}
                            year={movie.year}
                            imdbID={movie.imdbID}
                            poster={movie.poster}
                        />
                    ))
                }
                {
                    movies.length === 0 && (
                        <p className="text-gray-400">{loading}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Results