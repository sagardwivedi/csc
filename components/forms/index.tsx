import { FCFSForm } from "./FCFSForm";

export const FormMessage = ({ message }: { message: string | undefined }) => {
	return <span className="text-sm text-red-600">{message}</span>;
};

export const Form = ({ name }: { name: string }) => {
	switch (name) {
		case "fcfs":
			return <FCFSForm />;

		default:
			break;
	}
};
