import Express from 'express';
import path from 'path';
import cool from 'cool-ascii-faces';
import history from 'connect-history-api-fallback';

const PORT = process.env.PORT || 5000;

const app = new Express();

const staticFileMiddleware = Express.static(path.join(__dirname, '../frontend/build'),);
app
  .use(staticFileMiddleware)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/default', (req, res) => res.render('pages/index'))
  .get('/api', (req, res) => {
    res.json([
      {
        title: 'First',
        content: 'My first blog',
      },
      {
        title: 'Second',
        content: 'My Second blog',
      },
      {
        title: 'Third',
        content: 'My Third blog',
      },
    ]);
  })
  .get('/cool', (req, res) => res.send(cool()))
  .use('/', history({ verbose: true }))
  .use(staticFileMiddleware)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
