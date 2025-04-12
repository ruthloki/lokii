import "./database.js"
import { PostModule1 } from "./models.js"

import posts from "./posts.json" with { type: "json"}

PostModule1.insertMany(posts).then(() => {
    console.log("insector")
}).catch(error => {
    console.log("Failed to insert",error)
})