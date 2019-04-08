external fun require(module: String): dynamic
/*
Local Node JS Application

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
*/

/* Google Cloud Functions */

external val exports: dynamic
external val console: dynamic

fun main() {
    println("Kotlin Main function was called")
    //endpoint this has to be correlated with cloudbuild.yml
    exports.procRequest = { req: dynamic, res: dynamic ->
        processRequest(req, res)
    }
    exports.procBody = { req: dynamic, res: dynamic ->
        val response = processBody(req.body);
        res.status(200).send(
            """<hr>Kotlin Response:
                ${response.message}
            """.trimIndent()
        )
    }
    println("Kotlin Main function finished")
}

@JsName("processRequest")
fun processRequest(req: dynamic, res: dynamic) {
    val str: String = req.body.message
    val message = """\n
        |Kotlin Response:
        |req:               $req
        |req.query:         ${req.query}
        |req.body:          ${req.body}
        |req.body string:   ${JSON.stringify(req.body)}
        |req.body.message:  ${req.body.message}
        |Kotlin String:     $str
    """.trimMargin()
    res.status(200).send(message)
}


@JsName("processBody")
fun processBody(body: dynamic): Response {
    val data = try {
        try {
            console.log("Trying to parse body: $body as Json String")
            JSON.stringify(body)
                .also { console.log("Stringified body to $it") }
                .let { JSON.parse<TestBody>(it) }
                .also { console.log("Parsed to $it") }
        } catch (e: dynamic) {
            console.log("Trying use $body as JS Object")
            TestBody(message = body.message as String)
        }
    } catch (e: dynamic) {
        console.log("Using body: $body in any known way failed")
        return Response("""\n
            |body:          $body           <br>\n
            |body.message:  ${body.message} <br>\n
            |error:         $e              <br>\n
        """.trimMargin())
    }

    console.log("body: $body parsed to kotlin $data")

    return Response(
        """\n
        |Kotlin Response:
        |body:    ${JSON.stringify(body)}
        |data:    $data
        |message: ${data.message}
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
