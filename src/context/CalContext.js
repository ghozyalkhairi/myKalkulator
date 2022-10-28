import { createContext, useReducer } from "react"
import { calcReducer } from "./CalcReducer"

const CalcContext = createContext()

export const CalcProvider = ({ children }) => {
  const initState = {
    nilai: 0,
    operator: "",
    operand: null,
    hasil: null,
    display: "",
    isiOperator: false,
  }

  const [state, dispatch] = useReducer(calcReducer, initState)

  return (
    <CalcContext.Provider value={{ state, dispatch }}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcContext
