import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const todo = [1, 2, 3, 4, 5];
const listItems = todo.map(todo => <li key={todo.toString()}>{todo}</li>);

export const TodoList = () => {
	var [inputValue, setInputValue] = React.useState("");
	const [list, setList] = React.useState([]);

	function handleRemove(task) {
		const newList = list.filter(item => item !== task);

		setList(newList);
	}

	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="col-8 justify-content-center">
				<h1 className="text-center">Todos:</h1>

				<ul className="list-group text-center">
					<input
						type="text"
						onKeyPress={e => {
							if (e.key === "Enter") {
								if (inputValue === "") {
									alert("The input cannot be empty");
								} else {
									setList(list.concat(inputValue));
									setInputValue((inputValue = ""));
								}
							}
						}}
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
					/>
					{list.map((item, index) => {
						return (
							<li
								className="list-group-item"
								key={item.toString()}>
								{item}
								<div className="icon ml-auto">
									<i
										className="fas fa-backspace"
										onClick={() => handleRemove(item)}></i>
								</div>
							</li>
						);
					})}
				</ul>
				<p>item left: {list.length}</p>
			</div>
		</div>
	);
};
