import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;

        //input box에 입력한 값을 onAdd props 인자값으로 전달
        // this.inputRef.current.value = '';
        name && props.onAdd(name);
        formRef.current.reset();
    }

    return (
        <>
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input type="text" className="add-input" ref={inputRef} placeholder="취미를 입력하세요." />
                <button className="add-button">Add</button>
            </form>
        </>
    )
});

export default HabitAddForm;