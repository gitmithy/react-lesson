/**
 * Created by blacksmithy on 16/11/4.
 */
const React=require('react');



const TreeNode=React.createClass({



    render(){

        const nodeListDOM=[];

        const node=this.props.node;
        
        for(let nodeId of this.props.node.childIds){
            var childNode=node.getNode(nodeId);
            nodeListDOM.push(<TreeNode node={childNode} />)
        }


        return(


            <ul>
                <h3>{node.data('title')}</h3>
                {nodeListDOM}
            </ul>

        )
    }
})

module.exports=TreeNode;


