/**
 * Created by blacksmithy on 16/10/19.
 */

const Item=React.createClass({
    render(){

        let style=this.props.actived?{border:"solid 1px greenyellow"}:{};

        return(


            <li style={style}>
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

    render(){
        return(
            <ul>
                {this.state.list.map(item=> <Item actived={item.actived} name={item.name}/>)}
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



