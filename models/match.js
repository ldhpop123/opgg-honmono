const Sequelize = require('sequelize');

class Match extends Sequelize.Model {
    static initiate(sequelize) {
        Match.init({
            matchId: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            }
            
        })
    }
}