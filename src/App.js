import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {editActive: true, inputValue: ' '}

  onClickSave = () => {
    const {editActive} = this.state
    this.setState({editActive: !editActive})
  }

  onClickEdit = () => {
    const {editActive} = this.state
    this.setState({editActive: !editActive})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {editActive, inputValue} = this.state
    const abc = editActive ? (
      <input value={inputValue} onChange={this.onChangeInput} type="text" />
    ) : (
      <p>{inputValue}</p>
    )
    const def = editActive ? (
      <button onClick={this.onClickSave}>Save</button>
    ) : (
      <button onClick={this.onClickEdit}>Edit</button>
    )
    return (
      <div className="cont1">
        <div className="cont2">
          <h1>Editable Text Input</h1>
          <div className="cont3">
            {abc}
            {def}
          </div>
        </div>
      </div>
    )
  }
}

export default App
