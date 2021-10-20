import CubeImg from '/@/assets/images/cube'
import { useOffsetState } from '/@/store/Offset'

// cubeの挙動を決める関数たち
const getCubeX = (offset: number): number =>
  36.5 + offset * 32.5 + offset ** 2 * -25

const getCubeY = (offset: number): number => 20 + offset * 96.7

const getCubeWidth = (offset: number): number => 20 + offset * 51

const getCubeDeg = (offset: number): number => -25 + offset * 38

const CHANGE_OFFSET = 0.65

const Cube: FC = () => {
  const offset = Math.min(useOffsetState(), CHANGE_OFFSET)
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
