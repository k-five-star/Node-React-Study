module.exports = {
    mongoURI : process.env.MONGO_URI 
} 
// 배포환경에서는 배포시 환경변수에 URI를 입력하도록 한다. 그리고 mongoURI로 간접적으로 export하기!!