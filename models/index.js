const Sequelize = require('sequelize');
const path = require('path'); // path 모듈 가져오기
const fs = require('fs'); // 파일 시스템 가져오기
const User = require('./user'); //  User 모델 불러오기
const env = process.env.NODE_ENV || 'development'; // 현재 환경 설정
const config = require('../config/config')[env]; // 환경 설정 파일 불러오기

const db = {}; // 데이터 베이스 객체 생성
const sequelize = new Sequelize( // 데이터베이스 연결 설정
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize; // Sequelize 인스턴스를 db 객체에 추가

// 자동 연결
const basename = path.basename(__filename); // 현재 파일의 이름 가져오기
fs 
    .readdirSync(__dirname) // 현재 폴더의 모든 파일 조회
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })

    .forEach(file => {
        const model = require(path.join(__dirname, file));
        console.log(file, model.name);
        db[model.name] = model;
        model.initiate(sequelize)
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

module.exports = db;