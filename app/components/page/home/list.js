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
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <div className="nctouch-home-block item-goods" key={index}>
                                <div className="tit-bar">{item.goods.title}</div>
                                <ul className="goods-list" key={index}>
                                {
                                    item.goods.item.map((list,index)=>{
                                        return (
                                            
                                                <li key={index}>
                                                    <a href="tmpl/product_detail.html?goods_id=105051">
                                                        <div className="goods-pic"><img src={list.goods_image} alt=""/></div>
                                                        <dl className="goods-info">
                                                            <dt className="goods-name">{list.goods_name}</dt>
                                                            <dd className="goods-price">￥<em data-gid="105051">{list.goods_promotion_price}</em></dd>
                                                        </dl>
                                                    </a>
                                                </li>
                                            
                                        )
                                    })
                                    
                                }
                                </ul>
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default List;