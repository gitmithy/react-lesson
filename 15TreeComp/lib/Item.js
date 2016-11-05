/**
 * Created by blacksmithy on 16/11/4.
 */
const React=require('react');

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

module.exports=Item;
