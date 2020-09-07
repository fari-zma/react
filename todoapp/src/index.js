import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './ToDo'
import ToDo from './ToDo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value })
  }

  handleSubmit = (event) => {

    if (this.state.item === '') {
      alert("Please enter a ToDO.");
      return
    }

    // copy the this.state.list to list
    const list = [...this.state.list];
    list.push(this.state.item);


    this.setState({
      list: list,
      item: ''
    });
  }

  deleteItem = id => {
    console.log(id);
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);

    this.setState({
      list: updatedList
    });
  }

  render() {
    return(
      <div className='mid_div'>

        <h1>ToDo List</h1>

        <div>
          <input type='text' placeholder='Enter an item' onChange={this.handleChange} value={this.state.item} />
          <button onClick={this.handleSubmit} > + </button>
        </div>
        
        <div className='list'>
          <ul>
            {this.state.list.map((item, index) => {
              return <ToDo
                        key={index}
                        id={index}
                        text={item}
                        onSelect={this.deleteItem}
                      />
            }
              )}
          </ul>
        </div>

      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);