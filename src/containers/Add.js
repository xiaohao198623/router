import React,{Component} from 'react'

export default class Add extends Component{
    componentWillMount (){
        console.log('===========add')
        console.log(this.props)
    }
    handleClick=()=>{
        let userList= JSON.parse(localStorage.getItem('userList')) || []
        userList.push({'userId':Math.random() , 'value':this.x.value})
        localStorage.setItem('userList', JSON.stringify(userList) )
        //素有通过路由渲染的组件属性会多出来3个属性：history,match,loaction
        console.log(this.props)
        this.props.history.push('/user/list')
    }
    render(){
        return (
            <div>
                <input type="text" ref={(x)=>{this.x=x}}/>
                <button onClick={this.handleClick} >按钮</button>
            </div>
        )
    }
}
