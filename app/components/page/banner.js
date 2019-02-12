import React,{Component} from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
import '../../sass/banner.scss'
// let Home = ()=><div>Home</div>;
class Banner extends Component{
    constructor(){
        super();
        this.state = {
            imgurl:[]
        }
    }
    componentWillMount(){
        // let {match,history} = this.props;
        // let goodsid = match.params.id;
        // http://www.chawo.com/mobile/index.php?act=index
        axios.get('api/mobile/index.php?act=index')
        .then((res)=>{
            console.log(res);
            this.setState({
                imgurl:res.data.datas[0].adv_list.item,
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        return <div className="banner">
            <Carousel autoplay>
                {
                    this.state.imgurl.map(item=>{
                        return <div key={item.order}>
                            <img src={item.image}/>
                        </div>
                    })
                }
            </Carousel>
        </div>
    }
}
export default Banner;