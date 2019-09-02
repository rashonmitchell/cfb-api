const controllerConstructor = require('./stats.controller');

module.exports = (app, db, cors) => {
    const controller = controllerConstructor(db);

    app.route('/stats/season').get(cors, controller.getTeamStats);
}