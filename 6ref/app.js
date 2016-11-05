/**
 * Created by blacksmithy on 16/10/19.
 */
const Comp=React.createClass({

    getInitialState(){
        return({
            inputValue:'berry',
            inputValue2:'',
            checkboxValue:false,
            radioValue:false
        })
    },

    click(){
      this.refs.myinput.focus();
    },
    componentDidMount(){
      this.refs.myinput2.focus();
    },


    render(){
        return(
            <div>
                <div>
                    <input type="text" ref={function(dom) {
                      dom.focus()
                    }}/>
                    <button >click me</button>
                </div>
                <div>
                    <input type="text" ref="myinput"/>
                    <button onClick={this.click}>click me</button>
                </div>

                <div>
                    <input type="text" ref="muinput2"/>
                    <button >click me</button>
                </div>
            </div>

        )
    }
})
ReactDOM.render(<Comp/>,document.body);
setTimeout(function () {
    ReactDOM.render(<Form/>,document.body)
},3000)


