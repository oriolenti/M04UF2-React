import React from 'react';
import TaskItem from './TaskItem'
import List from '@mui/material/List'

class TaskList extends React.Component {

	constructor(props) {
	
		super(props);
		this.state = {
			items: this.props.list
		};
	
	}

	itemList = () => {
		
		let counter = -1;
		let tasks = this.state.items.map(task => {
			counter++;
			return (
				<TaskItem text={task} numTask={counter} onDeleteTask={this.props.onDeleteTask}/>
			);
		});

		return tasks;
	}

	render() {
		
		const tasks = this.itemList();

		return (
		
		<List>
			{tasks}
		</List>
		);
	}
}

export default TaskList;
