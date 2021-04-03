import React from "react";
import "./style.css";
import CharacterList from "../Components/CharacterList/function";
import FormComponent from "../Components/Form/FormComponent";

class App extends React.Component<{}, {title:string}> {

  constructor(props:string){
    super(props);
    this.state = {title:""}
    this.onChangeTitle = this.onChangeTitle.bind(this)
  }
  onChangeTitle(value: string){
    this.setState({title: value});
  }
  
  render(){
  return (
    <div className="App">
      <FormComponent onChangeTitle={this.onChangeTitle}/>
      <CharacterList title={this.state.title}/>
    </div>
  )
  }
};

export default App;

