import { dummy1, dummy2, dummy3, dummy4 } from '/@/assets/images/carousel'
import dummy from '/@/assets/images/dummy.svg'
import { Game } from '/@/components/Game'

// "World of Games" の下にくる説明文
export const description =
  'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。'

/*
title: タイトル (全角文字についてはフォントを追加する必要あり)
description: 説明 (ページ上に載るやつ)
howToPlay: あそびかた (モーダルに載るやつ)
image: ページ上に載る画像 (ひし形みたいなやつ)
carouselImages: モーダルのカルーセルに載せる画像たち (アスペクト比が同じだとバグりにくい)
blogUrl(optional): モーダルに載るブログのURL
gameUrl: ゲームのURL (ランチャーについてはダウンロードリンク)
launcher(optional): ランチャーだけtrue入れて他は何も書かなくてok
*/

export const games: Game[] = [
  {
    title: 'JumpJumpJump',
    description: `落下したプレイヤーはその場で脱落！
生き残って最後の一人になったらその場で勝利！
葉っぱの上を飛び移って、落ちないように生き残ろう！
落ちてくるフルーツを取って、相手を弾き飛ばすのももちろんOK！`,
    image: dummy,
    carouselImages: [dummy1, dummy2, dummy3, dummy4],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  },
  {
    title: 'TraPDispel',
    description: `ブラウザで遊べるオンライン対戦型タワーディフェンスゲーム!
マップの真ん中から進行してくる敵から自分の陣地を守りつつ、他の人を妨害しよう!
最後まで拠点を守り切れた人が勝者だ!!`,
    image: dummy,
    carouselImages: [dummy1, dummy2, dummy3, dummy4],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  },
  {
    title: 'じゃぱりぱーく・おんらいん',
    description: `『けものフレンズ』の二次創作パーティーゲームが遂に登場！！
フレンズになってジャパリパークを駆け巡り、どったんばったん大騒ぎ？！
目的地探しやミッションでポイントを集め、フレンズの頂点を目指せ！！`,
    image: dummy,
    carouselImages: [dummy1, dummy2, dummy3, dummy4],
    gameUrl: 'https://japari.toki317.dev/'
  },
  {
    title: 'To_America',
    description: `制限時間15分、目標はアメリカ行き飛行機の搭乗。
走行距離に応じて金額がたまることを駆使し、効率よくアメリカ行きチケット代50000円をためろ!`,
    image: dummy,
    carouselImages: [dummy1, dummy2, dummy3, dummy4],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  },
  {
    // ランチャーではモーダルに載せる系の情報は使わない (本来ならちゃんと型を書くべき)
    title: 'traP Collection',
    description: 'ランチャーだよ',
    image: dummy,
    carouselImages: [],
    blogUrl: '',
    gameUrl: 'https://trap.jp/', // ここにダウンロードリンク
    launcher: true
  }
]
