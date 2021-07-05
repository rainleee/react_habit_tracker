import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;

        //input box에 입력한 값을 onAdd props 인자값으로 전달
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    }

    onClick = () => {
        alert('hello world!');
    }

    render() {
        return (
            <>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                    <input type="text" className="add-input" ref={this.inputRef} placeholder="취미를 입력하세요." />
                    <button className="add-button">Add</button>
                </form>
            </>
        );
    }
}

export default HabitAddForm;