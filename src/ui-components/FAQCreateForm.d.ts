/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FAQCreateFormInputValues = {
    question?: string;
    answer?: string;
    sortOrder?: number;
};
export declare type FAQCreateFormValidationValues = {
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQCreateFormOverridesProps = {
    FAQCreateFormGrid?: FormProps<GridProps>;
    question?: FormProps<TextFieldProps>;
    answer?: FormProps<TextFieldProps>;
    sortOrder?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAQCreateFormProps = React.PropsWithChildren<{
    overrides?: FAQCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FAQCreateFormInputValues) => FAQCreateFormInputValues;
    onSuccess?: (fields: FAQCreateFormInputValues) => void;
    onError?: (fields: FAQCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FAQCreateFormInputValues) => FAQCreateFormInputValues;
    onValidate?: FAQCreateFormValidationValues;
} & React.CSSProperties>;
export default function FAQCreateForm(props: FAQCreateFormProps): React.ReactElement;
