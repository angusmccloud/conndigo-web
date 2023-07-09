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
export declare type ScheduleCreateFormInputValues = {
    name?: string;
    time?: string;
    day?: string;
    description?: string;
    location?: string;
    sortOrder?: number;
};
export declare type ScheduleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScheduleCreateFormOverridesProps = {
    ScheduleCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    time?: FormProps<TextFieldProps>;
    day?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    sortOrder?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: ScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScheduleCreateFormInputValues) => ScheduleCreateFormInputValues;
    onSuccess?: (fields: ScheduleCreateFormInputValues) => void;
    onError?: (fields: ScheduleCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScheduleCreateFormInputValues) => ScheduleCreateFormInputValues;
    onValidate?: ScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScheduleCreateForm(props: ScheduleCreateFormProps): React.ReactElement;
