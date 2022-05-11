const selectButtonReducer = (selected = [], action) => {
  const oldSelected = () => {
    if(selected.length === 2){
      if (action.payload.text === "Good") {
        return selected.filter((btn) => btn.text !== "Cheap");
      }
      if (action.payload.text === "Cheap") {
        return selected.filter((btn) => btn.text !== "Good");
      }
      if (action.payload.text === "Fast") {
        return selected.filter((btn) => btn.text !== "Cheap");
      }
    }
    return selected
  }
 
  if(action.type === "SELECTED") {
    return [...oldSelected(),action.payload]
  }
  if(action.type === "NOT_SELECTED"){
    return selected.filter(btn => btn.text !== action.payload.text)
  }
  return selected
}

export default selectButtonReducer