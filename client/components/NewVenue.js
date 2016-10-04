import React from 'react'
import { browserHistory } from 'react-router'
import constants from './constants'

const api_rul = constants.API.API_URL;
const token = constants.AUTH.token;

const NewVenue = React.createClass({
  getInitialState: function() {
    return {name: '', address: '', city: '', country: '', phonenumber: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleAddressChange: function(e) {
    this.setState({address: e.target.value});
  },
  // handleSateChange: function(e) {
  //   this.setState({state: e.target.value});
  // },
  handleCityChange: function(e) {
    this.setState({city: e.target.value});
  },
  handleCountryChange: function(e) {
    this.setState({country: e.target.value});
  },
  handlePhonenumberChange: function(e) {
    this.setState({phonenumber: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log("Dio clic en el guardar")
    const name = this.state.name.trim();
    const address = this.state.address.trim();
    const city = this.state.city.trim();
    const country = this.state.country.trim();
    const phonenumber = this.state.phonenumber.trim();

    if (!name || !address) {
      console.log("Nunca entra por aqui =========");
      return;
    }
    console.log(`Nomabre ${name}, Dirección ${address}, Ciudad ${city}, País ${country} y Teléfono ${phonenumber}`);
    $.ajax({
      url: api_rul + 'venues/create',
      dataType: 'json',
      type: 'POST',
      cache: false,
      data: { name: name, address: address, city: city, country: country, phonenumber: phonenumber },
      headers: { 'Authorization': token },
      success: function(data) {
        this.setState({token: data.access_token});
        browserHistory.push('/venues');
      }.bind(this),
      error: function(xhr, status, err) {
        browserHistory.push('/new-venue');
        console.error(api_rul + 'venues/create', status, err.toString());
      }.bind(this)
    });

  },
  render() {
    return (
      <div className='row'>
        <form className="adminLoginForm form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Creación de vehículos</legend>
  
            <div className="form-group">
              <label htmlFor="inputName" className="col-lg-2 control-label">Nombre</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputName" placeholder="Nombre" value={this.state.name} onChange={this.handleNameChange} />
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="inputAddress" className="col-lg-2 control-label">Dirección</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" value={this.state.address} onChange={this.handleAddressChange} />
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="inputCountry" className="col-lg-2 control-label">País</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputCountry" placeholder="País" value={this.state.country} onChange={this.handleCountryChange} />
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="inputCity" className="col-lg-2 control-label">Ciudad</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputCity" placeholder="Ciudad" value={this.state.city} onChange={this.handleCityChange} />
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="inputPhonenumber" className="col-lg-2 control-label">Teléfono</label>
              <div className="col-lg-10">
                <input type="text" className="form-control" id="inputPhonenumber" placeholder="Teléfono" value={this.state.phonenumber} onChange={this.handlePhonenumberChange} />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="btn btn-primary">Crear Sitio</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    )
  }
});

export default NewVenue;