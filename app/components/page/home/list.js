import React,{Component} from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Detail from '../detail/detail.js'
import '../../../sass/list.scss'
import { Carousel } from 'antd';
// let Home = ()=><div>Home</div>;
class List extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            topath:"/detail"
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props.history)
        this.props.history.push(this.state.topath);
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
                                            
                                                <li onClick={this.handleClick} key={index}>
                                                    {/* <a href="#"> */}
                                                        <div className="goods-pic"><img src={list.goods_image} alt=""/></div>
                                                        <dl className="goods-info">
                                                            <dt className="goods-name">{list.goods_name}</dt>
                                                            <dd className="goods-price">￥<em data-gid="105051">{list.goods_promotion_price}</em></dd>
                                                        </dl>
                                                    {/* </a> */}
                                                </li>
                                            
                                        )
                                    })
                                    
                                }
                                </ul>
                                
                            </div>
                        )
                    })
                }
                {/* <Switch>
                    <Route path="/detail" component={Detail}/>
                </Switch> */}
            </div>
        )
    }
}
// List.contextTypes = {
//     router:PropTypes.object
// }

// 利用withRouter高阶组件包装App组件
// List = withRouter(List);
export default List;