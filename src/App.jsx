import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dogSlice from "./reducers/dogSlice";

const store = configureStore({
  reducer: {
    dog: dogSlice,
  }
});

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes}  
      </BrowserRouter>
    </Provider>
  );
};