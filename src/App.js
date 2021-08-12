import './App.css';
import Product from './components/Product';
import  { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={ store }>
			<div className="App">
				<Product name={ "Phone" } />
				<Product name={ "Tablet" } />
				<Product name={ "Tv" } />
				<Product name={ "Cooler" } />
			</div>
		</Provider>
	);
}

export default App;
