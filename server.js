
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;


// Vite 프론트엔드의 요청 허용
app.use(cors({
  origin: [
    "http://localhost:5174",
    "https://arch-front-six.vercel.app"
  ]
}));


// API: 사용자 이름 반환
app.get("/api/user", (req, res) => {
  console.log("사용자 이름 요청을 받았습니다.");

  res.json({
    name: "Jeny"
  });
});

// 서버 실행
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});


// test으로 comment를 넣어봄 ㅎㅎㅎㅎ