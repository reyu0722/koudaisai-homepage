import CubeImg from '/@/assets/images/cube'

// cubeの挙動を決める関数たち
const getCubeX = (offset: number): number =>
  36 + offset * offset * -25 + offset * 40

const getCubeY = (offset: number): number => 20 + offset * 100

const getCubeWidth = (offset: number): number => 20 + offset * 40

const getCubeDeg = (offset: number): number => -25 + offset * 40

type Props = {
  offset: number
}

const Cube: FC<Props> = ({ offset }) => {
  return (
    <CubeImg
      className="absolute overflow-x-hidden fade-in-illust"
      style={`
				width: ${getCubeWidth(offset)}rem;
				left: ${getCubeX(offset)}rem;
				top: ${getCubeY(offset)}rem;
				transform: scale(1) rotate(${getCubeDeg(offset)}deg);
			`}
    />
  )
}

export default Cube
