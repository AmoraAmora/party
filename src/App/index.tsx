import React from 'react'
import './style.css'
import CharacterList from '../Components/CharacterList'
import FormComponent from '../Components/Form'
import { IProps, IState } from './interfaces'
import RickAndMorty from '../Components/RickAndMorty'

class App extends React.Component<IProps, IState> {
  constructor(props: object) {
    super(props)
    this.state = { title: '' }
    this.onChangeTitle = this.onChangeTitle.bind(this)
  }

  onChangeTitle(value: string) {
    this.setState({ title: value })
  }

  render() {
    const { title } = this.state
    return (
        <div className="App">
            <FormComponent onChangeTitle={this.onChangeTitle} />
            <CharacterList title={title} />
            <RickAndMorty />
        </div>
    )
  }
}

export default App
