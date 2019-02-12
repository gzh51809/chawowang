import React,{Component} from 'react';
import '../../../sass/kefutop.scss'
// let Home = ()=><div>Home</div>;
class Kefutop extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        // style={{height:"199px"}}
        return <div className="kefutop">
            <header id="header">
            <div className="header-wrap">
                <div className="header-l"> <a href="javascript:history.go(-1)"> <i className="back"></i> </a> </div>
                <div className="header-title">
                <h1><img src="http://www.chawo.com/wap/images/chawo-logo.png"/>联系客服</h1>
                </div>
            </div>
            </header>
            <div id="home-cnt-wp" className="">
                <div className="contact">
                <div className="mt10">电话: <a href="tel:087166666655">0871-6666 6655</a></div>
                <div className="mt10">客服微信: 476261</div>
                <div className="mt10">客服QQ: 4001564001</div>
                <div className="mt10"><img src="http://www.chawo.com/shop/templates/default/images/extra/chawo-weixin.jpg" className="qrcode"/></div>
                </div>
            </div>
        </div>
    }
}
export default Kefutop;