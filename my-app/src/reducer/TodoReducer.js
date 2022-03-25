const initialValue = {
  list: [],
};

const TodoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.pad1oad;
      return {
        ...state,
        data: [{}],
      };
  }
};

export default TodoReducer;
