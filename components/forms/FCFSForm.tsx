"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { InferType, array, number, object, string } from "yup";

import { FormMessage } from ".";

const InputSchema = object({
	processId: string().required("Process ID is required"),
	arrivalTime: number()
		.required("Arrival Time is required")
		.positive("Arrival Time must be a positive number")
		.integer("Arrival Time must be an integer")
		.typeError("Arrival Time must be a number")
		.min(0, "Arrival Time can't be negative"),
	burstTime: number()
		.required("Burst Time is required")
		.positive("Burst Time must be a positive number")
		.integer("Burst Time must be an integer")
		.typeError("Burst Time must be a number")
		.min(0, "Burst Time can't be negative"),
});

const FCFSFormSchema = object({
	items: array(InputSchema).required(),
});

type FCFSFormType = InferType<typeof FCFSFormSchema>;

export const FCFSForm = () => {
	const {
		handleSubmit,
		reset,
		register,
		control,
		formState: { errors },
	} = useForm<FCFSFormType>({
		resolver: yupResolver(FCFSFormSchema),
		defaultValues: {
			items: [{ arrivalTime: 0, burstTime: 0, processId: "P1" }],
		},
	});

	const { append, remove, fields } = useFieldArray({
		control,
		name: "items",
	});

	const onSubmit = (data: FCFSFormType) => {
		alert(JSON.stringify(data, null, 2));
		reset();
	};

	const addField = () => {
		append({
			processId: `P${fields.length + 1}`,
			arrivalTime: 0,
			burstTime: 0,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-2 max-w-6xl mx-auto">
				{fields.map((f, index) => (
					<div key={f.id} className="p-2">
						<div className="flex flex-row items-center gap-20">
							<div>
								<label htmlFor={`items.${index}.processId`}>Process ID</label>
								<input
									type="text"
									{...register(`items.${index}.processId`)}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
								/>
								<div className="h-5">
									<FormMessage
										message={errors.items?.[index]?.processId?.message}
									/>
								</div>
							</div>
							<div>
								<label htmlFor={`items.${index}.arrivalTime`}>
									Arrival Time
								</label>
								<input
									{...register(`items.${index}.arrivalTime`, {
										valueAsNumber: true,
									})}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
								/>
								<div className="h-5">
									<FormMessage
										message={errors.items?.[index]?.arrivalTime?.message}
									/>
								</div>
							</div>
							<div>
								<label htmlFor={`items.${index}.burstTime`}>Burst Time</label>
								<input
									{...register(`items.${index}.burstTime`, {
										valueAsNumber: true,
									})}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
								/>
								<div className="h-5">
									<FormMessage
										message={errors.items?.[index]?.burstTime?.message}
									/>
								</div>
							</div>
							{fields.length > 1 && (
								<button
									type="button"
									className="text-red-600 mt-2 hover:text-red-800"
									onClick={() => remove(index)}
								>
									Remove
								</button>
							)}
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4 max-w-5xl gap-2 mx-auto">
				<button type="submit" className="btn">
					Submit
				</button>
				<button type="reset" onClick={() => reset()} className="btn btn-gray">
					Reset
				</button>
				<button type="button" onClick={addField} className="btn btn-blue">
					Add Process
				</button>
			</div>
		</form>
	);
};
