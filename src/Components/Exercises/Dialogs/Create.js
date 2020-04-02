import React, { Component, Fragment } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

export default class extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: '',
		},
	};

	handleToggle = () => {
		this.setState({
			open: !this.state.open,
		});
	};

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value,
			},
		});
	};

	render() {
		const {
				open,
				exercise: { title, description, muscles },
			} = this.state,
			{ muscles: categories } = this.props;

		return (
			<Fragment>
				<Button onClick={this.handleToggle} variant='fab' mini>
					<Add />
				</Button>
				<Dialog
					open={open}
					onClose={this.handleToggle}
					aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>Creat Exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>Fill out form</DialogContentText>
						<form>
							<TextField
								label='Title'
								value={title}
								onChange={this.handleChange('title')}
							/>
							<br />
							<FormControl>
								<InputLabel>Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange('muscles')}>
									{categories.map(category => (
										<MenuItem value={category}>{category}</MenuItem>
									))}
								</Select>
							</FormControl>
							<br />
							<TextField
								label='Description'
								value={description}
								onChange={this.handleChange('description')}
								multiline
								rows='4'
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button variant='contained' color='primary'>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
