// import { ComponentProps } from "react";
// import { useFormState } from "react-hook-form";

// type FormSubmitProps = {
//     children: React.ReactNode;
//     className?: string;
// } & ComponentProps<"button">;

// export default function FormSubmit({
//     children,
//     className,
// }: FormSubmitProps) {
//     const { isPending } = useFormState();

//     return (
//         <button
//             className={`btn btn-primary btn-block ${className}`}
//             type="submit"
//             disabled={isPending}
//         >
//             {isPending && <span className="loading loading-spinner"></span>}
//             {children}
//         </button>
//     );
// }
