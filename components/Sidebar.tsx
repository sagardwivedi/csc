import { nonPreemtive } from "@/lib/utils/data";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<div className="w-64 h-full">
			<h1 className="text-4xl font-semibold text-white h-20 inline-flex justify-center items-center w-full text-center">
				CSC
			</h1>
			<div>
				<div className="collapse collapse-arrow">
					<input type="radio" name="ma-1" id="ma-1" defaultChecked />
					<p className="collapse-title font-medium">Non Preemtive</p>
					<div className="collapse-content flex flex-col">
						{nonPreemtive.map((np) => (
							<Link
								key={np.href}
								className="truncate my-1 hover:bg-gray-500 rounded-md p-2 hover:text-white"
								href={np.href}
							>
								{np.name}
							</Link>
						))}
					</div>
				</div>
				<div className="collapse collapse-arrow">
					<input type="radio" name="ma-1" id="ma-1" />
					<p className="collapse-title font-medium">Preemtive</p>
					<div className="collapse-content">
						<Link href="rr">Round Robin (RR)</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
