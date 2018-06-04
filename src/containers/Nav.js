import React,{Component} from 'react'
import { Link , withRouter ,NavLink } from 'react-router-dom'

export default class Nav extends Component{
    componentWillMount (){
        console.log('===========nav')
        console.log(this.props)
    }
    render(){
        // console.log(this.props)
        return (
                    <div>
                        <ul className="nav nav-tabs">
                            <li role="presentation"><NavLink to={'/'}>首页</NavLink></li>
                            <li role="presentation"><NavLink to={'/profile'}>个人中心</NavLink></li>
                            <li role="presentation"><NavLink to={{pathname:'user' }}>用户中心</NavLink></li>
                        </ul>
                        {/*<button onClick={()=>{ console.log(this.props); this.props.history.push('/profile') }}>测试按钮</button>*/}
                    </div>


        )
    }
}
// export default  withRouter(Nav)
