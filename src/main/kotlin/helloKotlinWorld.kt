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
    res.status(200).send(message)

    /*
    Pushed from Github<br>
    req:               [object Object]<br>
    req.query:         [object Object]<br>
    req.body:          [object Object]<br>
    */
}


@JsName("processBody")
fun processBody(body: dynamic): Response {
    return Response(200,
        """
        |Pushed from Github<br>
        |body: ${body.unsafeCast<String>()}
        """.trimMargin()
    )
}

data class Response(
    val code: Int = 0,
    val message: String = ""
)
