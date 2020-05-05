import React from 'react';

import './style.scss'

class FilterButton extends React.Component {

	render() {
		const { btnText, onClickHandler, btnAttribute, sortedBy } = this.props

		return (<>
			<button className={`filters__item ${sortedBy === btnAttribute ? "is-selected" : ""}`} onClick={() => onClickHandler(btnAttribute)}>
				{btnText}<i className="fas fa-sort-down" />
			</button>
		</>
		);
	}
}

export default FilterButton;
