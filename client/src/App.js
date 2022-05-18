import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthorForm from "./components/AuthorForm";
import AllAuthors from "./components/AllAuthors";
import EditAuthor from "./components/EditAuthor";
import Error from "./components/Error";

function App() {
	return (
		<BrowserRouter>
			<div className="App container p-3 bg-light">
				<h1 className="text-center">Favorite authors</h1>
				<Switch>
					<Route exact path="/">
						<AllAuthors />
					</Route>
					<Route exact path="/authors/add">
						<AuthorForm />
					</Route>
					<Route exact path="/authors/edit/:id">
						<EditAuthor />
					</Route>
					<Route exact path="/error">
						<Error />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
