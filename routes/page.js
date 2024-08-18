const express = require('express'); // express 모듈 불러와서 라우터 객체를 생성
// 각 페이지를 렌더링하는 컨트롤러 함수들을 불러옴
const { renderMain } = require('../controllers/page');

const router = express.Router(); // express 라우터 객체 생성

// 모든 요청에 대해 공총적으로 수행할 작업을 정의하는 미들웨어 추가
router.use((req, res, next) => {
    res.locals.user = null; // 사용자 정보 초기화

    // 플레이어 정보
    res.locals.displayname = 'ldhpop123#KR1'
    res.locals.userName = 'ldhpop123'
    res.locals.userTag = '#KR1'

    res.locals.userLevel = 180

    res.locals.location = 'KR'

    res.locals.profileIcon = '1'

    // 솔랭
    res.locals.soloRank = 'Unranked'
    res.locals.soloLp = 0
    res.locals.soloWins = 0
    res.locals.soloLoss = 0

    // 자랭
    res.locals.flexRank = 'Unranked'
    res.locals.flexLp = 0
    res.locals.flexWins = 0
    res.locals.flexLoss = 0
    next();
})

// 루트 경로('/')로 GET 요청이 들어오면 renderMain 컨트롤러를 실행
router.get('/', renderMain)

module.exports = router; // 라우터 객체를 모듈로 내보냄