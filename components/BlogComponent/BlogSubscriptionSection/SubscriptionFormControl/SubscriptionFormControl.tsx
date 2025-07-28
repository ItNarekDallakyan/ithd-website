import {FC, useContext, useState} from "react";
import {Formik} from "formik";
import {SUBSCRIPTION_FORM_SCHEMA} from "@common/schemas";
import TextField from "@ui/TextField";
import Button from "@ui/Button";
import {SubscriptionBodyModel} from "@models/interfaces/services";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

interface SubscriptionFormControlModel {
    onSubmit: (values: SubscriptionBodyModel) => void
}

export const SubscriptionFormControl: FC<SubscriptionFormControlModel> = (
    {
        onSubmit
    }
) => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let [isLoading, setLoading] = useState<boolean>(false);

    let {
        name,
        email
    } = localizations[currentLanguage].blog.subscription.form;

    return (
        <Formik
            initialValues={{
                name: "",
                email: ""
            }}
            onSubmit={async (values, {resetForm}) => {
                setLoading(true);
                await onSubmit(values);
                resetForm();
                setLoading(false);
            }}
            validationSchema={SUBSCRIPTION_FORM_SCHEMA}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit
            }) => (
                <div className={"w-full flex gap-3 items-start max-w-2xl max-sm:flex-col"}>
                    <TextField
                        containerClassName={"w-full"}
                        error={errors.name && touched.name && errors.name}
                        placeholder={name}
                        onChange={handleChange}
                        name={"name"}
                        value={values.name}
                    />
                    <TextField
                        error={errors.email && touched.email && errors.email}
                        placeholder={email}
                        onChange={handleChange}
                        name={"email"}
                        value={values.email}
                    />
                    <Button
                        isLoading={isLoading}
                        hover={"background"}
                        onClick={() => handleSubmit()}
                        color={"dark"}
                    >
                        Submit
                    </Button>
                </div>
            )}
        </Formik>
    )
}