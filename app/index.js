import Express from 'express';
import path from 'path';
import cool from 'cool-ascii-faces';
import history from 'connect-history-api-fallback';

const PORT = process.env.PORT || 5000;

const app = new Express();

const staticFileMiddleware = Express.static(
  path.join(__dirname, '../frontend/build')
);

app
  .use(staticFileMiddleware)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/default', (req, res) => res.render('pages/index'))
  .get('/api', (req, res) => {
    res.json([
      {
        id: 2,
        number: 122,
        title: 'Movies makes life much longer and better',
        author: 'Coaoc',
        content:
          "A fellow **will** remember a lot of things you wouldn't think he'd remember.You take me. One day, back in 1896, I was crossing over to Jersey on the ferry, and as we pulled out, there was a girl waiting to get off.A white dresss she had on.She was carrying a white parasol.I only saw her for one second.She didn't see me at all,but I'll bet a month hasn't gone by since,that I haven't thought of that girl."
      },
      {
        id: 1,
        number: 123,
        title: '牯岭街少年杀人事件',
        author: '杨德昌',
        content:
          '我在台南，无聊得要命，每天可以看几本武侠小说。后来我叫他们去帮我租最厚的小说来看。其实以前的人，跟我们现在出来混的人真的很像。有一个老包，大家都以为他吃错药，我记得，好像全城的人都跷头了，而且到处都被放火。他一个人要去堵拿破仑，后来还是被条子抓到了。‘战争与和平’，其它的武侠书名都不记得了，我只记得这一本。'
      },
      {
        id: 3,
        number: 133,
        title: 'Third',
        author: 'Citizenships',
        content:
          '他说“我对生活的全部要求不外乎几本书、几场梦和几个女人”他沉思着喃喃自语，同时带着最最温柔、最最阴险的微笑望着我“喜欢我的笑容吗？”他问，接着又厌恶地说“老天，我若能找到一个可以这样朝着她笑的阔女人该有多么好！”'
      }
    ]);
  })
  .get('/cool', (req, res) => res.send(cool()))
  .use('/', history({ verbose: true }))
  .use(staticFileMiddleware)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
