import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        }
    }
    setEditingState = (isEditing) => {
        this.setState({isEditing:isEditing});
    }
    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    }
    render() {
        return (
        <tr>
            {this.state.isEditing?
            <>
                <td>
                    <form>
                        <input value={this.state.task} 
                            onChange={this.handleChange}
                            autoFocus
                        />
                    </form>
                </td>
                <td>
                    <button>Edit</button>
                    <button onClick={this.deleteTask}>Delete</button>
                </td>
            </>
        ) : (
            <>
                <td>{this.props.taskItem.task}</td>
                <td>
                    <button onClick={() => this.setEditingState(true)}>Edit</button>
                    <button onClick={this.deleteTask}>Delete</button>
                </td>
            </>
        )}
        </tr>
        );
    }
}
