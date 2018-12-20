import React from 'react'

const Header = (props) => (
    <div>
        <h1 className={'mainTitle'}>{props.mainTaitle}</h1>
        <input value={props.valueInput} className={'inputText'} onChange={props.ChangeHendler} type="text"/>
        <button className={'addBtn'} onClick={props.clickHandler}>Add</button>
    </div>
);

export default Header