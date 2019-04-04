external val exports: dynamic
external fun require(module: String): dynamic

fun hello() = "Hello Kotlin World"

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val message = """Pushed from Github<br>
        |req:               $req<br>
        |req.query:         ${req.query}<br>
        |req.body:          ${req.body}<br>
        |req.body.message:  ${req.body.message}<br>
    """.trimMargin()
    //|req.query.message: ${req.query.message}<br>

    res.status(200).send(message)
}
