import { useState, useEffect } from "react";
import "./sass/App.css";
import Heading from "./components/Heading";
import ProfilePhoto from "./components/ProfilePhoto";
import RepoList from "./components/RepoList";

function App({ username }) {
	// const { username } = props;
	const [myGithubData, setMyGithubData] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then(setMyGithubData)
			.catch((err) => console.log(err));
	}, [username]);

	if (myGithubData) {
		return (
			<div className='App'>
				<header className='App-header'>
					<ProfilePhoto
						avatarUrl={myGithubData.avatar_url}
						avatarAlt={myGithubData.name}
					/>
					<Heading name={myGithubData.name} />
					<RepoList username={username} />
				</header>
			</div>
		);
	}

	return (
		<div className='App'>
			<header className='App-header'>NO DATA SORRY</header>
		</div>
	);
}

export default App;
