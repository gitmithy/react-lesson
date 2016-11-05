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
    edit(){
      this.props.onEdit(this.props.id,this.props.value)
    },
    remove(){
        this.props.onRemove(this.props.id)
    },

    render(){
        return(
        <li className="list-group-item">

            {this.props.value}
            <a href="javascript:;" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
            <a href="javascript:;" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
        </li>
        )
    }
})
const ItemEditor=React.createClass({

    getInitialState(){
        return{
            value:this.props.value
        }
    },
    HandleChange(event){
      this.state.value=event.target.value;
      this.forceUpdate();
    },

    remove(){
        this.props.onRemove(this.props.id)
    },
    save(){
        this.props.onSave(this.props.id,this.state.value);

    },


    render(){
        return(
        <li className="list-group-item">
            <input  onChange={this.HandleChange}  type="text" value={this.state.value} className="item-edit" />
            <a href="javascript:;" className="glyphicon-share glyphicon"  onClick={this.save}> </a>
            <a href="javascript:;" className=" glyphicon glyphicon-remove " onClick={this.remove}></a>
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
            editList:new Map()
        }
    },
    add(){
        const key=++this.state.key;
        this.state.editList.set(key,'');
        this.forceUpdate();
    },
    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();
    },
    removeEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();
    },
    save(id,value){
        this.state.editList.delete(id);
        this.state.list.set(id,value);
        this.forceUpdate();
    },
    edit(id,value){
        this.state.list.delete(id);
        this.state.editList.set(id,value);
        this.forceUpdate();
    },

    render(){

        const listDOM=[];
        const editListDOM=[];

        for(let entity of this.state.list){
            listDOM.push(<Item onRemove={this.removeItem} onEdit={this.edit} id={entity[0]} key={entity[0]} value={entity[1]}/>)
        }
        for(let entity of this.state.editList){
            editListDOM.push(<ItemEditor onSave={this.save} onRemove={this.removeEditor} key={entity[0]} id={entity[0]} value={entity[1]}/>)
        }
        return(
        <div>
            <button onClick={this.add} className="btn btn-default">add</button>
            <ul className="list-group">
                {listDOM}

                {editListDOM}
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