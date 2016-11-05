/**
 * Created by blacksmithy on 16/10/19.
 */

// 子级调用父级的callback

const Eventbus=new eventemitter.EventEmitter();



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
        //console.log(this.props.name)
        this.props.bus.on('test event', ()=> {
            console.log(this.props.name)
        })

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

ReactDOM.render(
    <div>
    <Comp bus={Eventbus} name="component1" data={list}/>
    <Comp bus={Eventbus} name="component2" data={list}/>
    </div>


    ,document.body);

setTimeout(function () {
    Eventbus.emit('test event')
},2500)



