import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      // { id: 1, name: 'Reading', count: 0 },
      // { id: 2, name: 'Running', count: 0 },
      // { id: 3, name: 'coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(stateHabit => {
      if (stateHabit.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return stateHabit;
      }
    });
    this.setState({ habits });
  }

  handleDecrement = habit => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = (count < 0) ? 0 : count;

    const habits = this.state.habits.map(stateHabit => {
      if (stateHabit.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return stateHabit;
      }
    });
    this.setState({ habits });
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({ habits });
  };

  handleAllReset = () => {
    const habitChecked = this.state.habits.length;

    if (habitChecked) {
      const habits = [];
      this.setState({ habits });
    } else {
      alert('초기화 할 취미가 없습니다.');
    }
  };

  handleCountReset = () => {
    // const habits = [...this.state.habits];
    // if (habits.length !== 0) {
    //   habits.map(habit => {
    //     console.log(habit);
    //     habit.count = 0;
    //     return habit;
    //   })
    //   this.setState({ habits });
    // } else {
    //   alert('등록된 취미가 없습니다.');
    // }

    const habits = this.state.habits.map(habit => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    })

    this.setState({ habits });


  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />

        < Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onAllReset={this.handleAllReset}
          onCountReset={this.handleCountReset}
        />
      </>
    )
  };
}
export default App;
