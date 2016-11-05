/**
 * Created by blacksmithy on 16/10/19.
 */

// 子级调用父级的callback

const Eventbus=new eventemitter.EventEmitter();



const Comp=React.createClass({
    getInitialState(){
        return({
            colorIndex:'yellow',
            colors:['yellow','red']
        })
    },





    componentWillMount(){



        Eventbus.on('ChangeColor',(id,color)=> {
            if(this.props.id!==id&&this.state.colors[this.state.colorIndex]===color){
                this.ChangeColor();
            }
        })
    },
    componentWillReceiveProps(nextProps){
        if(this.props.color!==nextProps.color){
            this.state.color=nextProps.color;

        }
    },

    ChangeColor(){
        this.setState({
            colorIndex:this.state.colorIndex?0:1
        })
        setTimeout( ()=> {
            Eventbus.emit('ChangeColor',this.props.id,this.state.colors[this.state.colorIndex])
        },1500)

    },
    render(){
        return(
            <div style={{backgroundColor:this.state.colors[this.state.colorIndex]}}>

                <button onClick={this.ChangeColor}>click me</button>
            </div>

        )
    }
})


ReactDOM.render(
    <div>
    <Comp id="one" name="ceshi" />
    <Comp id="two" name="ceshi"/>
    </div>


    ,document.body);




