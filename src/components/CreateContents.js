import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, {Component} from 'react'

class CreateContents extends Component {
    render(){
        return (
            <article>
                <h2>
                    Create
                </h2>
                <form action='/create_process' method='post' 
                onSubmit={function(e){
                    e.preventDefault()
                    alert('hello')
                }.bind(this)}>
                    <p><input type="text" placeholder="title"></input></p>
                    <p><textarea name="desc" placeholder='description'></textarea></p>
                    <p><input type="submit" value="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default CreateContents