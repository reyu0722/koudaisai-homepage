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
    title: 'traPDispel',
    description: `ブラウザで遊べるオンライン対戦型タワーディフェンスゲーム!
マップの真ん中から進行してくる敵から自分の陣地を守りつつ、他の人を妨害しよう!
最後まで拠点を守り切れた人が勝者だ!!`,
    howToPlay:
      'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
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
    howToPlay:
      'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    image: dummy,
    carouselImages: [dummy1, dummy2, dummy3, dummy4],
    gameUrl: 'https://japari.toki317.dev/'
  },
  {
    // ランチャーではモーダルに載せる系の情報は使わない (本来ならちゃんと型を書くべき)
    title: 'traP Collection',
    description: 'ランチャーだよ',
    howToPlay: '',
    image: dummy,
    carouselImages: [],
    blogUrl: '',
    gameUrl: 'https://trap.jp/', // ここにダウンロードリンク
    launcher: true
  }
]
