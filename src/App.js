import './App.css';
import Product from './components/Product';
import  { Provider } from 'react-redux';
import store, { APPLIANCE_STATE, ELECTRONIC_STATE } from './redux/store';
import CommentsContainer from './components/CommentsContainer';

function App() {
	return (
		<Provider store={ store }>
			<div className="App container py-4">
				<Product stateName= { ELECTRONIC_STATE } name={ "phone" } />
				<Product stateName= { ELECTRONIC_STATE } name={ "tablet" } />
				<Product stateName= { ELECTRONIC_STATE } name={ "tv" } />
				<Product stateName= { APPLIANCE_STATE } name={ "cooler" } />
				<CommentsContainer />
			</div>
		</Provider>
	);
}

export default App;
