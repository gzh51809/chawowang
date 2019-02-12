import React,{Component} from 'react';
import axios from 'axios';
import '../../../sass/list.scss'
import { Carousel } from 'antd';
// let Home = ()=><div>Home</div>;
class List extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    // http://www.chawo.com/mobile/index.php?act=index
    componentWillMount(){
        axios.get('api/mobile/index.php?act=index')
        .then((res)=>{
            let arr1=[];
            //对象的遍历
            Object.keys(res.data.datas).forEach(function(key){
                if(key>=1){
                    arr1.push(res.data.datas[key])
                }
           });
            console.log(arr1);
            this.setState({
                list:arr1,
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        // style={{height:"199px"}}
        return (
            <div className="list">
                <div className="nctouch-home-block item-goods">
                    <div className="tit-bar">普洱生茶</div>
                    <ul className="goods-list">
                    <li>
                        <a href="tmpl/product_detail.html?goods_id=105051">
                            <div className="goods-pic"><img src="//www.chawo.com/data/upload/shop/store/goods/2/2018/03/2_05736643032789623_360.jpg" alt=""/></div>
                            <dl className="goods-info">
                                <dt className="goods-name">2018年下关 便装特沱 生茶 100克/沱 1沱</dt>
                                <dd className="goods-price">￥<em data-gid="105051">17.60</em></dd>
                            </dl>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default List;