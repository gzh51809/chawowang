import React,{Component} from 'react';
import axios from 'axios';
import '../../../sass/new.scss'
import { Carousel } from 'antd';
// let Home = ()=><div>Home</div>;
class News extends Component{
    constructor(){
        super();
        this.state = {
            nav:[]
        }
    }
    // http://www.chawo.com/mobile/index.php?act=notice&op=get_article_lists
    componentWillMount(){
        axios.get('api/mobile/index.php?act=notice&op=get_article_lists')
        .then((res)=>{
            console.log(res.data.datas.article_list);
            this.setState({
                nav:res.data.datas.article_list
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        // style={{height:"199px"}}
        return (
            <div className="news">
                <div id="home-notice" className="fixed-Width">
                    <div className="notice-ico">
                        <img src="../../../images/toutiao.jpg"/>
                    </div>
                    {/* onmouseover="this.stop" */}
                    <marquee direction="up" scrollamount="2">
                        {
                            this.state.nav.map(item=>{
                                return <div key={item.article_id}>
                                    {item.article_title}
                                </div>
                            })
                        }
                    </marquee>
                </div>
            </div>
        )
    }
}
export default News;