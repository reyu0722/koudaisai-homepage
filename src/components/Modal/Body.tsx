import noImage from '/@/assets/images/noimage.jpg'

const Body: FC = () => {
  return (
    <div className="fixed m-auto p-20 inset-0 bg-blue-50 z-30 max-w-[80vw] max-h-[80vh] text-black">
      <div className="text-4xl font-bold">あそびかた</div>
      <div className="flex mt-12 flex-between gap-12">
        <div className="w-full">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </div>
        <div className="w-full">
          {/* 画像スライダーになる */}
          <img src={noImage} />
          <div className="mt-12 h-12 outline-blue-200">ボタン置くところ</div>
        </div>
      </div>
    </div>
  )
}

export default Body
