import { useContext } from "react"
import CalcContext from "../context/CalContext"

function Button({ nilai }) {
  const { dispatch } = useContext(CalcContext)
  const klikTombol = () => {
    isNaN(nilai)
      ? dispatch({
          type: nilai === "C" ? "CLEAR_NILAI" : "ISI_OPERATOR",
          payload: nilai,
        })
      : dispatch({ type: "ISI_NILAI", payload: nilai })
  }
  return (
    <button
      onClick={() => klikTombol()}
      className="btn btn-lg text-2xl hover:bg-accent active:bg-accent-focus"
    >
      {nilai}
    </button>
  )
}

export default Button
