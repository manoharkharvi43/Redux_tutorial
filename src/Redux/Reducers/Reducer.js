const initialstate = [

];
  
  const reducer = (state = initialstate, action) => {
    switch (action.type) {
      case "ALL_USER":
        return [
            ...state,
            action.payload
        ];  
      case "ERROR":
        return {
          ...state,
          users: action.payload,
        };

    }
  };
  
  export default reducer;
  