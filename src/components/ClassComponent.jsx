import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Yohana',
            country: 'Colombia'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        if(this.state.name === 'Yohana') this.setState({name: 'Carlos'})
        else this.setState({name: 'Yohana'})
    }
  render() {
      console.log(this)
    return (
        <div>
          <h2>{this.state.name}</h2>
          <button onClick={this.changeName}>Cambiar el nombre</button>
        </div>
    )
  }
}
