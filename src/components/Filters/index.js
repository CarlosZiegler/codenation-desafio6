import React from 'react';

import FindInput from './FindInput'
import FilterButton from './FilterButton'

import './style.scss'

class Filters extends React.Component {

	render() {
		const { sort, sortedBy, handlerOnchange } = this.props
		return (<div className="container" data-testid="filters">
			<section className="filters">
				<FindInput handlerOnchange={handlerOnchange} placeholder="Pesquisar" />
				<FilterButton btnText="Nome" btnAttribute="name" onClickHandler={sort} sortedBy={sortedBy} />
				<FilterButton btnText="País" btnAttribute="country" onClickHandler={sort} sortedBy={sortedBy} />
				<FilterButton btnText="Empresa" btnAttribute="company" onClickHandler={sort} sortedBy={sortedBy} />
				<FilterButton btnText="Departamento" btnAttribute="department" onClickHandler={sort} sortedBy={sortedBy} />
				<FilterButton btnText="Data de admissão" btnAttribute="admissionDate" onClickHandler={sort} sortedBy={sortedBy} />
			</section>
		</div>
		);
	}
}

export default Filters;
