const peopleList = require('./controllers/peopleListController');

module.exports = app => {
    app.get('/api/peopleList', peopleList.getList)
    app.post('/api/peopleList/post', peopleList.postToList)
}