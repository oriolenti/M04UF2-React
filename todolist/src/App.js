import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import AnnouncementIcon from '@mui/icons-material/Announcement';

import './TODO.css';

class App extends React.Component {
  
  constructor(props) {
  	super(props);
	this.state = {
		tasklist: []
	};
  }

  addTask = (task) => {

	this.state.tasklist.unshift(task);
	this.setState ({
		tasklist: this.state.tasklist
	});
  }

  deleteTask = (taskNum) => {

	this.state.tasklist.splice(taskNum, 1);
	this.setState ({
		tasklist: this.state.tasklist
	});
  }

  render() {

  	return (
    	<Box 
			sx={{
				display:'flex',
				flexWrap:'wrap',
				justifyContent:'center',
				alignContent:'center',
				height: '100%',
				background: 'linear-gradient(#e66465, #9198e5)'
			}}
		>
			<Paper elevation={3}
				sx={{
					padding:'16px'
				}}
			>
				<Title text="ToDO App" />
				<TaskForm onAddTask={this.addTask} />
				<TaskList list={this.state.tasklist} onDeleteTask={this.deleteTask}/>
				<Chip 
					variant="outlined"
					color="info"
					icon={<Badge badgeContent={this.state.tasklist.length} color="info"><AnnouncementIcon color="action"/></Badge>}
					label="pending tasks"
				/>
			</Paper>
    	</Box>
  	);
  }
}

export default App;
