/**
 * Created by blacksmithy on 16/10/22.
 */
const Item=React.createClass({
    displayName:'Item',

    getDefaultProps(){
        console.log('get default props');
        return{
            group:123
        }
    },
    getInitialState(){
        console.log('get Initial state');
        return{
            name:'berry'
        }
    },
    render(){
        return(
            <div>{this.props.group}+{this.state.name}</div>
        )
    }
})
ReactDOM.render(
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>



    ,document.body
)
