import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    const user = {
      email: 'spiderman@avengers.com',
      password: 'starwars'
    };

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
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <span className='login-errors'>{this.renderErrors()}</span>
        <label className='login-label'>
          <span>Email or Phone</span>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>

        <label className='login-label'>
          <span>Password</span>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        </label>
        <input className="session-submit" type="submit" value='Log In' />
        <input className="session-submit" type="submit" value='Demo Log In' onClick={this.handleDemo}/>
      </form>
    );
  }
}

export default withRouter(SessionForm);
