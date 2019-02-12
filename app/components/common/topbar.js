import React, { Component } from 'react';
import '../../sass/Topbar.scss'
class Topbar extends Component {

    render() {
        // let {match,history} = this.props;

        return <div>
            <header id="header" className="transparent">
                <div className="logo"><img src="http://www.chawo.com/wap/images/chawo-logo.png" /></div>
                <div className="header-wrap">
                    <a href="tmpl/search.html" className="header-inp"> <i className="icon"></i> <span className="search-input" id="keyword" placeholder="大益">大益</span> </a>
                </div>
                <div className="header-r"><a id="header-nav" href="./tmpl/member/member.html"><i className="more"></i>
                    <sup></sup></a>
                </div>
                {/* <!-- <div class="cohesive"></div> --> */}
            </header>
        </div>
    }
}

export default Topbar;