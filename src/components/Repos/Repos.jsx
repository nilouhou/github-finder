import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
	return (
		<div>
			<h2>Latest Repos</h2>
			{repos.map((repo) => {
				return <RepoItem repo={repo} key={repo.id} />;
			})}
		</div>
	);
};

export default Repos;
