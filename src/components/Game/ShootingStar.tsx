import './star.css'

// 参考: https://qiita.com/Ushinji/items/b2641f0e458dacd609a6
const ShootingStar: FC = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full mt-[40%] ml-[80%] transform rotate-z-60">
        <div className="h-0 w-2 z-5 star"></div>
      </div>
    </div>
  )
}

export default ShootingStar
