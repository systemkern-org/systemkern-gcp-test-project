external val exports: dynamic
external fun require(module: String): dynamic
external val console: dynamic

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val str: String = req.body.message
    val message = """\n
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
fun processBody(body: dynamic): Response {
    val data = try {
        try {
            console.log("Trying to parse $body as Json String")
            JSON.parse<TestBody>(JSON.stringify(body))
        } catch (e: dynamic) {
            console.log("Trying use $body as JS Object")
            TestBody(
                message = body.message as String
            )
        }
    } catch (e: dynamic) {
        console.log("Using body: $body in any known way failed")
        return Response("""\n
            |body:          $body           <br>\n
            |body.message:  ${body.message} <br>\n
            |error:         $e              <br>\n
        """.trimMargin())

    }
    return Response(
        """\n
        |Kotlin Response:   <br>\n
        |data: $data        <br>\n
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
