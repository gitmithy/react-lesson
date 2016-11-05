/**
 * Created by blacksmithy on 16/10/19.
 */
const Comp=React.createClass({

    getInitialState(){
        return({
            name:'',
            group:''
        })
    },


    // componentDidMount(){
    //   this.refs.myinput2.focus();
    // },
    changeHandle(){
      this.setState({name:event.target.value})
        this.props.onChangeName(this.state.name)
    },


    render(){
        return(
            <div>
                <input type="text" onChange={this.changeHandle}/>
            </div>

        )
    }
})
function changeNameHandle(name) {
    console.log(name)
}
ReactDOM.render(<Comp  onChangeName={changeNameHandle}/>,document.body);



