const io = require("socket.io")(3000, { cors: { origin: "*" } });

const responses = [
  "Hello! This is a streamed response.",
  "This is one of the few responses that are hard coded on the backend",
  "I hope you see this word by word instead of all at once.",
  "Some gibberish",
  "Avasara adi ranga",
  "Enakulla thoongi kittirundha singatha thatti ezhupitinga.",
].map((item) => {
  const segments = item.split(" ");
  return segments.map(
    (segment, index) => `${segment}${index !== segments.length - 1 ? " " : ""}`
  );
});
let id = 0;

io.on("connection", (socket) => {
  socket.on("message", (info) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
		streamResponse(socket, id, response)
		id++;
  });
});

const streamResponse = (socket, id, response) =>{
	response.forEach((responseSegment, index) => {
    setTimeout(() => {
      socket.emit("response", {
        id,
        content: responseSegment,
      });
    }, index * 200);
  });
}