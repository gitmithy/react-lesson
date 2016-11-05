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

        this.state.loopNum=setInterval(function () {
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


    // forceupdate不执行这个方法
    shouldComponentUpdate(nextProps,nextState){
      console.log('should component update')
      return true;
    },


    componentWillUpdate(nextProps,nextState){
        console.log('comonent will update')
    },
    componentDidUpdate(nextProps,nextState){
        console.log('comonent did update')
    },
    update(){
       this.setState({name:'zeng'})
        //this.forceUpdate()
    },

    render(){
        return(
            <div>{this.props.group}+{this.state.name}
                <button onClick={this.update}>update</button>
            </div>
        )
    },
    componentWillUnmount(){
        console.log('component will Unmount')
        clearInterval(this.state.loopNum);
    }
})
function render(bool) {
    ReactDOM.render(
        <div>


            {bool?<Item/>:''}

        </div>



        ,document.getElementById('ceshi')
    )
}
render(true);

document.getElementById('clear').onclick=function () {
    render(false)
};
document.getElementById('new').onclick=function () {
    render(true)
};


