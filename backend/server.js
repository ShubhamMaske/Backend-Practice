import express from 'express'

const app = express()

const port  = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title:"First",
            content: "I can make a movie with my hand. All it takes is a FLICK of the wrist!"
        },
        {
            id:2,
            title:"Second",
            content: "So today is Star Wars day May the fourth be with you!"

        },
        {
            id:3,
            title:"Third",
            content: "I have a joke about chemistry, but I don’t think it’ll get a reaction."

        },
        {
            id:4,
            title:"Fourth",
            content: "What did Descartes say while shopping online? I think therefore I Amazon."

        },
        {
            id:5,
            title:"Fifth",
            content: "Why was the math book sad? Because it had too many problems."
        }
    ]

    res.send(jokes)
})

app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Oops! The page you are looking for does not exist"
    })
})

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})