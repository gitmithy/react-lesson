/**
 * Created by blacksmithy on 16/10/19.
 */

const exf={
    test(){
        alert('ok test mixins',this.props.group);
    }
}

const Item=React.createClass({
    
    displayName:'Item',
    
    getDefaultProps(){
      return{
          group:'javascript'
      }  
    },
    getInitialState(){
        return{
            result:123
        }
    },

    mixins:[exf],

    
    render(){
        return(
            <div>{this.props.group}
            <button onClick={this.test}>click me</button>
            </div>
        )
    }
})


// es6语法

class Item2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            result:123
        }
    }

    static defaultProps(){
        return{
            group:'javascript'
        }
    }
    test(){
        alert('ok test mixins',this.props.group);
    }


    render(){
        return(
            <div>{this.props.group}
                <button onClick={this.test.bind(this)}>click me</button>
            </div>
        )
    }
}


ReactDOM.render(
    <ul>
        <Item group="hello"/>
        <Item2 group="ceshi"/>
    </ul>
    ,document.getElementById('test3')
)
