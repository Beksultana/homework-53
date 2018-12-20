import React from 'react'

export default props => {


    return(
        <div className={'blockText'}>
            <p className={'textTasks'}>
                <input onChange={props.checkboxS} className={'checkbox'} type="checkbox"/>
                {props.task}<button onClick={props.DeleteTasks} className={'removeBtn'}>Delete</button>
            </p>

            {props.children}
        </div>
    )

}