/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Teams } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamsUpdateFormInputValues = {
    name?: string;
    iconName?: string;
    description?: string;
};
export declare type TeamsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    iconName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamsUpdateFormOverridesProps = {
    TeamsUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    iconName?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teams?: Teams;
    onSubmit?: (fields: TeamsUpdateFormInputValues) => TeamsUpdateFormInputValues;
    onSuccess?: (fields: TeamsUpdateFormInputValues) => void;
    onError?: (fields: TeamsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeamsUpdateFormInputValues) => TeamsUpdateFormInputValues;
    onValidate?: TeamsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamsUpdateForm(props: TeamsUpdateFormProps): React.ReactElement;
