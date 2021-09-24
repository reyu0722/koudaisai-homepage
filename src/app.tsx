export function App(): JSX.Element {
  return (
    <>
      <div className="relative z-1">
        <p>Hello Vite + Preact!</p>
        <p>
          <a
            href="https://preactjs.com/"
            target="_blank"
            rel="noopener noreferrer">
            Learn Preact
          </a>
        </p>
        {/* テスト用 */}
        <div className="py-400"> </div>
      </div>
      <img
        src="/src/assets/background/bg-w1920.webp"
        className="absolute top-0 z-0 w-full"
      />
    </>
  )
}
