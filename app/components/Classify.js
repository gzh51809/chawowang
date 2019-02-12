import React,{Component} from 'react';
import Topbar from './common/topbar.js'
import Showclass from './page/classify/showclass.js'
class Classify extends Component{

    render(){
        // let {match,history} = this.props;

        return (<div>
                <Topbar/>
                <Showclass/>
            </div>
            )
            

    }
}

export default Classify;