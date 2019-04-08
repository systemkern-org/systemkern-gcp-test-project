external fun require(module: String): dynamic

fun main() {
    val express = require("express")
    val app = express()

    app.get("/") { _,res ->
        res.send("Hello Node Kotlin")
    }

    val port = 3000
    app.listen(port) {
        println("Listening on Port $port")
    }
}
