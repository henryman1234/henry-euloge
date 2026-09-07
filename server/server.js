import express from "express"
import cors from "cors"
import http from "node:http"
import dotenv from "dotenv"
import { error } from "node:console"
import projectsRoute from "./routes/projects.js"
import emailsRouter from "./routes/emails.js"
dotenv.config()

const app = express()
const httpServer = http.createServer(app)



const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://henry-euloge.vercel.app"
]

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        } else {
            return callback(new error("Unknown origin"), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use("/api/projects", projectsRoute)
app.use("/api/emails", emailsRouter)

// Handle errors
app.use((err, req, res, next) => {

    const message = err.message || "Une érreur est survenue";
    const status = err.status || 500;

    return res.json({
        message,
        status,
        stack: err?.stack
    })

    next()
})

app.get("/", async (req, res) => {
    res.send("Ceci est la route d'accueil du serveur")
})

const port = process.env.PORT || 3000

try {
    // await connectDB();

    httpServer.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })

} catch (err) {
    console.error("The server did not start !", err)
    process.exit(1)
}



