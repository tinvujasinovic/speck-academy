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
	const [filter, setFilter] = useState(null);
	const eventsList = AllEvents;



	useEffect(() => {
		const timeout = setTimeout(() => {
			setEvents(eventsList);
			setDisabled(false);
		}, 1000);

		const result = eventsList.filter(x =>
			x.title.toLowerCase().includes(filter)
		);
		setEvents(result);
		
		return () => { clearTimeout(timeout) }
	}, [eventsList, filter]);

	const handleSearch = (text) => {
		setFilter(text.toLowerCase());
	}

	const createEventCards = (list) => {

		const result = filter ? list.filter(x =>
			x.title.toLowerCase().includes(filter)
		) : list;

		return result.map((event, index) => {
			return <EventCard
				key={index}
				id={event.id}
				title={event.title}
				location={event.location}
				time={event.dateTime}
				availablePlaces={event.availability}
				company={event.company}
			/>
		})
	};

	return (
		<>
			<Section title="Events">

				<SearchBar placeholder="Search events by title..." onValueChange={handleSearch} disabled={disabled} />
				{!disabled ?
					<>
						<Grid columns={4}>
							{createEventCards(events)}
						</Grid>
					</>
					: <Load />
				}

			</Section>
		</>
	);
}

export default Events;