import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { Groq } from 'groq-sdk'

const app = express()

dotenv.config()
app.use(cors())
const OMDB_API_KEY = process.env.OMDB_API_KEY
const GROQ_API_KEY = process.env.GROQ_API_KEY


const client = new Groq({ 
    apiKey: GROQ_API_KEY
})

app.get('/recommend', async (req, res) => {
    const movie = req.query.movie
    
    const response = await client.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Generate movies similar to ${movie} (4-5), GIVE title, imdbID, year, poster IN A JSON ARRAY FORMAT. do not include any other text like \`\`\`json or anything. POSTER URL SHOULD BE https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png`,
            },],
        model: "openai/gpt-oss-20b",
    })

    res.json(JSON.parse(await response.choices[0].message.content))
})

app.get('/mood', async (req, res) => {
    const mood = req.query.mood

    const response = await client.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Generate movies similar to movies that fit the mood ${mood} (4-5), GIVE ONLY TITLES in a json array format along with imdbIDs. do not include any other text like \`\`\`json or anything.POSTER URL SHOULD BE https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/960px-Placeholder_view_vector.svg.png`,
            },],
        model: "openai/gpt-oss-20b",
    })

    res.json(JSON.parse(await response.choices[0].message.content))
})

app.get('/', (req, res) => {
    res.json(
        {
            status: "working",
            version: "0.1.0-dev"
        }
    )
})

app.get('/search', async (req, res) => {
    const query = req.query.q

    if (!query) {
        return res.status(400)
            .json({ error: "No query given" })
    }

    const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`)
    const data = await response.json()

    if (data['Response'] === 'False') {
        return res.json({ results: [] })
    }
    let returnData = { results: [] }

    for (const movieDict of data['Search']) {
        if (!(movieDict['Type'] === 'movie')) {
            continue
        }
        let poster = movieDict['Poster']
        if (poster === 'N/A') {
            poster = 'https://blocks.astratic.com/img/general-img-portrait.png'
        }
        returnData['results'].push({
            title: movieDict['Title'],
            year: movieDict['Year'],
            imdbID: movieDict['imdbID'],
            poster: poster,
        })
    }
    res.json(returnData)
})

app.get('/details', async (req, res) => {
    const imdbID = req.query.id

    if (!imdbID) {
        return res.status(400)
            .json({ error: "no id given" })
    }

    const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`)
    const data = await response.json()
    res.json(data)
})

// RUnning the server
const _PORT = process.env.PORT || 5000
// eslint-disable-next-line no-console
app.listen(_PORT, () => console.log(`Listening to ${_PORT}`))
