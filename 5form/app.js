/**
 * Created by blacksmithy on 16/10/19.
 */
const Form=React.createClass({

    getInitialState(){
        return({
            inputValue:'berry',
            inputValue2:'',
            checkboxValue:false,
            radioValue:false
        })
    },

    changeHandle(event){
        // 两种更改方法
        // 1
        // this.state.inputValue=event.target.value;
        // this.forceUpdate()

        this.setState({
            inputValue:event.target.value
        });
    },
    changeHandle2(event){
        // 两种更改方法
        // 1
        this.state.inputValue2=event.target.value;
        // this.forceUpdate()

        // this.setState({
        //     inputValue2:event.target.value
        // });
    },
    changeCheckboxHandle(event){
        this.setState({
            checkboxValue:event.target.checkboxValue
        });
    },
    changeRadioHandle(event){
        this.setState({
            radioValue:event.target.radioValue
        });
    },


    render(){
        return(
            <form>
                <input type="text" defaultValue="berry2" onChange={this.changeHandle2}/><br/>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandle}/><br/>
                <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/><br/>
                <input type="checkbox" defaultChecked/><br/>
                <input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle}/><br/>
                <select name="" id="" value="B">
                    <option value="A">Aaaa</option>
                    <option value="B">Bbbb</option>
                    <option value="C">Cccc</option>
                </select><br/>
                <select name="" id="" multiple value={['B','C']}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select><br/>
                <textarea name="" id="" cols="30" rows="10" defaultValue="ceshi"></textarea><br/>
            </form>
        )
    }
})
ReactDOM.render(<Form/>,document.body);
setTimeout(function () {
    ReactDOM.render(<Form/>,document.body)
},3000)


