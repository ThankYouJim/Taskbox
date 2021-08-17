const initialState = {
  tasks: [],
  loading: false,
};

export const loadState = () => {
  try {
    const rawState = localStorage.getItem("state");
    return rawState ? JSON.parse(rawState) : initialState;
  } catch (error) {
    console.error(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.error(error);
  }
};
