import { Form } from "@/components/forms";
import { nonPreemtive } from "@/lib/utils/data";

const Algorithm = ({ params }: { params: { algo: string } }) => {
	const header = nonPreemtive.find((p) => p.href === params.algo)?.name;

	return (
		<div className="px-4 py-6">
			<h2 className="h-20 text-2xl font-semibold text-white">{header}</h2>
			<div>
				<Form name={params.algo} />
			</div>
		</div>
	);
};

export default Algorithm;
