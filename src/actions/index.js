export const check = btnText => {
  return {
    type : "SELECTED",
    payload: {
      text: btnText,
      checked: true
    }
  }
}
export const uncheck = btnText => {
  return {
    type : "NOT_SELECTED",
    payload: {
      text: btnText,
      checked: false
    }
  }
}