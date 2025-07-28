import {FC, useRef, useState} from "react";
import {Formik} from "formik";
import TextField from "@ui/TextField";
import Button from "@ui/Button";
import {PARTNER_FORM_SCHEMA} from "@common/schemas";
import {ContactRequestBodyModel} from "@models/interfaces/services";
import Textarea from "@ui/Textarea";
import cs from "classnames";
import Checkbox from "@ui/Checkbox";
import PrivacyLabel from "@components/PartnerComponent/PartnerFormControl/PrivacyLabel";

interface PartnerFormControl {
    onSubmit: (formElement: HTMLFormElement, values: ContactRequestBodyModel) => void,
    inputClassName?: string
}

export const PartnerFormControl: FC<PartnerFormControl> = (
    {
        onSubmit,
        inputClassName
    }
) => {

    const ref = useRef<HTMLFormElement | null>(null);

    const [isPrivacyChecked, setPrivacyChecked] = useState<boolean>(false);
    let [isLoading, setLoading] = useState<boolean>(false);

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: ""
            }}
            onSubmit={async (values, {resetForm}) => {
                setLoading(true);
                let {current} = ref;
                if (!current) return;
                await onSubmit(current, values);
                resetForm();
                setLoading(false);
            }}
            validationSchema={PARTNER_FORM_SCHEMA}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched
              }) => (
                <form ref={ref} onSubmit={handleSubmit} className={"flex flex-col xl:space-y-5 space-y-4"}>
                    <TextField
                        inputClassName={inputClassName}
                        error={errors.name && touched.name && errors.name}
                        label={"Name"}
                        onChange={handleChange}
                        name={"name"}
                        value={values.name}
                    />
                    <TextField
                        inputClassName={inputClassName}
                        error={errors.email && touched.email && errors.email}
                        label={"Email address"}
                        onChange={handleChange}
                        name={"email"}
                        value={values.email}
                    />
                    <Textarea
                        className={cs({
                            [inputClassName as string]: inputClassName
                        }, "min-h-[100px] max-h-[200px] h-auto")}
                        label={"How can we help?"}
                        error={errors.message && touched.message && errors.message}
                        value={values.message}
                        onChange={handleChange}
                        name={"message"}
                    />
                    <div className={"flex items-center justify-between gap-5"}>
                        <Checkbox
                            isChecked={isPrivacyChecked}
                            setChecked={setPrivacyChecked}
                            label={<PrivacyLabel />}
                        />
                        <Button
                            isLoading={isLoading}
                            size={"large"}
                            type={"submit"}
                            disabled={!isPrivacyChecked}
                            color={"dark"}
                        >
                            Get in touch
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    )
}