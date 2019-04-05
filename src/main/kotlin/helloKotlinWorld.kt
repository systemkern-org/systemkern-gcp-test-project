external val exports: dynamic
external fun require(module: String): dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val message = """
        |Kotlin Response:<br>
        |req:               $req<br>
        |req.query:         ${req.query}<br>
        |req.body:          ${req.body}<br>
        |req.body:          ${req.body.message}<br>
    """.trimMargin()
    res.status(200).send(message)
}


@JsName("processBody")
fun processBody(body: String): Response {
    val data: TestBody? = try {
        JSON.parse<TestBody>(body)
    } catch (e: dynamic) {
        return Response(
            """
        |Kotlin Response:<br>
        |error: $e
        """.trimMargin()
        )
    }
    return Response(
        """
        |Kotlin Response:<br>
        |data: $data
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
