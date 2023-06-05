import Link from "next/link";
import { prisma } from "./db";
import TodoComp from "../components/TodoComp";

async function toggleCompleted(id: string, completed: boolean) {
	"use server";

	await prisma.todo.update({ where: { id }, data: { complete: completed } });
} 

export default async function Home() {
	const todos = await prisma.todo.findMany();

	return (
		<>
			<header className="flex justify-around items-center shadow-gray-600 shadow-lg">
				<h1 className="py-8 text-2xl font-extrabold text-center xl:text-4xl">
					TaskWhiz
				</h1>
				<Link
					href={"/new"}
					className="border border-white py-2 px-4 text-xl transition-all ease-in-out duration-500
          rounded-md hover:bg-white hover:text-gray-700"
				>
					New Todo
				</Link>
			</header>

			<ul className="flex justify-center py-5">
				{todos.map(todo=> (					
        <TodoComp
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.complete}
						toggleCompleted={toggleCompleted}
					/>
          ))}
			</ul>
		</>
	);
}
