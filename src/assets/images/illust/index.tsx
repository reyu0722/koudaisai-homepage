import webp from './img.webp'

type Props = {
  className?: string
}

const Illust: FC<Props> = ({ className }) => {
  return (
    <>
      <img width="1920" height="2718" src={webp} className={className} />
    </>
  )
}

export const PrefetchIllust: FC = () => {
  return <link rel="prefetch" href={webp} as="image" type="image/webp" />
}

export default Illust
