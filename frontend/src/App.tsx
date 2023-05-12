import { StoreProvider } from "easy-peasy";
import React, { FC } from "react";
import { store } from "./Stores";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routeConstants";

const App: FC = () => {
    return (
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    );
};

export default App;
