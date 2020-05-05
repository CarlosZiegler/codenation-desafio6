import React from "react"
import Lottie from 'react-lottie';


import Contact from '../Contact'

import loadingData from '../../assets/img/loading.json'

import './style.scss'

class Contacts extends React.Component {

	render() {

		const { tableHeader, isloading, contactList } = this.props

		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: loadingData,

		};

		return (<div className="container" data-testid="contacts">
			<section id="contact" className="contacts">
				<Contact tableHeader={tableHeader} />
				{isloading &&
					<div className="loading">
						<Lottie className="lottieFile" options={defaultOptions}
							height={"100%"}
							width={"100%"}
						/>
					</div>}
				{contactList?.map(contact =>
					<Contact data={contact} key={contact.id} isHeader={false} />)}
			</section>


		</div>)
	}
}

export default Contacts
