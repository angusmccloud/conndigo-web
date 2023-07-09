/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FAQ } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FAQUpdateFormInputValues = {
    question?: string;
    answer?: string;
    sortOrder?: number;
};
export declare type FAQUpdateFormValidationValues = {
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQUpdateFormOverridesProps = {
    FAQUpdateFormGrid?: FormProps<GridProps>;
    question?: FormProps<TextFieldProps>;
    answer?: FormProps<TextFieldProps>;
    sortOrder?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FAQUpdateFormProps = React.PropsWithChildren<{
    overrides?: FAQUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fAQ?: FAQ;
    onSubmit?: (fields: FAQUpdateFormInputValues) => FAQUpdateFormInputValues;
    onSuccess?: (fields: FAQUpdateFormInputValues) => void;
    onError?: (fields: FAQUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FAQUpdateFormInputValues) => FAQUpdateFormInputValues;
    onValidate?: FAQUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FAQUpdateForm(props: FAQUpdateFormProps): React.ReactElement;
