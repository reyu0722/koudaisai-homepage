import { useState, useEffect } from 'preact/hooks'

type Props = {
  text: string
  reverse: boolean
  visible: boolean
}

const Title: FC<Props> = ({ text, visible }) => {
  const [animationText, setAnimationText] = useState('')

  useEffect(() => {
    if (animationText === text) return
    if (!visible) return
    const timer = setInterval(() => {
      let pushNewChar = true
      let newText = animationText
        .split('')
        .map((c, i) => {
          if (c === text[i]) return c

          pushNewChar = false
          const goal = text.charCodeAt(i)

          let interval = 2

          //ひらがなの場合は少し速くする
          if (c >= 'ぁ') interval = 6

          let newCharCode = c.charCodeAt(0) + interval

          // 通り過ぎた場合も止まる
          if (newCharCode > goal && newCharCode < goal + interval)
            newCharCode = text.charCodeAt(i)

          let res = String.fromCharCode(newCharCode)

          // zの次はa
          if (c <= 'z' && res > 'z') res = 'a'
          // Zの次はA
          else if (c <= 'Z' && res > 'Z') res = 'A'
          // 9の次は0
          else if (c <= '9' && res > '9') res = '0'
          // んの次はぁ
          else if (c <= 'ん' && res > 'ん') res = 'ぁ'
          // ンの次はァ
          else if (c <= 'ン' && res > 'ン') res = 'ァ'

          return res
        })
        .join('')

      // ランダムのほうがいいような気もする
      if (pushNewChar) {
        const newGoal = text[animationText.length]

        if ('a' <= newGoal && newGoal <= 'z') newText += 'a'
        else if ('A' <= newGoal && newGoal <= 'Z') newText += 'A'
        else if ('0' <= newGoal && newGoal <= '9') newText += '0'
        else if ('ぁ' <= newGoal && newGoal <= 'ん') newText += 'ぁ'
        else if ('ァ' <= newGoal && newGoal <= 'ン') newText += 'ァ'
        else newText += newGoal
      }

      setAnimationText(newText)
    }, 0)
    return () => clearInterval(timer)
  }, [text, animationText, visible])

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="text-4xl md:text-6xl text-mypurple">{animationText}</div>
  )
}

export default Title
