import React,{Component} from 'react';

import { Carousel } from 'antd';
import Topbar from './common/topbar.js'
import Banner from './page/banner.js'
import NavList from './page/home/navList.js'
import News from './page/home/news.js'
import List from './page/home/list.js'
// let Home = ()=><div>Home</div>;
class Home extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        // style={{height:"199px"}}
        return <div className="home">
            <Topbar/>
            <Banner/>
            <NavList/>
            <News/>
            <List/>
        </div>
    }
}
export default Home;