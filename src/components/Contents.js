import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, {Component} from 'react'

class Contents extends Component {
    render(){
        return (
            <article>
                <h2>
                    {this.props.title}
                </h2>
                {this.props.desc}
            </article>
        )
    }
}

export default Contents