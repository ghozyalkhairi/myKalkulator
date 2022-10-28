export const calcReducer = (state, action) => {
  const kalkulasi = () => {
    if (state.operand) {
      switch (state.operator) {
        case "+":
          return (
            Number(state.operand) + Number(`${state.nilai}${action.payload}`)
          )
        case "-":
          return (
            Number(state.operand) - Number(`${state.nilai}${action.payload}`)
          )
        case "x":
          return (
            Number(state.operand) * Number(`${state.nilai}${action.payload}`)
          )
        case "/":
          return (
            Number(state.operand) / Number(`${state.nilai}${action.payload}`)
          )
      }
    }
    return state.nilai ? `${state.nilai}${action.payload}` : action.payload
  }
  switch (action.type) {
    case "ISI_NILAI":
      return {
        ...state,
        nilai: state.nilai ? `${state.nilai}${action.payload}` : action.payload,
        hasil: kalkulasi(),
        isiOperator: false,
        display:
          state.operand || state.nilai
            ? `${state.display}${action.payload}`
            : `${state.nilai}${action.payload}`.substring(1),
      }
    case "ISI_OPERATOR":
      if (state.nilai === state.operand && state.isiOperator) {
        return state
      }
      return {
        ...state,
        nilai: 0,
        isiOperator: true,
        operator: action.payload,
        operand: state.hasil ? state.hasil : state.nilai,
        display: state.isiOperator
          ? `${state.display.slice(0, -2)} ${action.payload} `
          : `${state.display} ${action.payload} `,
      }
    case "CLEAR_NILAI":
      return {
        nilai: 0,
        operator: "",
        operand: null,
        hasil: null,
        display: "",
      }
    default:
      return state
  }
}
