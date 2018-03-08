import React from 'react';
import { withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      gender: undefined,
      birthday: '',
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      passwordInput: '',
    };
    this.month = 'Month Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    this.day = Array.apply(null, {length: 31}).map(Number.call, Number);
    this.year = Array.apply(null, {length: (2018 - 1905 + 1)}).map(Number.call, Number).reverse();
    this.runningBirthday = ['month','day','year'];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleClick(field){
    return () => this.setState({
      [field]: 'clicked'
    });
  }

  handleBirthday(field){
    return e => {
      switch (field) {
      case 'month':
        this.runningBirthday[0] = e.currentTarget.value;
        break;
      case 'day':
        this.runningBirthday[1] = e.currentTarget.value;
        break;
      case 'year':
        this.runningBirthday[2] = e.currentTarget.value;
        break;
      default:
      }
      this.setState({birthday: this.runningBirthday.join('/')});
    };
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

        <div className={'signup-form-name'}>
          <input className={`${this.state.firstNameInput} signup-input-box`}
            type='text'
            placeholder='First name'
            onChange={this.update('first_name')}
            onBlur={this.toggleClick('firstNameInput')}
            value={this.state.firstName}
            required
          />
          <input className={`${this.state.lastNameInput} signup-input-box`}
            type='text'
            placeholder='Last name'
            onChange={this.update('last_name')}
            onBlur={this.toggleClick('lastNameInput')}
            value={this.state.lastName}
            required
          />
        </div>

        <input className={`${this.state.emailInput} signup-input-box`}
          type='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.update('email')}
          onBlur={this.toggleClick('emailInput')}
          required
        />


      <input className={`${this.state.passwordInput} signup-input-box`}
          type='password'
          placeholder={'New Password'}
          value={this.state.password}
          onBlur={this.toggleClick('passwordInput')}
          onChange={this.update('password')}
          required
        />

        <label className='birthday-label'>Birthday</label>
        <div className='birthday-input-container'>
          <select className='signup-input-box month'
            id='month'
            onChange={this.handleBirthday('month')}>
            {
              this.month.map((mon, idx) => {
                return <option
                  value={idx}
                  key={idx}

                  label={mon}
                />;
              })
            }
          </select>
          <select className='signup-input-box day'
            id='day'
            onChange={this.handleBirthday('day')}>

            <option value= {0} key={0}>Day</option>
            {
              this.day.map((date) => {
                return <option
                  value={parseInt(date) + 1}
                  key={date + 1}
                  label={date + 1}
                />;
              })
            }
          </select>
          <select className='signup-input-box year'
            id='year'
            onChange={this.handleBirthday('year')}>

            <option value= {0} key={0}>Year</option>
            {
              this.year.map((year) => {
                return <option
                  value={year+ 1905}
                  key={year + 1}
                  label={year + 1905}
                />;
              })
            }
          </select>
        </div>

        <div className='gender-container' data-type='radio' data-name='gender_wrapper'>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' onChange={this.update('gender')} value='female' />
            <label>Female</label>
          </span>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' onChange={this.update('gender')} value='male' />
            <label>Male</label>
          </span>
          <span className='gender_radio_button'>
            <input type='radio' name='sex' onChange={this.update('gender')} value='enby' />
            <label>Enby</label>
          </span>

          <span className='gender_radio_button'>
            <input type='radio' name='sex' onChange={this.update('gender')} value='other' />
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
