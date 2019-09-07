const mock_swiper = require('./mock/swiper.json');
const mock_swiperArchive = require('./mock/swiperArchive.json');
const mock_archive = require('./mock/archive.json');
const mock_articleCate1 = require('./mock/articleCate1.json');
const mock_articleCate2 = require('./mock/articleCate2.json');
const mock_articleCate3 = require('./mock/articleCate3.json');
const mock_articleCate4 = require('./mock/articleCate4.json');
const mock_articleCate5 = require('./mock/articleCate4.json');
const mock_attenditems = require('./mock/attenditems.json');
const mock_categoryitems = require('./mock/categoryitems.json');
const mock_detail = require('./mock/detail.json');
const mock_event = require('./mock/event.json');
const mock_message = require('./mock/message.json');
const mock_timeline = require('./mock/timeline.json');

module.exports = {
  devServer: {
    port: 8888,
    before(app) {
      app.get('/swiper', (req, res, next) => {
        res.json(mock_swiper)
      })
      app.get('/swiperArchive', (req, res, next) => {
        res.json(mock_swiperArchive)
      })
      app.get('/archive', (req, res, next) => {
        res.json(mock_archive)
      })
      app.get('/articleCate1', (req, res, next) => {
        res.json(mock_articleCate1)
      })
      app.get('/articleCate2', (req, res, next) => {
        res.json(mock_articleCate2)
      })
      app.get('/articleCate3', (req, res, next) => {
        res.json(mock_articleCate3)
      })
      app.get('/articleCate4', (req, res, next) => {
        res.json(mock_articleCate4)
      })
      app.get('/articleCate5', (req, res, next) => {
        res.json(mock_articleCate5)
      })
      app.get('/event', (req, res, next) => {
        res.json(mock_event)
      })
      app.get('/timeline', (req, res, next) => {
        res.json(mock_timeline)
      })
      app.get('/categoryitems', (req, res, next) => {
        res.json(mock_categoryitems)
      })
      app.get('/attenditems', (req, res, next) => {
        res.json(mock_attenditems)
      })
      app.get('/detail', (req, res, next) => {
        res.json(mock_detail)
      })
      app.get('/message', (req, res, next) => {
        res.json(mock_message)
      })

      app.get('/user', (req, res) => {
        var users = [
          {
            id: 1,
            phone: 123456789,
            name: '管理员',
            description: "什么都没有留下",
            "thumbnail": "/static/images/head2.jpg",
            "socialize": {
              "follow": 8888,
              "fans": 88888,
              "friends": 888
            }
          },
          {
            id: 2,
            phone: 987654321,
            name: '游客',
            description: "留下了一堆东西",
            "thumbnail": "/static/images/head3.jpg",
            "socialize": {
              "follow": 333,
              "fans": 33333,
              "friends": 33
            }
          }
        ]
        var ret = null
        users.forEach((user) => {
          if (req.query.phone == user.phone) ret = user
        })
        res.json(ret)
      })
    }
  }
}