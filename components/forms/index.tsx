import { FCFSForm } from "./FCFSForm";

export const Form = ({ name }: { name: string }) => {
	switch (name) {
		case "fcfs":
			return <FCFSForm />;

		default:
			break;
	}
};
