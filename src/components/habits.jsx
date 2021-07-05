import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
import ResetBtn from './resetBtn';

class Habits extends Component {

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        < Habit key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <ResetBtn onAllReset={this.props.onAllReset}
                    onCountReset={this.props.onCountReset}
                />
            </>
        );
    }
}

export default Habits;