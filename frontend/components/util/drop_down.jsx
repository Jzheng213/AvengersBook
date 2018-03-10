import React from 'react';

export default class DropDown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: ''
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  executeAction(callback, e){
    e.preventDefault();
    if(callback) callback();
  }

  toggleShow(){
    this.setState({show: 'show'});
  }

  hide(e){
    if(e && e.relatedTarget){
      e.relatedTarget.click();
    }
    this.setState({show: ''});
  }

  render(){
    return(
      <button className='nav-button' onClick={this.toggleShow} onBlur={this.hide}>
        <img className='nav-img' src={ this.props.img} />
        <div className={`${this.state.show} dropdown-content ${this.props.customClass}`}>
          <img className='upArrow' src={window.upArrow} />
          {
            Object.keys(this.props.list).map((el, idx) => {
              return <a href='#' key={idx} onClick={this.executeAction.bind(this, this.props.list[el])}>{el}</a>
            })
          }
        </div>
      </button>
    )
  }

}
