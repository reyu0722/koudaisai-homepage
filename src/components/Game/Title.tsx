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
    if (animationText == text) return
    const timer = setInterval(() => {
      let pushNewChar = true
      let newText = animationText
        .split('')
        .map((c, i) => {
          if (c == text[i]) return c

          pushNewChar = false
          let newCharCode = c.charCodeAt(0) + INTERVAL
          const goal = text.charCodeAt(i)

          // 通り過ぎた場合も止まる
          if (newCharCode > goal && newCharCode < goal + INTERVAL)
            newCharCode = text.charCodeAt(i)

          // zの次はA
          if (c > 'z') newCharCode = 'A'.charCodeAt(0)
          // Zの次はa
          if (c > 'Z' && c < 'a') newCharCode = 'a'.charCodeAt(0)

          return String.fromCharCode(newCharCode)
        })
        .join('')

      // ランダムのほうがいいような気もする
      if (pushNewChar) newText += 'a'

      setAnimationText(newText)
    }, 0)
    return () => clearInterval(timer)
  }, [text, animationText])

  return <div className="text-6xl text-mypurple">{animationText}</div>
}

export default Title
