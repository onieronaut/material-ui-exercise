import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Box, Typography, Card, CardHeader, CardContent, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkIcon from '@material-ui/icons/Work';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
});
function App() {
	const classes = useStyles();

	return (
		<div>
			<Grid container direction='row' justify='center' alignItems='center'>
				<Grid item xs={6}>
					<Card className={classes.root} variant='outlined'>
						<CardHeader title='Find Your Perfect Beautician'></CardHeader>
						<CardContent>
							<WorkIcon color='secondary' />
							<Typography variant='h6'>Select Your Service</Typography>
							<Typography color='textSecondary'>
								Choose from local or remote professionals
							</Typography>
						</CardContent>
						<CardContent>
							<LocationOnIcon color='secondary' />
							<Typography variant='h6'>Search Near Your Location</Typography>
							<Typography color='textSecondary'>Easy to Navigate Maps</Typography>
						</CardContent>
						<CardContent>
							<ScheduleIcon color='secondary' />
							<Typography variant='h6'>Book An Appointment</Typography>
							<Typography color='textSecondary'>Instantly See Availability</Typography>
						</CardContent>
						<CardContent>
							<InsertEmoticonIcon color='secondary' />
							<Typography variant='h6'>Treat Yourself!</Typography>
							<Typography color='textSecondary'>
								Leave a review, Upload A Picture of your Service!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card className={classes.root} variant='outlined'>
						<CardHeader title='Connect With Your Clients'></CardHeader>
						<CardContent>
							<WorkIcon color='secondary' />
							<Typography variant='h6'>Select Your Service</Typography>
							<Typography color='textSecondary'>
								Choose from local or remote professionals
							</Typography>
						</CardContent>
						<CardContent>
							<LocationOnIcon color='secondary' />
							<Typography variant='h6'>Search Near Your Location</Typography>
							<Typography color='textSecondary'>Easy to Navigate Maps</Typography>
						</CardContent>
						<CardContent>
							<ScheduleIcon color='secondary' />
							<Typography variant='h6'>Book An Appointment</Typography>
							<Typography color='textSecondary'>Instantly See Availability</Typography>
						</CardContent>
						<CardContent>
							<InsertEmoticonIcon color='secondary' />
							<Typography variant='h6'>Treat Yourself!</Typography>
							<Typography color='textSecondary'>
								Leave a review, Upload A Picture of your Service!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
