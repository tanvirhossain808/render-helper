const express = require("express")

const app = express()

const port = process.env.PORT || 8080 // Use process.env.PORT if available, otherwise use 8080

app.listen(port, () => {
    console.log("Listening on port " + port)
})
// app.use("/", (req, res) => {
//     res.json({ message: "success" })
// })

import { CronJob } from "cron"

const job = new CronJob(
    "0 */12 * * * *", // Runs every 12 minutes
    function () {
        console.log("You will see this message every 12 minutes")
    },
    null, // onComplete
    true, // start the job immediately
    "America/Los_Angeles" // Timezone
)

job.start()
