import { useState, useEffect } from 'preact/hooks'

type Props = {
  text: string
}

// アニメーションでの文字の間隔
// 1だと遅い気がする
const INTERVAL = 3

// 現状アルファベットにのみ対応
// 他もやろうと思えばできる
const Title: FC<Props> = ({ text }) => {
  const [animationText, setAnimationText] = useState('')

  useEffect(() => {
    if (animationText != text) {
      const timer = setInterval(() => {
        let pushNewChar = true
        let newText = animationText
          .split('')
          .map((c, i) => {
            if (c != text[i]) {
              pushNewChar = false
              let newCharCode = c.charCodeAt(0) + INTERVAL

              // 通り過ぎた場合は途中で止まる
              if (
                newCharCode > text.charCodeAt(i) &&
                newCharCode < text.charCodeAt(i) + INTERVAL
              ) {
                newCharCode = text.charCodeAt(i)
              }

              // zの次はA
              if (newCharCode > 'z'.charCodeAt(0)) {
                newCharCode = 'A'.charCodeAt(0)
              }
              // Zの次はa
              else if (
                newCharCode > 'Z'.charCodeAt(0) &&
                newCharCode < 'a'.charCodeAt(0)
              ) {
                newCharCode = 'a'.charCodeAt(0)
              }
              return String.fromCharCode(newCharCode)
            } else {
              return c
            }
          })
          .join('')
        if (pushNewChar) {
          // ランダムのほうがいいような気もする
          newText += 'a'
        }
        setAnimationText(newText)
      }, 0)
      return () => clearInterval(timer)
    }
  })

  return <div className="text-6xl text-mypurple">{animationText}</div>
}

export default Title
