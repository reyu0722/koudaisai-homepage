import { dummy1, dummy2, dummy3, dummy4 } from '/@/assets/images/carousel'
import { Game } from '/@/components/Game'

const games: Game[] = [
  {
    title: 'traPDispel',
    description: `ブラウザで遊べるオンライン対戦型タワーディフェンスゲーム!
マップの真ん中から進行してくる敵から自分の陣地を守りつつ、他の人を妨害しよう!
最後まで拠点を守り切れた人が勝者だ!!`,
    howToPlay: '',
    imgUrl: "",
    imgUrls: [dummy1, dummy2, dummy3, dummy4],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  },
  {
    title: 'じゃぱりぱーく・おんらいん',
    description: `『けものフレンズ』の二次創作パーティーゲームが遂に登場！！
フレンズになってジャパリパークを駆け巡り、どったんばったん大騒ぎ？！
目的地探しやミッションでポイントを集め、フレンズの頂点を目指せ！！`,
    howToPlay: '',
    imgUrl: "",
    imgUrls: [dummy1, dummy2, dummy3, dummy4],
    blogUrl: '',
    gameUrl: 'https://japari.toki317.dev/'
  },
  {
    title: 'traP Collection',
    description: 'ランチャーだよ',
    howToPlay: '',
    imgUrl: "",
    imgUrls: [],
    blogUrl: '',
    gameUrl: '',
    launcher: true
  }
]

export default games
