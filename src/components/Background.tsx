import bg_avif from '/@/assets/background/bg-w1920.avif'
import bg_webp from '/@/assets/background/bg-w1920.webp'
import bg_jpg from '/@/assets/background/bg-w1920.jpg'

const Background: FC = () => {
  return (
    <picture>
      <source type="image/avif" srcSet={bg_avif} />
      <source type="image/webp" srcSet={bg_webp} />
      <img
        src={bg_jpg}
        className="absolute top-0 z-0 w-full bgimage"
      />
    </picture>
  )
}

export default Background
