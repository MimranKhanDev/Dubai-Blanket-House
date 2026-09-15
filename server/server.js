// server/server.js
import app from "./app.js";
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`);
  // console.log(
  //   `📡 CORS Client URL configured for: ${process.env.CLIENT_URL || "http://localhost:5173"}`,
  // );
});
