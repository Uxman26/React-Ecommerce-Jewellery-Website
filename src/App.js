import './App.css';
import User from './UserComponents/User'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <User/>
    </div>
    </Provider>
  );
}

export default App;
