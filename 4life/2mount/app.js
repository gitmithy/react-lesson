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
    componentWillMount(){
        console.log('componet will mount');
        this.state.name='smithy';
    },
    componentDidMount(){
        console.log('componentDidMount')
        const dom=ReactDOM.findDOMNode(this);
        console.log(dom)
        // this.state.name='smithy';
        let isYellow=false;


        dom.style.backgroundColor='yellow';

        setInterval(function () {
            if(isYellow){
                dom.style.backgroundColor='red';
                isYellow=false
            }else{
                dom.style.backgroundColor='yellow';
                isYellow=true;
            }
        },1000);

    },
    componentWillReceiveProps(nextProps){
        console.log('component will receive props')
    },




    render(){
        return(
            <div>{this.props.group}+{this.state.name}
                
            </div>
        )
    }
})
ReactDOM.render(
        <div>
            <Item/>

        </div>



    ,document.body
)
function render() {
    ReactDOM.render(
        <div>
            <Item/>

        </div>



        ,document.body
    )
}
const List=React.createClass({
    render(){
        return(
            <div>
                <Item/>
            </div>
        )
    }
})


render()
render()