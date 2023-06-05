"use client"
type TodoCompProps = {
	id: string;
	title: string;
	completed: boolean;
	toggleCompleted: (id: string, complete: boolean) => void;
};

export default function TodoComp({id, title, completed, toggleCompleted} :TodoCompProps) {
    return (
		<li className="flex gap-1 items-center">
			<input
				id={id}
                className="peer cursor-pointer"
				type="checkbox"
				name="checbox"
				defaultChecked={completed}
				onChange={(e) => toggleCompleted(id, e.target.checked)}
			/>
			<label htmlFor={id} className="peer-checked:line-through peer-checked:text-gray-600" >{title}</label>
		</li>
	);
}