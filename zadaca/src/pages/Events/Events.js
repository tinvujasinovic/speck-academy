import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import { Grid } from '../../lib/style/generalStyles';
import Section from '../../components/Section/Section';
import Load from '../../components/Load/Load';
import AllEvents from '../../lib/mock/events';
import SearchBar from '../../components/SearchBar/SearchBar';

const Events = () => {
	const [events, setEvents] = useState([]);
	const [disabled, setDisabled] = useState(true);

	setTimeout(() => {
		setEvents(AllEvents.map((event, index) => {
			return <EventCard
				key={index}
				id={event.id}
				title={event.title}
				location={event.location}
				time={event.dateTime}
				availablePlaces={event.availability}
				company={event.company}
			/>
		}));
		setDisabled(false);
	}, 1000);

	useEffect(() => {


	}, []);

	const handleSearch = (text) => {
		setEvents([])
		let filter = text.toLowerCase();

		let filteredEvents = AllEvents.filter(x => x.title.toLowerCase().includes(filter));

		setEvents(filteredEvents.map((event, index) => {
			return <EventCard
				key={index}
				id={event.id}
				title={event.title}
				location={event.location}
				time={event.dateTime}
				availablePlaces={event.availability}
				company={event.company}
			/>
		}));
	}

	return (
		<>
			<Section title="Events">

				<SearchBar placeholder="Search events by title..." onValueChange={handleSearch} disabled={disabled} />
				{!disabled ?
					<>
						<Grid columns={4}>
							{events}
						</Grid>
					</>
					: <Load />
				}

			</Section>
		</>
	);
}

export default Events;