import './App.css';
import Product from './components/Product';

function App() {
	return (
		<div className="App">
			<Product name={ "Phone" } />
			<Product name={ "Tablet" } />
			<Product name={ "Tv" } />
			<Product name={ "Cooler" } />
		</div>
	);
}

export default App;
