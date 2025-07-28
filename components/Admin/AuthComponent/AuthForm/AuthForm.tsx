import {FC} from "react";
import {useFormik} from "formik";
import TextField from "@ui/TextField";
import Button from "@ui/Button";
import {AuthFormBodyModel} from "@models/interfaces";

interface AuthFormModel {
    onSubmit: (values: AuthFormBodyModel) => void
}

export const AuthForm: FC<AuthFormModel> = (
    {
        onSubmit
    }
) => {

    let {
        values,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values, {resetForm}) => {
            await onSubmit(values);
            resetForm();
        }
    });

    return (
        <div className={"w-full flex items-center flex-col gap-3 justify-center"}>
            <TextField
                inputClassName={"bg-white"}
                placeholder={"Username"}
                onChange={handleChange}
                name={"username"}
                value={values.username}
            />
            <TextField
                type={"password"}
                inputClassName={"bg-white"}
                placeholder={"Password"}
                onChange={handleChange}
                name={"password"}
                value={values.password}
            />
            <Button
                disabled={!values.username || !values.password}
                hover={"background"}
                onClick={() => handleSubmit()}
            >
                Log in
            </Button>
        </div>
    )
}