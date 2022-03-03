import React, { useState, useContext } from "react";
import GithubContext from "../../context/GithubContext/GithubContext";
import AlertContext from "../../context/Alert/AlertContext";
import { serachUsers } from "../../context/GithubContext/GithubActions";

const Search = () => {
	const [query, setQuery] = useState("");
	const { users, setClear, dispatch } = useContext(GithubContext);
	const { alert, setAlert } = useContext(AlertContext);

	const handleChange = (e) => setQuery(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (query !== "") {
			dispatch({ type: "SET_LOADING" });
			// Becuase searchUseres returning data, we need to make handle submit asyn function
			const usersData = await serachUsers(query);

			dispatch({
				type: "GET_USERS",
				payload: usersData,
			});
		} else {
			setAlert("Please type users");
		}

		setQuery("");
	};

	const handleClear = () => {
		setClear();
	};

	return (
		<div>
			<p>{alert}</p>
			<div className="grid grid-cols-6 gap-4 mb-6">
				<div className="col-start-2 col-span-4 ...">
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<div className="relative">
								<input
									type="text"
									className="w-full pr-40 bg-gray-200 input input-lg text-black"
									placeholder="Search"
									value={query}
									onChange={handleChange}
								/>
								<button
									type="submit"
									className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
								>
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
				{users.length > 0 && (
					<div>
						<button onClick={handleClear} className="btn btn-ghost btn-lg">
							Clear
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
