import React from 'react';
import ShoppingList from './shoppingList.jsx';

export default class ShoppingListPage extends React.Component {
	render() {
		return <div className="shopping-list-page">
			<h1>Shopping list</h1>
			<ShoppingList/>
		</div>
	}
}