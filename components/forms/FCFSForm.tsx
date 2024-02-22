import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { InferType, number, object, string } from "yup";

const FCFSFormSchema = object({
	processId: string().required(),
	arrivalTime: number().required().positive().integer(),
	burstTime: number().required().positive().integer(),
});

type FCFSFormType = InferType<typeof FCFSFormSchema>;

export const FCFSForm = () => {
	const { reset, register, control } = useForm<FCFSFormType>({
		resolver: yupResolver(FCFSFormSchema),
	});

	// const { append, remove } = useFieldArray({
	// 	control,
	// 	keyName: "id",
	// 	name: "fcfs",
	// });

	return <div>FCFS Form</div>;
};
