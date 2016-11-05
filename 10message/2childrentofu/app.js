/**
 * Created by blacksmithy on 16/10/19.
 */

// 子级调用父级的callback
const Item=React.createClass({
    render(){

        let style=this.props.actived?{border:"solid 1px greenyellow"}:{};

        return(


            <li onClick={this.props.callback} style={style}>
                {this.props.name}
            </li>
        )
    }
})

const Comp=React.createClass({

    getInitialState(){
        return({
            name:'',
            group:''
        })
    },

    componentWillMount(){
        this.state.list=this.props.data.map(item=>{
            return(
                {name:item,actived:false}
            )

        })
    },

    componentDidMount(){
        setTimeout(()=>{
            this.state.list[1].actived=true;
            this.forceUpdate();
        },1000)
    },
    callback(item){
        alert(item.name)
    },

    render(){
        return(
            <ul>
                {this.state.list.map(item=> <Item  callback={this.callback.bind(this,item)} actived={item.actived} name={item.name}/>)}
            </ul>

        )
    }
})
const list=[
    "AAA",
    "BBB",
    "CCC",
    "DDD"
]

ReactDOM.render(<Comp data={list}/>,document.body);



