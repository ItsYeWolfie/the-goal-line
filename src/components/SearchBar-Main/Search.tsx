import { useEffect, useRef, useState } from 'react';
import fetchData from '../../../lib/helpers/Fetch';
import { ICoaches } from '../../../types/CoachesPage.types';
import { FootballMatch } from '../../../types/Fixture-Main.types';
import { SearchPlayer } from '../../../types/SearchPlayer.types';
import { IVenue } from '../../../types/Venue.types';
import SearchCoachResult from './Search-Coach';
import SearchIcon from './Search-Icon';
import SearchModal from './Search-Modal';
import PlayerResult from './Search-Player';
import SearchTeamResult from './Search-Team';
import SearchVenueResult from './Search-Venue';

export default function Search() {
	const [hidden, setHidden] = useState(true);
	const [matches, setMatches] = useState<FootballMatch[]>([]);
	const [players, setPlayers] = useState<SearchPlayer[]>([]);
	const [filterPlayers, setFilterPlayers] = useState<SearchPlayer[]>([]);
	const [filteredMatches, setFilteredMatches] = useState<FootballMatch[]>([]);
	const [coach, setCoach] = useState<ICoaches[]>([]);
	const [venue, setVenue] = useState<IVenue[]>([]);
	const [filterVenue, setFilterVenue] = useState<IVenue[]>([]);
	const [filterCoach, setFilterCoach] = useState<ICoaches[]>([]);
	const searchRef = useRef<HTMLInputElement>(null);
	const [selectedOption, setSelectedOption] = useState('Team');

	useEffect(() => {
		fetchData<FootballMatch[]>('https://api.npoint.io/cfdd9340ece0aa795c9e').then((data) => {
			setMatches(data);
			setFilteredMatches(data.slice(0, 10));
		});
		fetchData<SearchPlayer[]>('https://api.npoint.io/8d996f27035b708c6e9f').then((result) => {
			setPlayers(result);
			setFilterPlayers(result.slice(0, 10));
		});
		fetchData<ICoaches[]>('https://api.npoint.io/e471eb968617878ba05f').then((result) => {
			setCoach(result);
			setFilterCoach(result.slice(0, 1));
		});
		fetchData<IVenue[]>('https://api.npoint.io/383138d98ef41e68a0ce').then((result) => {
			setVenue(result);
			setFilterVenue(result.slice(0, 1));
		});
	}, []);

	const handleSearchChange = () => {
		if (searchRef.current) {
			const searchText = searchRef.current.value;
			const filteredData2 = players.filter((player) => {
				return player.name.toLowerCase().includes(searchText.toLowerCase());
			});
			setFilterPlayers(filteredData2);

			const filteredData3 = coach.filter((coaches) => {
				return coaches.name.toLowerCase().includes(searchText.toLowerCase());
			});
			setFilterCoach(filteredData3);

			const filteredData4 = venue.filter((venues) => {
				return venues.name.toLowerCase().includes(searchText.toLowerCase());
			});
			setFilterVenue(filteredData4);

			const filteredData = matches.filter((match) => {
				return match.teams.home.name.toLowerCase().includes(searchText.toLowerCase());
			});
			const uniqueData = filteredData.filter((item, index, self) => {
				return self.findIndex((t) => t.teams.home.name === item.teams.home.name) === index;
			});
			const updatedFilteredData = uniqueData.map((item, index) => {
				return { ...item, index: index + 1 };
			});
			setFilteredMatches(updatedFilteredData);
		}
	};

	const handleSearchClick = () => {
		setHidden(false);
	};

	const handleCloseClick = () => {
		setHidden(true);
	};

	const showResults = () => {
		switch (selectedOption) {
			case 'Team':
				return filteredMatches.map((match) => (
					<SearchTeamResult
						key={match.teams.home.id}
						match={match}
					/>
				));
			case 'Player':
				return filterPlayers.map((player) => (
					<PlayerResult
						key={player.id}
						player={player}
					/>
				));
			case 'Coach':
				return filterCoach.map((coaches) => (
					<SearchCoachResult
						key={coaches.id}
						coach={coaches}
					/>
				));
			case 'Venue':
				return filterVenue.map((venues) => (
					<SearchVenueResult
						key={venues.id}
						venue={venues}
					/>
				));
			default:
				return null;
		}
	};

	return (
		<>
			<SearchIcon handleSearchClick={handleSearchClick} />
			<SearchModal
				searchRef={searchRef}
				setSelectedOption={setSelectedOption}
				handleCloseClick={handleCloseClick}
				hidden={hidden}
				handleSearchChange={handleSearchChange}
			>
				{showResults()}
			</SearchModal>
		</>
	);
}