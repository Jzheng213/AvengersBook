import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: '',
      password: '',

    };
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <label>
            </label>
            <br/>

            <label>
            <input type="text"
              aria-label='Mobile number or email'
              value={this.state.email}
              onChange={this.update('email')}
              className="signup-input"
            />
            </label>
            <br/>
            <label>Password:
            <input type="password"
              aria-label={'New Password'}
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-input"
            />
            </label>
            <br/>

            <select aria-label='Month' name='birthday_month' id='month' className='signup-input'>
              <option value='0'>Month</option>
            </select>
            <select aria-label='Day' name='birthday_day' id='day' className='signup-input'>
              <option value='0'>Day</option>
            </select>
            <select aria-label='Year' name='birthday_year' id='year' className='signup-input'>
              <option value='0'>Year</option>
            </select>
            <br/>
            <div data-type='radio' data-name='gender_wrapper'>
              <span>
                <span className='gender_radio_button'>
                  <input type='radio' name='sex' value='1' />
                  <label>Female</label>
                </span>
                <span className='gender_radio_button'>
                  <input type='radio' name='sex' value='2' />
                  <label>Male</label>
                </span>
              </span>
            </div>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
