/**
 * Created by blacksmithy on 16/10/22.
 */
const list=[]

const database={
    add(article){
        list.push(article);
        return list.length-1;
    },
    del(index){
        list[index]=null;

    },
    update(index,newArticle){
        list.splice(index,1,newArticle)

    },
    get list(){
        return list;
    }
}


const Item=React.createClass({
    displayName:'Item',

    getDefaultProps(){

        return{
            value:'no value'
        }
    },
    getInitialState(){

        return{
            value:this.props.value,
            history:[this.props.value],
            currentHistoryIndex:0
        }
    },
    componentWillMount(){
        //
        this.state.dbkey=database.add({value:this.state.value});
    },
    componentDidMount(){

        const dom=ReactDOM.findDOMNode(this);


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
        this.state.value=nextProps.value;
    },


    // forceupdate不执行这个方法
    shouldComponentUpdate(nextProps,nextState){

      return true;
    },

    // 下面两个update方法不要调用setState和forceupdate

    componentWillUpdate(nextProps,nextState){
        //update database
        let dbkey=this.state.dbkey;
        database.update(dbkey,{value:this.state.value})

    },
    componentDidUpdate(nextProps,nextState){
        let dom=ReactDOM.findDOMNode(this);
        let oldstyle=dom.style.border;
        dom.style.border='2px solid red';
        setTimeout(function () {
            dom.style.border=oldstyle
        },2000)
    },
    changeValue(event){
      this.setState({value:event.target.value})
    },
    prev(){
        let currentHistoryIndex=this.state.currentHistoryIndex
        if(currentHistoryIndex!==0){
            currentHistoryIndex -=1;
            this.setState({currentHistoryIndex})
        }


    },
    next(){
        let currentHistoryIndex=this.state.currentHistoryIndex
        if(currentHistoryIndex!==this.state.history.length-1){
            currentHistoryIndex +=1;
            this.setState({currentHistoryIndex})
        }
    },
    save(){

        const value=this.state.value;
            //this.state.history.push(this.state.value);
        const history=this.state.history;
            //this.state.currentHistory=this.state.value;
        const currentHistoryIndex=history.length;
        history.push(value)

        this.setState({

            history,currentHistoryIndex


        })
    },

    render(){
        return(
            <div>
                <button onClick={this.prev}>prev</button><span>{this.state.history[this.state.currentHistoryIndex]}</span> <button onClick={this.next}>next</button>
                <input value={this.state.value} onChange={this.changeValue} /><button onClick={this.save}>save</button>
            </div>
        )
    },
    componentWillUnmount(){
        console.log('component will Unmount')
        clearInterval(this.state.loopNum);
    }
})

ReactDOM.render(
    <div>
        <Item/>
    </div>
    ,document.getElementById('ceshi')
)



