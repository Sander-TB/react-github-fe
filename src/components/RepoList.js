import { useState, useEffect } from "react";

export default function RepoList({ username }) {
	const [repoList, setRepoList] = useState(null);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}/repos?sort=created`)
			.then((response) => response.json())
			.then(setRepoList)
			.catch((err) => console.log(err));
	}, [username]);

	if (repoList) {
		return (
			<ul>
				{repoList.map((repo) => {
					return (
						<li key={repo.id}>
							<a href={repo.html_url}>
								{repo.name} <i>ICON</i>
							</a>
						</li>
					);
				})}
			</ul>
		);
	}
	return "No data sorry";
}
