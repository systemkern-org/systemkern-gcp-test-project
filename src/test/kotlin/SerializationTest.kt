import kotlin.test.Test
import kotlin.test.assertTrue

internal class SerializationTest {
    @Test fun CanDoSerialization() {
        with(JSON.parse<TestBody>(
            """
            |{
            |  "message" : "test_message"
            |}
            """.trimMargin()
        )) {
            assertTrue { this.message == "test_message" }
        }
    }
}

