import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
	"use server";

	console.log(data);

	const title = data.get("title")?.valueOf();

	if (title == "" || typeof title !== "string") {
		throw new Error("Invalid Title");
	}

	await prisma.todo.create({ data: { title, complete: false } });
	redirect("/");
}

export default function TodoFunction() {
	return (
		<>
			<header className="flex justify-around items-center shadow-gray-600 shadow-lg">
				<h1 className="py-8 text-2xl font-extrabold text-center xl:text-4xl">
					New Todo
				</h1>
				<Link
					href={"/"}
					className="border border-white py-2 px-4 text-xl transition-all ease-in-out duration-500
          rounded-md hover:bg-white hover:text-gray-700"
				>
					All Todos
				</Link>
			</header>

			<div className="flex justify-center transition-shadow duration-700 ease-out mt-32 shadow-gray-600 hover:shadow-lg w-11/12 xl:w-5/12 mx-auto bg-gray-500 rounded-md">
				<form
					action={createTodo}
					className="mt-4 grid gap-4 place-items-center w-3/4 p-10"
				>
					<input
						type="text"
						placeholder="Title"
						className="bg-gray-100 text-gray-700 rounded-md p-2 focus:outline-none
						focus:ring-1
						focus:ring-gray-500 focus:bg-white focus:text-black mb-2 w-11/12 "
					/>
					<textarea
						placeholder="Description"
						className="bg-gray-100 text-gray-700 rounded-md p-2 focus:ring-1
						focus:ring-gray-500 focus:bg-white focus:text-black mb-2 w-11/12"
					></textarea>
					<button
						type="submit"
						className="border border-white bg-white py-2 px-4 text-xl transition-all ease-in-out duration-500
      rounded-md text-black hover:bg-transparent hover:text-white w-2/5"
					>
						Add Todo
					</button>
				</form>
			</div>
		</>
	);
}
