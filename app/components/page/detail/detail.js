import React,{Component} from 'react';
import { Carousel, Drawer, Button } from 'antd';
import axios from 'axios';
import '../../../sass/detail.scss'
class Detail extends Component{

    constructor(){
        super();
        this.state = {
            imgurl:[]
        }
    }
    state = { visible: false };
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
    componentWillMount(){
        let goodsid=window.location.hash.slice(9);
        console.log(goodsid);
        // let {match,history} = this.props;
        // let goodsid = match.params.id;
        // http://www.chawo.com/mobile/index.php?act=goods&op=goods_detail&goods_id=105051&key=&dis_id=
        axios.get(`api/mobile/index.php?act=goods&op=goods_detail&goods_id=${goodsid}&key=&dis_id=`)
        .then((res)=>{
            console.log(res);
            this.setState({
                imgurl:res.data.datas.image_list,
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    render(){
        // let {match,history} = this.props;

        return <div className="detail">
            <header id="header" className="post">
                <div className="header-wrap">
                    <div className="header-l">
                        <a href="javascript:history.go(-1)"> <i className="back"></i>
                        </a>
                    </div>
                    <ul className="header-nav">
                        <li className="logo"><img src="http://www.chawo.com/wap/images/chawo-logo.png"/></li>
                        <li className="cur"><a href="javascript:void(0);">商品</a></li>
                        <li><a href="javascript:void(0);" id="goodsBody">详情</a></li>
                        <li><a href="javascript:void(0);" id="goodsEvaluation">评价</a></li>
                    </ul>
                    <div className="header-r">
                        <a id="header-nav" href="javascript:void(0);"><i className="more"></i><sup></sup></a>
                    </div>
                </div>
            </header>

            <Carousel>
                    {
                        this.state.imgurl.map((item,index)=>{
                            return <div key={index}>
                                <img src={item._mid}/>
                            </div>
                        })
                    }
                </Carousel>
            
            <div className="goods-detail-cnt">
                <div className="goods-detail-name">
                     <dl> 
                         <dt>
                            2018年下关 便装特沱 生茶 100克/沱 1沱<span className="identifier">(编号:)</span>
                        </dt>
                        <dd></dd>
                    </dl>
                </div>
                <div className="goods-detail-price">
                    <dl>
                        <dt>￥<em>17.60</em>
                        </dt>
                        <dd>￥17.60</dd>
                    </dl>
                    <span className="sold">销量: 12865沱<span>
                    · <span className="goods-storage">库存: 39</span>
                    </span></span>
                </div>
                <div className="goods-detail-item gdi-contact">
                    <a className="btn contact">点此询价</a>
                </div>
                <div>
                    <dl className="goods-detail-price">
                        <dt>
                            <a href="http://www.chawo.com/wap/tmpl/member/login.html">会员登录享优惠</a>
                        </dt>
                    </dl>
                </div>
                <div className="goods-detail-voucher">
                    <a href="javascript:void(0);" id="getVoucher">
                        <i>券</i>点击领取店铺代金券</a>
                </div>
                <div className="goods-detail-item" id="goods_spec_selected">
                    <div className="itme-name">已选</div>
                    <div className="item-con">
                        <dl className="goods-detail-sel">
                            <dt>
                                <span>
                                规格
                                <em>1沱</em>
                                </span>
                            </dt>
                        </dl>
                    </div>
                    <div className="item-more"></div>
                </div>
                <div className="goods-detail-comment" id="goodsEvaluation1">
                    <div className="title">
                        <a id="goodsEvaluation1" href="javascript:void(0);">商品评价
                            <span className="rate">好评率<em>99%</em></span>
                            <span className="rate-num">（203人评价）</span>
                            <div className="item-more"></div>
                        </a>
                    </div>
                    <div className="comment-info">
                        <dl>
                            <dt>
                                <div className="goods-raty"><i className="star5"></i></div>
                                <time>2019-01-27</time>
                                <span className="user-name">阿***</span>
                            </dt>
                            <dd>不错哦</dd>	
                        </dl>
                        <dl>
                            <dt>
                                <div className="goods-raty"><i className="star5"></i></div>
                                <time>2019-01-25</time>
                                <span className="user-name">wa***</span>
                            </dt>
                            <dd>发货及时，包装严密，物流迅速，茶叶质量不错。上次漏发的茶样也给补上了，谢谢！</dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="goods-raty"><i className="star5"></i></div>
                                <time>2019-01-21</time>
                                <span className="user-name">达***</span>
                            </dt>
                            <dd>相信下关大品牌</dd>	
                        </dl>
                    </div>
	            </div>
            
                <div className="goods-detail-foot">
                        <div className="otreh-handle">
                            <a href="/wap" className="home"><i></i><p>首页</p></a>
                            <a href="javascript://void(0)" className="collect bt-collect "><i></i><p>收藏</p></a>
                            <a href="/wap/contact.html" className="kefu"><i></i><p>客服</p></a>
                            <a href="../tmpl/cart_list.html" className="cart"><i></i><p>购物车</p><span id="cart_count"></span></a>
                        </div>
                        
                        
                        <div className="buy-handle ">
                            
                                <Button type="primary" onClick={this.showDrawer}>
                                加入购物车
                                </Button>
                                <Button type="primary" onClick={this.showDrawer}>
                                立即购买
                                </Button>
                                <Drawer
                                title=""
                                placement="bottom"
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                >
                                {/* <div className="nctouch-bottom-mask-tip"><i></i>点击此处返回</div> */}
                                <div className="nctouch-bottom-mask-top goods-options-info">
                                        <div className="goods-pic">
                                        <img src="//www.chawo.com/data/upload/shop/store/goods/2/2016/11/2_05315902004305909_360.jpg"/>
                                    </div>
                                    <dl>
                                        <dt>2007年中茶 福禄寿禧方砖 生茶 100克/盒</dt>
                                        <dd className="goods-price">
                                            ￥<em>68.00</em>
                                            <span className="activity">
                                            </span>
                                            <span className="goods-storage">库存：60</span>
                                        </dd>
                                    </dl>
                                    <a href="javascript:void(0);" className="nctouch-bottom-mask-close"><i></i></a>
                                </div>
                                <div className="goods-option-value">购买数量
                                <div className="value-box">
                                    <span className="minus">
                                        <a href="javascript:void(0);">&nbsp;</a>
                                    </span>
                                    <span>
                                        <input type="text" pattern="[0-9]*" data-max="0" className="buy-num" id="buynum" defaultValue="1"/>
                                    </span>
                                    <span className="add">
                                        <a href="javascript:void(0);">&nbsp;</a>
                                    </span>
                                </div>
                            </div>
                            <div className="goods-option-foot">
                            <div className="otreh-handle">
                                {/* <a href="javascript:void(0);" class="kefu">
                                    <i></i>
                                    <p>客服</p>
                                </a> 
                                <a href="../tmpl/cart_list.html" class="cart">
                                    <i></i>
                                    <p>购物车</p>
                                    <span id="cart_count1"></span>
                                </a> */}
                            </div>
                            <div className="buy-handle ">
                                <Button>加入购物车</Button>
                                <Button>立即购买</Button>
                            </div>
                        </div>
                            </Drawer>
                            
                        </div>
                        
                    
                </div>
            </div>
        </div>
    }
}

export default Detail;