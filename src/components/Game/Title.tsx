import { useState, useEffect } from 'preact/hooks'

type Props = {
  text: string
  reverse: boolean
  visible: boolean
}

const Title: FC<Props> = ({ text, visible, reverse }) => {
  const [animationText, setAnimationText] = useState('')
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    if (animationText === text) return
    if (!visible) return

    const initialText = text
      .split('')
      .map(s => {
        const code = s.charCodeAt(0)
        if (
          (code >= 0x00 && code < 0x81) ||
          code === 0xf8f0 ||
          (code >= 0xff61 && code < 0xffa0) ||
          (code >= 0xf8f1 && code < 0xf8f4)
        )
          return ' '
        else return '　'
      })
      .join('')

    if (index === -1) setAnimationText(initialText)

    if (!animationText) return
    const timer = setInterval(() => {
      let newText = animationText
        .split('')
        .map((c, i) => {
          if (index !== i) return c

          const goal = text.charCodeAt(i)

          let interval = 3

          //ひらがなの場合は少し速くする
          if (c >= 'ぁ') interval = 6

          let newCharCode = c.charCodeAt(0) + interval

          // 通り過ぎた場合も止まる
          if (newCharCode > goal && newCharCode <= goal + interval)
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
      if (index === -1 || text[index] === newText[index]) {
        const newIndex = index + 1
        if (newIndex !== text.length) {
          setIndex(index + 1)
          const newGoal = text[newIndex]

          const constructText = (s: string) =>
            (newText.substr(0, newIndex) ?? '') +
            s +
            (newText.substr(newIndex + 1) ?? '')

          if ('a' <= newGoal && newGoal <= 'z') newText = constructText('a')
          else if ('A' <= newGoal && newGoal <= 'Z')
            newText = constructText('A')
          else if ('0' <= newGoal && newGoal <= '9')
            newText = constructText('0')
          else if ('ぁ' <= newGoal && newGoal <= 'ん')
            newText = constructText('ぁ')
          else if ('ァ' <= newGoal && newGoal <= 'ン')
            newText = constructText('ァ')
          else newText = constructText(newGoal)
        }
      }

      setAnimationText(newText)
    }, 10)
    return () => clearInterval(timer)
  }, [text, animationText, visible, index])

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div
      className={
        'text-4xl h-10 md:text-6xl md:h-15 text-mypurple ' +
        (reverse ? 'lg:text-right' : '')
      }>
      {animationText}
    </div>
  )
}

export default Title
