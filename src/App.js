import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import HierarchyTable from "./components/HierarchyTable";

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <HierarchyTable />
            </div>
        </Provider>
    );
};

export default App;