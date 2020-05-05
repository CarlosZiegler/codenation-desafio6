import React from 'react';

import api from './service/api'
import sortData from './utils/sortData'

import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

import './App.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tableLabels: [
        "Nome",
        "Telefone",
        "País",
        "Admissão",
        "Empresa",
        "Departamento",
      ],
      contacts: [],
      showContacts: [],
      isloading: true,
      filter: '',
      sort: '',
    }
  }

  async componentDidMount() {
    setTimeout(async () => {
      const response = await api('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      this.setState({ contacts: response, showContacts: response, isloading: false });

    }, 1000)
  }

  handlerSort = (filter) => {
    this.setState({ showContacts: this.state.showContacts.sort(sortData(filter)), sort: filter })
  }

  handlerSearchOnChange = async (event) => {
    this.setState({
      showContacts: this.state.contacts.filter((contact) => (contact.name.toLowerCase().includes(event.target.value.toLowerCase())))
    })

  }

  render() {

    return (
      <React.Fragment>
        <Topbar />
        <Filters handlerOnchange={this.handlerSearchOnChange} sort={this.handlerSort} sortedBy={this.state.sort} />
        <Contacts
          tableHeader={this.state.tableLabels}
          contactList={this.state.showContacts}
          isloading={this.state.isloading}
        />
      </React.Fragment>
    )
  }
}

export default App;
