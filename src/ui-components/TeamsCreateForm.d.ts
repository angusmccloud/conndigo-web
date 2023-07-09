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
export declare type TeamsCreateFormInputValues = {
    name?: string;
    iconName?: string;
    description?: string;
};
export declare type TeamsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    iconName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsCreateFormOverridesProps = {
    TeamsCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    iconName?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamsCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamsCreateFormInputValues) => TeamsCreateFormInputValues;
    onSuccess?: (fields: TeamsCreateFormInputValues) => void;
    onError?: (fields: TeamsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeamsCreateFormInputValues) => TeamsCreateFormInputValues;
    onValidate?: TeamsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamsCreateForm(props: TeamsCreateFormProps): React.ReactElement;
