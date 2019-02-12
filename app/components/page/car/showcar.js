import React,{Component} from 'react';
import '../../../sass/showcar.scss'
// let Home = ()=><div>Home</div>;
class Showcar extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        // style={{height:"199px"}}
        return (
            <div className="showcar">
                 <header id="header">
                    <div className="header-wrap">
                        <div className="header-l"> <a href="javascript:history.go(-1)"> <i className="back"></i> </a> </div>
                        <div className="header-title">
                        <h1><img src="http://www.chawo.com/wap/images/chawo-logo.png"/>购物车</h1>
                        </div>
                    </div>
                </header>
                <div className="nctouch-main-layout">
                    <div id="cart-list-wp">
                        <div className="nctouch-norecord cart">
                            <div className="norecord-ico"><i></i></div>
                                    <dl>
                                        <dt>您的购物车还是空的</dt>
                                        <dd>去挑一些中意的商品吧</dd>
                                    </dl>
                            <a href="http://www.chawo.com/wap" className="btn">随便逛逛</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Showcar;