import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, {Component} from 'react'

class UpdateContents extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputFormHandler= this.inputFormHandler.bind(this)
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value})
      }
    render(){
        return (
            <article>
                <h2>
                    Update
                </h2>
                <form action='/create_process' method='post' 
                onSubmit={function(e){
                    e.preventDefault()
                    this.props.onSubmit(this.state.id, e.target.title.value, e.target.desc.value)
                    // e.target.필요한 태그의 name을 입력해 값을 받는다
                }.bind(this)}>
                    <p><input type="text" name="title" 
                              value={this.state.title}
                              onChange={this.inputFormHandler}>
                        </input>
                    </p>
                    <p><textarea name="desc" placeholder='description' value={this.state.desc}
                                 onChange={this.inputFormHandler}></textarea></p>
                    <p><input type="submit" value="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default UpdateContents