const Background: FC = () => {
  return (
		<picture>
			<source type="image/avif" srcSet="/@/assets/background/bg-w1920.avif" />
      <source type="image/webp" srcSet="/@/assets/background/bg-w1920.webp" />
      <img
        src="/@/assets/background/bg-w1920.jpg"
        className="absolute top-0 z-0 w-full bgimage"
      />
    </picture>
  )
}

export default Background
