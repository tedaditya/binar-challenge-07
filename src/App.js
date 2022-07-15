import 'antd/dist/antd.css';
import './App.css';
import RouteIndex from "./app/routing/RouteIndex";
import {Provider} from "react-redux";
import store from "./setup/redux/Store";

function App() {
  return (
      <Provider store={store}>
        <RouteIndex />
      </Provider>
  );
}

export default App;
