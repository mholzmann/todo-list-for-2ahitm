import express from "express";
import { taskRouter } from "./task-router";

const app = express();

app.use(express.json());
app.use("/", taskRouter);

app.get("/", function(request, response) {
    response.send("This is the todo-list backend.");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});