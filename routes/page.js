const express = require('express'); // express 모듈 불러와서 라우터 객체를 생성
// 각 페이지를 렌더링하는 컨트롤러 함수들을 불러옴
const { renderMain } = require('../controllers/page');

const router = express.Router(); // express 라우터 객체 생성

// 모든 요청에 대해 공총적으로 수행할 작업을 정의하는 미들웨어 추가
router.use((req, res, next) => {
    res.locals.user = null; // 사용자 정보 초기화

    // 플레이어 정보
    res.locals.displayname = 'ldhpop123#KR1'
    res.locals.gamename = 'ldhpop123'
    res.locals.gametag = '#KR1'

    res.locals.level = 180

    res.locals.location = 'KR'

    res.locals.profileicon = '1'

    // 솔랭
    res.locals.solorank = 'unranked'
    res.locals.sololp = 0
    res.locals.solowins = 0
    res.locals.sololoss = 0

    // 자랭
    res.locals.flexrank = 'unranked'
    res.locals.flexlp = 0
    res.locals.flexwins = 0
    res.locals.flexloss = 0
    next();
})

// 루트 경로('/')로 GET 요청이 들어오면 renderMain 컨트롤러를 실행
router.get('/', renderMain)