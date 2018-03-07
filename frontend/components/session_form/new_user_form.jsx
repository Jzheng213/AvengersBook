import React from 'react';
import { withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',

    };
    this.month = 'Month Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    this.day = Array.apply(null, {length: 31}).map(Number.call, Number);
    this.year = Array.apply(null, {length: (2018 - 1905 + 1)}).map(Number.call, Number).reverse();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='signup-form-box'>
        <span className='signup-title'>Create a New Account</span>
        <span className='signup-sub-title'>{'It\'s free and always will be'}</span>

        <div className='signup-form-name'>
          <input className='signup-input-box'
            type='text'
            placeholder='First name'
            onChange={this.update('firstName')}
            value={this.state.firstName}
          />
          <input className='signup-input-box'
            type='text'
            placeholder='Last name'
            onChange={this.update('lastName')}
            value={this.state.lastName}
          />
        </div>

        <input className='signup-input-box'
          type='text'
          placeholder='Mobile number or email'
          value={this.state.email}
          onChange={this.update('email')}
        />


        <input className='signup-input-box'
          type='password'
          placeholder={'New Password'}
          value={this.state.password}
          onChange={this.update('password')}
        />

        <label className='birthday-label'>Birthday</label>
        <div className='birthday-input-container'>
          <select aria-label='Month' name='birthday_month' id='month' className='signup-input-box month'>
            {
              this.month.map((mon, idx) => {
                return <option value={idx} key={idx}>{mon}</option>;
              })
            }
          </select>
          <select aria-label='Day' name='birthday_day' id='day' className='signup-input-box day'>
            <option value= {0} key={0}>Day</option>
            {
              this.day.map((day) => {
                return <option value={day+ 1} key={day + 1}>{day + 1}</option>;
              })
            }
          </select>
          <select aria-label='Year' name='birthday_year' id='year' className='signup-input-box year'>
            <option value= {0} key={0}>Year</option>
            {
              this.year.map((year) => {
                return <option value={year+ 1} key={year + 1}>{year + 1905}</option>;
              })
            }
          </select>
        </div>

        <div className='gender-container' data-type='radio' data-name='gender_wrapper'>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' value='1' />
            <label>Female</label>
          </span>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' value='2' />
            <label>Male</label>
          </span>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' value='3' />
            <label>Enby</label>
          </span>

          <span className='gender_radio_button'>
            <input type='radio' name='sex' value='4' />
            <label>Other</label>
          </span>
        </div>
        <p className='terms-services'>
          By clicking Create Account, you agree to our Terms and that
          you have read our Duty Policy, including attending the Infinity Wars.
          You may receive SMS Notifications from
          The Avengers and can opt out at any time.
        </p>
        <input className='new-user-submit' type='submit' value='Create Account' />
        {this.renderErrors()}
      </form>

    );
  }
}

export default withRouter(NewUserForm);
