import { useState } from "react";
import type { filterType } from "../../App";
import { CardTask, type PropsTask } from "./CardTask";
import { CreateTask } from "./CreateTask";

export const TaskPage = () => {
	const [filter, setFilter] = useState<filterType>("all");
	const [tasks, setTasks] = useState<PropsTask[]>([
		{ id: 1, title: "Tarefa 1", description: "Descrição da tarefa 1", completed: false },
		{ id: 2, title: "Tarefa 2", description: "Descrição da tarefa 2", completed: true },
	]);

	let filteredTasks: PropsTask[] = [];
	if (filter === "all") {
		filteredTasks = tasks;
	} else if (filter === "completed") {
		filteredTasks = tasks.filter((task) => task.completed);
	} else if (filter === "pending") {
		filteredTasks = tasks.filter((task) => !task.completed);
	}
	return (
		<>
			<CreateTask setTasks={setTasks} setFilter={setFilter}>
				{filteredTasks.map((task) => {
					return (
						<CardTask
							key={task.id}
							id={task.id}
							title={task.title}
							description={task.description}
							completed={task.completed}
							setTasks={setTasks}
						/>
					);
				})}
			</CreateTask>
		</>
	);
};

