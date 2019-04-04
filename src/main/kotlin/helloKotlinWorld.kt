//external val exports: dynamic
external fun require(module: String): dynamic

fun hello() = "Hello Kotlin World"

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val query: String = req.query.message as String
    val body: String = req.body.message as String
    val message = """
        |Pushed from Github<br>
        |req.query.message: $query<br>
        |req.body.message: $body<br>
    """.trimMargin()

    res.status(200).send(message)
}
