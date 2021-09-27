import noImage from '/@/assets/images/noimage.jpg'

const Body: FC = () => {
  return (
    <div className="fixed m-auto p-20 inset-0 bg-blue-50 z-30 max-w-[80vw] max-h-[80vh] text-black">
      <div className="text-3xl">あそびかた</div>
      <div className="flex mt-12 flex-between gap-12">
        <div className="w-1/2">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </div>
        <div className="w-1/2">
          <img src={noImage} />
        </div>
      </div>
    </div>
  )
}

export default Body
