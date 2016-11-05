/**
 * Created by blacksmithy on 16/10/19.
 */
const data=new Map();
data.set('id001','id001');
data.set('id002','id002');
data.set('id003','id003');
data.set('id004','id004');
data.set('id005','id005');
//console.log(data)
const DND=React.createClass({

    getInitialState(){
        return({
            rightData:this.props.data,
            dragId:null,
            leftData:new Map()

        })
    },

    drag(event){
        this.state.dragId=event.target.id;
    },

    drop(event){
        var value=this.state.rightData.get(this.state.dragId);
        this.state.leftData.set(this.state.dragId,value);
        this.state.rightData.delete(this.state.dragId)
        this.forceUpdate();
    },
    drop2(event){
        var value=this.state.leftData.get(this.state.dragId);
        this.state.rightData.set(this.state.dragId,value);
        this.state.leftData.delete(this.state.dragId)
        this.forceUpdate();
    },
    render(){
        //console.log(this.props.data)
        const rightList=[];
        const leftList=[];
        for(let item of this.state.rightData){
            rightList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }
        for(let item of this.state.leftData){
            leftList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        return(
            <div>
                <div id="leftsection"
                     onDragEnter={e=>e.preventDefault()}
                     onDragOver={e=>e.preventDefault()}
                     onDrop={this.drop}>
                    {leftList}
                </div>
                <div id="rightsection"
                     onDragEnter={e=>e.preventDefault()}
                     onDragOver={e=>e.preventDefault()}
                     onDrop={this.drop2}
                >
                    {rightList}
                </div>
            </div>

        )
    }
})
ReactDOM.render(<DND data={data}/>,document.body);



