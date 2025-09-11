import { TaskPage } from "./components/task/TaskPage";

export type filterType = "all" | "completed" | "pending";

function App() {
	return <TaskPage />;
}

export default App;
