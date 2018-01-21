const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces');
const pg = require('pg');

const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/api', (req, res) => {
    res.json([{
      id: 1,
      username: 'samsepi0l',
    }, {
      id: 2,
      username: 'D0loresH4ze',
    }]);
  })
  .get('/cool', (req, res) => res.send(cool()))
  .get('/db', (req, res) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      client.query('SELECT * FROM test_table', (err, result) => {
        done();
        if (err) { console.error(err); res.send(`Error ${err}`); } else { res.render('pages/db', { results: result.rows }); }
      });
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
