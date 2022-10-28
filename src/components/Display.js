import { useContext } from "react"
import CalcContext from "../context/CalContext"

function Display() {
  const { state } = useContext(CalcContext)
  return (
    <div className="p-2 container">
      <div className="bg-primary rounded-lg flex flex-col px-2 text-secondary-content">
        {state.nilai || state.display ? (
          <>
            <h2 className="text-3xl">{state.display}</h2>
            <h2 className="text-2xl opacity-80">{state.hasil}</h2>
          </>
        ) : (
          <>
            <h2 className="text-3xl">0</h2>
            <h2 className="text-2xl opacity-80">0</h2>
          </>
        )}
      </div>
    </div>
  )
}

export default Display
