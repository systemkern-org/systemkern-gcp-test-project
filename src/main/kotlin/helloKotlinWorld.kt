external val exports: dynamic
external fun require(module: String): dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val str : String = req.body.message
    val message = """
        |Kotlin Response:                       <br>\n
        |req:               $req                <br>\n
        |req.query:         ${req.query}        <br>\n
        |req.body:          ${req.body}         <br>\n
        |req.body.message:  ${req.body.message} <br>\n
        |kotlin String:     $str                <br>\n
    """.trimMargin()
    res.status(200).send(message)
}


@JsName("processBody")
fun processBody(body: String): Response {
    val tmp  = try {
        JSON.parse<TestBody>(body)
    } catch (e: dynamic) {
        return Response("""
            |body:  $body       <br>\n
            |error: $e          <br>\n
        """.trimMargin())

    }
    return Response(
        """
        |Kotlin Response:   <br>\n
        |data: $body        <br>\n
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
