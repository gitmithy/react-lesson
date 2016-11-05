const LinkedStateMixin=React.addons.LinkedStateMixin;


const Comp2=React.createClass({
    displayName:'Comp',

    mixins:[LinkedStateMixin],



    getInitialState(){
        return{
            name:''
        }
    },






    render(){
        return(
            <div>
                {this.state.name}
                <input type="text" valueLink={this.linkState('name')} />
            </div>
        )
    }
})

ReactDOM.render(<Comp2/>,document.getElementById('id2'));