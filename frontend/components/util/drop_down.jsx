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
    // const show = this.state.show === 'show' ? '' : 'show';
    this.setState(prevState => ({show: prevState.show === '' ? 'show': ''}));
  }


  hide(e){
    if(e && e.relatedTarget && e.relatedTarget.tagName === 'A'){
      e.relatedTarget.click();
    }
    this.setState(() => ({show: ''}));
  }

  render(){
    return(
      <button className={`${this.props.customClass} dropdown-button`} onBlur={this.hide} onClick={this.toggleShow} >
        <img className='dropdown-img' src={ this.props.img} />
        {this.props.content}
        <div className={`${this.state.show || ''} dropdown-content`}>
          { this.props.list &&
            Object.keys(this.props.list).map((el, idx) => {
              return <a href='#' key={idx} onClick={this.executeAction.bind(this, this.props.list[el])}>{el}</a>;
            })
          }
        </div>
      </button>
    )
  }

}
