import CubeImg from '/@/assets/images/cube'
import { useOffsetState } from '/@/store/Offset'

// cubeの挙動を決める関数たち
const getCubeX = (offset: number): number =>
  36 + offset * 33 + offset ** 2 * -25

const getCubeY = (offset: number): number => 20 + offset * 97.5

const getCubeWidth = (offset: number): number => 20 + offset * 50

const getCubeDeg = (offset: number): number => -25 + offset * 40

const Cube: FC = () => {
  const offset = useOffsetState()
  return (
    <CubeImg
      className="absolute fade-in-illust"
      style={`
				width: ${getCubeWidth(offset)}vw;
				left: ${getCubeX(offset)}vw;
				top: ${getCubeY(offset)}vw;
				transform: rotate(${getCubeDeg(offset)}deg);
			`}
    />
  )
}

export default Cube
