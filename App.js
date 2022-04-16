import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Navigation from "./src/navigation/NativeStackNavigator";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
