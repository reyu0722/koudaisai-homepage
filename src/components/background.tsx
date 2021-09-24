const Background: FC = () => {
  return (
		<picture>
			<source type="image/avif" srcSet="/src/assets/background/bg-w1920.avif" />
      <source type="image/webp" srcSet="/src/assets/background/bg-w1920.webp" />
      <img
        src="/src/assets/background/bg-w1920.jpg"
        className="absolute top-0 z-0 w-full bgimage"
      />
    </picture>
  )
}

export default Background
