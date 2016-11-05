/**
 * Created by blacksmithy on 16/11/4.
 */
// const React=require('react');
const Item=require('./Item')
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

module.exports=List;