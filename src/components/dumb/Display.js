import { useCalc } from "../../CalcContext"

function Display() {

  const { val } = useCalc()

  return (
    <div className="display">
        <p>{val}</p>
    </div>
  );
}

export default Display;
