import React,{Component} from 'react';
import '../../../sass/showclass.scss'
import axios from 'axios';
class Showclass extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            logo:[]
        }
    }
    componentWillMount(){
        // let {match,history} = this.props;
        // let goodsid = match.params.id;
        // http://www.chawo.com/mobile/index.php?act=goods_class
        // http://www.chawo.com/mobile/index.php?act=brand&op=recommend_list
        axios.get('api/mobile/index.php?act=goods_class')
        .then((res)=>{
            console.log(res);
            this.setState({
                list:res.data.datas.class_list,
            })
        })
        .catch((err)=>{
            console.log(err);
        })


        axios.get('api/mobile/index.php?act=brand&op=recommend_list')
        .then((res1)=>{
            this.setState({
                logo:res1.data.datas.brand_list,
            })
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        // let {match,history} = this.props;

        return (
            <div className="showclass">
                <div className="categroy-cnt" id="categroy-cnt">
                <ul className="categroy-list">
                    <li className="category-item selected">
                        <a href="javascript:void(0);" className="category-item-a brand">
                                <div className="ci-fcategory-ico">
                                    <img src="http://www.chawo.com/wap/images/degault.png"/>
                                </div>
                            <div className="ci-fcategory-name">品牌推荐</div>
                        </a>
                    </li>
                    {
                       this.state.list.map((item,index)=>{
                           return (
                                <li className="category-item selected" key={index}>
                                    <a href="javascript:void(0);" className="category-item-a category">
                                            <div className="ci-fcategory-ico">
                                                <img src={item.image}/>
                                            </div>
                                        <div className="ci-fcategory-name">{item.gc_name}</div>
                                    </a>
                                </li>
                           )
                       }) 
                    }
                
                </ul>
            </div>
            <div className="categroy-rgt" id="categroy-rgt">
                <dl className="brands-recommend">
                {
                    this.state.logo.map((item,index)=>{
                        return (
                            <dd key={index}>
                            <a href="http://www.chawo.com/wap/tmpl/product_list.html?b_id=2&amp;gc_id=">
                            
                                <img src={item.brand_pic}/>
                                <p>{item.brand_name}</p>
                            </a>
                            </dd>
                        )
                    })
                    
                }
                     
                    
                </dl>
            </div>
            </div>
        )
    }
}

export default Showclass;