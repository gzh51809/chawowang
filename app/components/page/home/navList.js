import React,{Component} from 'react';
import axios from 'axios';
import { Menu, Icon } from 'antd';
import '../../../sass/navlist.scss'
// let Home = ()=><div>Home</div>;
class navList extends Component{
    constructor(){
        super();
        this.state = {
            nav:[]
        }
    }
    componentWillMount(){
        axios.get('api/mobile/index.php?act=index')
        .then((res)=>{
            console.log(res);
            this.setState({
                nav:res.data.datas.nav,
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        return <div className="navList">
            <ul className="nctouch-home-nav2 fixed-Width" id="home-nav-wrap">
            {
                    this.state.nav.map(item=>{
                        return <li key={item.name}>
                                <span >
                                    <Icon style={{ fontSize: '16px'}} type="bars"/>
                                </span>
                            <p>{item.name}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
export default navList;