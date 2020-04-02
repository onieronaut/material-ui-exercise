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
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
	FormControl: {
		width: 500,
	},
});

export default withStyles(styles)(
	class extends Component {
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

		handleSubmit = () => {
			const { exercise } = this.state;

			this.props.onCreate({
				...exercise,
				id: exercise.title.toLocaleLowerCase().replace(/ /g, '-'),
			});

			this.setState({
				open: false,
				exercise: {
					title: '',
					description: '',
					muscles: '',
				},
			});
		};

		render() {
			const {
					open,
					exercise: { title, description, muscles },
				} = this.state,
				{ classes, muscles: categories } = this.props;

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
									className={classes.FormControl}
								/>
								<br />
								<FormControl className={classes.FormControl}>
									<InputLabel>Muscles</InputLabel>
									<Select
										value={muscles}
										onChange={this.handleChange('muscles')}>
										{categories.map(category => (
											<MenuItem key={category} value={category}>
												{category}
											</MenuItem>
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
									className={classes.FormControl}
								/>
							</form>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={this.handleSubmit}
								variant='contained'
								color='primary'>
								Create
							</Button>
						</DialogActions>
					</Dialog>
				</Fragment>
			);
		}
	}
);
