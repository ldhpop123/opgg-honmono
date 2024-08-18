const Sequelize = require('sequelize'); // sequelize 모듈

class User extends Sequelize.Model { // User 모델 정의
    static initiate(sequelize) { // 모델을 초기화 하는 정적 메서드, 매개변수: sequelize 인스턴스
        User.initiate({
            displayName: {
                type: Sequelize.STRING(55),
            },
            gameName: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            tagLine: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            gameLevel: {
                type: Sequelize.STRING(10),
                allowNull: false
            },

            // api 관련
            server: {
                type: Sequelize.STRING(3),
                allowNull: false,
            },
            puuid: {
                type: Sequelize.STRING(255),
                allowNull: false, 
            },
            summoner_id: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {}
};

module.exports = User;