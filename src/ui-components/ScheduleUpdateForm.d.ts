/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Schedule } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScheduleUpdateFormInputValues = {
    name?: string;
    time?: string;
    day?: string;
    description?: string;
    location?: string;
    sortOrder?: number;
};
export declare type ScheduleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    day?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScheduleUpdateFormOverridesProps = {
    ScheduleUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    time?: FormProps<TextFieldProps>;
    day?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    sortOrder?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScheduleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScheduleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    schedule?: Schedule;
    onSubmit?: (fields: ScheduleUpdateFormInputValues) => ScheduleUpdateFormInputValues;
    onSuccess?: (fields: ScheduleUpdateFormInputValues) => void;
    onError?: (fields: ScheduleUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScheduleUpdateFormInputValues) => ScheduleUpdateFormInputValues;
    onValidate?: ScheduleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScheduleUpdateForm(props: ScheduleUpdateFormProps): React.ReactElement;
