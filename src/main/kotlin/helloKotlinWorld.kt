external val exports: dynamic
external fun require(module: String): dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val str : String = req.body.message
    val message = """
        |Kotlin Response:<br>
        |req:               $req<br>
        |req.query:         ${req.query}<br>
        |req.body:          ${req.body}<br>
        |req.body.message:  ${req.body.message}<br>
        |kotlin String:     ${str}<br>
    """.trimMargin()
    res.status(200).send(message)
}


@JsName("processBody")
fun processBody(body: String): Response {
    return Response(
        """
        |Kotlin Response:<br>
        |data: $body
        """.trimMargin()
    )
    /*
    Pushed from Github<br>
    body: [object Object]
    */
}

data class Response(
    val message: String = "",
    val code: Int = 200
)

/*
{
  "message" : "test_message"
}
 */
internal data class TestBody(val message: String)
