const LinkedStateMixin=React.addons.LinkedStateMixin;


const Comp4=React.createClass({
    displayName:'Comp',

    //mixins:[LinkedStateMixin],



    getInitialState(){
        return{
            name:'',
            name2:'',
            name3:'',
            name4:''
        }
    },

    changeName(event){
        this.setState({
            name4:event.target.value
        })
    },

    linkState(key){
        return {

            value: this.state[key],
            requestChange: (newValue)=> {
                this.setState({[key]: newValue})
            }

        }
    },




    render(){





        return(
            <div>
                <p>
                    {this.state.name}
                    <input type="text" valueLink={this.linkState('name')} />
                </p>
                <p>
                    {this.state.name2}
                    <input type="text" valueLink={this.linkState('name2')} />
                </p>
                <p>
                    {this.state.name3}
                    <input type="text" valueLink={this.linkState('name3')} />
                </p>
                <p>
                    {this.state.name4}
                    <input type="text" defaultValue={this.state.name4} onChange={this.changeName}  />
                </p>
            </div>
        )
    }
})

ReactDOM.render(<Comp4/>,document.getElementById('id4'));