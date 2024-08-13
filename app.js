const express = require('express'); // express 모듈불러오기 app 객체 생성
const cookieParser = require('cookie-parser'); // 쿠키를 파싱하기 위한 미들웨어
const morgan = require('morgan'); // HTTP 요청 로깅을 위한 미들웨어
const path = require('path'); // 파일 및 디렉토리 경로를 다루기 위한 path 모듈
const session = require('express-session'); // 세션 관리를 위한 미들웨어
const nunjucks = require('nunjucks'); // 템플릿 엔진: nunjucks
const dotenv = require('dotenv'); // 환경 변수 관리
