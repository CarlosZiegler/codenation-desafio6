import React from 'react';

import './style.scss'

class FindInput extends React.Component {

	render() {
		const { placeholder, handlerOnchange } = this.props
		return (
			<div className="filters__search">
				<input type="text" className="filters__search__input" onChange={handlerOnchange} placeholder={placeholder} />
				<button className="filters__search__icon" >
					<i className="fa fa-search" />
				</button>
			</div>
		);
	}
}

export default FindInput;
