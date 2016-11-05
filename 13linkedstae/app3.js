const LinkedStateMixin=React.addons.LinkedStateMixin;


const Comp3=React.createClass({
    displayName:'Comp',

    mixins:[LinkedStateMixin],



    getInitialState(){
        return{
            name:''
        }
    },






    render(){



        var myLink={
            value:this.state.name,
            requestChange:(newValue)=>{
                this.setState({name:newValue})
            }
        }


        return(
            <div>
                {this.state.name}
                <input type="text" valueLink={myLink} />
            </div>
        )
    }
})

ReactDOM.render(<Comp3/>,document.getElementById('id3'));