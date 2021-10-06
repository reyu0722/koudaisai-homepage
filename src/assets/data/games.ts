import { Game } from '/@/components/Game'
import noImage from '/@/assets/images/noimage.jpg'

const games: Game[] = [
  {
    title: 'traPDispel',
    description: `ブラウザで遊べるオンライン対戦型タワーディフェンスゲーム!
マップの真ん中から進行してくる敵から自分の陣地を守りつつ、他の人を妨害しよう!
最後まで拠点を守り切れた人が勝者だ!!`,
    howToPlay: '',
    imgUrl: noImage,
    imgUrls: [noImage, noImage],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  },
  {
    title: 'じゃぱりぱーく・おんらいん',
    description: `『けものフレンズ』の二次創作パーティーゲームが遂に登場！！
フレンズになってジャパリパークを駆け巡り、どったんばったん大騒ぎ？！
目的地探しやミッションでポイントを集め、フレンズの頂点を目指せ！！`,
    howToPlay: '',
    imgUrl: noImage,
    imgUrls: [noImage, noImage],
    blogUrl: '',
    gameUrl: 'https://japari.toki317.dev/'
  },
  {
    title: 'traP Collection',
    description: 'ランチャーだよ',
    howToPlay: '',
    imgUrl: noImage,
    imgUrls: [],
    blogUrl: '',
    gameUrl: '',
    launcher: true
  }
]

export default games
