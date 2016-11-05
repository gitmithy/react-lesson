// ReactDOM.render(
// <div>
// <button>add</button>
// <ul className="list-group">
//     <li className="list-group-item">Cras justo odio <a href="" className="right glyphicon glyphicon-remove"></a> <a href="" className="right glyphicon glyphicon-edit"></a></li>
//     <li className="list-group-item">
//     <input type="text" className="item-edit"/> <a href="" className="glyphicon-share glyphicon"> </a>
//     <a href="" className=" glyphicon glyphicon-remove "></a>
//     </li>
// </ul>
// </div>
//     ,
//     document.getElementById('container')
// );
const Item=React.createClass({
    getInitialState(){
        return{

            isEdit:true
        }
    },
    edit(){
      this.setState({isEdit:true});
    },



    remove(){
        this.props.onRemove(this.props.id)
    },
    save(){
        this.props.onSave(this.props.id,this.refs.inputText.value);
        this.setState({isEdit:false});

    },
    render(){
        return(
        this.state.isEdit?
        <li className="list-group-item">
            <input    type="text" ref="inputText"  defaultValue={this.props.value} className="item-edit" />
            <a href="javascript:;" className="glyphicon-share glyphicon"  onClick={this.save}> </a>
            <a href="javascript:;" className=" glyphicon glyphicon-remove " onClick={this.remove}></a>
        </li>
        :<li className="list-group-item">

            {this.props.value}
            <a href="javascript:;" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            <a href="javascript:;" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
        </li>
        )
    }
})

// list
const List=React.createClass({
    getInitialState(){
        return{
            key:0,
            list:new Map(),

        }
    },
    add(){
        const key=++this.state.key;
        this.state.list.set(key,'');
        this.forceUpdate();
    },
    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },

    save(id,value){

        this.state.list.set(id,value);
        this.forceUpdate();
    },


    render(){

        const listDOM=[];


        for(let entity of this.state.list){
            listDOM.push(<Item onSave={this.save} onRemove={this.removeItem}  id={entity[0]} key={entity[0]} value={entity[1]}/>)
        }

        return(
        <div>
            <button onClick={this.add} className="btn btn-default">add</button>
            <ul className="list-group">
                {listDOM}

            </ul>
        </div>
        )
    }
})
// item

// itemeditor


ReactDOM.render(
    <List/>,document.getElementById('container')
)