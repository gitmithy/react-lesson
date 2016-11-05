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
// ReactDOM.render(React.createElement('ul',null,
//     React.createElement(Item),
//     React.createElement(Item),
//     React.createElement(Item)
// )
//     ,document.getElementById('test4')
// )
// ReactDOM.render(React.createElement('ul',null,[
//     React.createElement(Item),
//     React.createElement(Item),
//     React.createElement(Item)]
//     )
//     ,document.getElementById('test5')
// )
// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//         <Item/>
//         <Item/>
//     </ul>
//     ,document.getElementById('test6')
// )
// //-webkit-
// //-ms-
// //
//
// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//         <Item/>
//         <Item/>
//     </ul>
//     ,document.getElementById('test7')
// )
// ReactDOM.render(React.createElement('ul',
//     {style:{backgroundColor:'yellow'}}
//     ,[
//         React.createElement(Item),
//         React.createElement(Item),
//         React.createElement(Item)]
//     )
//     ,document.getElementById('test8')
// )
//
// const bool=false;
//
// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//         {bool?<Item/>:<h1>my name is berry</h1>}
//
//     </ul>
//
//     ,document.getElementById('test9')
// )
//
// const bool2=false;
// const result=[];
// if(bool2){
//     result.push(React.createElement(Item));
//     result.push(React.createElement(Item));
// }else{
//     result.push(React.createElement('h1',null,'333'))
//     result.push(React.createElement('h1',null,'333'))
// }
// ReactDOM.render(React.createElement('ul',
//     {style:{backgroundColor:'yellow'}}
//     ,
//         result
//
//     )
//     ,document.getElementById('test10')
// )
// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//         {result}
//
//     </ul>
//
//     ,document.getElementById('test11')
// )
//
// const bool3=false;
// const result2=[];
// if(bool3){
//     result2.push(<Item/>);
//     result2.push(<Item/>);
// }else{
//     result2.push(<h1>333</h1>)
//     result2.push(<h1>333</h1>)
// }
// ReactDOM.render(React.createElement('ul',
//     {style:{backgroundColor:'yellow'}}
//     ,
//     result2
//
//     )
//     ,document.getElementById('test12')
// )
// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//         {result2}
//
//     </ul>
//
//     ,document.getElementById('test13')
// )