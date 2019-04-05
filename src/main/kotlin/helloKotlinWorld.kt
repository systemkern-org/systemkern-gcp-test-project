external val exports: dynamic
external fun require(module: String): dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val message = """
        |Kotlin Response:<br>
        |req:               $req<br>
        |req.query:         ${req.query}<br>
        |req.body:          ${req.body}<br>
    """.trimMargin()
    res.status(200).send(message)
}


@JsName("processBody")
fun processBody(body: String): Response {
    val data: TestBody? = try {
        JSON.parse<TestBody>(body)
    } catch (e: Exception) {
        null
    }
    return Response(200,
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
    val code: Int = 0,
    val message: String = ""
)

/*
{
  "message" : "test_message"
}
 */
internal data class TestBody(val message: String)
