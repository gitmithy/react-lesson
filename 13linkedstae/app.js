


const Comp=React.createClass({

    getInitialState(){
      return{
          name:''
      }
    },

    displayName:'Comp',

    changeName(event){
      this.setState({
          name:event.target.value
      })
    },


    render(){
        return(
            <div>
                {this.state.name}
                <input type="text" value={this.state.name} onChange={this.changeName}/>
            </div>
        )
    }
})

ReactDOM.render(<Comp/>,document.getElementById('id1'));