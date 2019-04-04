external val exports: dynamic
external fun require(module: String): dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val message = """
        |Pushed from Github<br>
        |req:               $req<br>
        |req.query:         ${req.query}<br>
        |req.body:          ${req.body}<br>
    """.trimMargin()
    //|req.body.message:  ${req.body.message}<br>
    //|req.query.message: ${req.query.message}<br>

    res.status(200).send(message)
}

@JsName("processBody")
fun processBody(body: dynamic): Response {
    return Response(200,
        """
        |Pushed from Github<br>
        |body: ${body}
        """.trimMargin()
    )
}

data class Response(
    val code: Int = 0,
    val message: String = ""
)
