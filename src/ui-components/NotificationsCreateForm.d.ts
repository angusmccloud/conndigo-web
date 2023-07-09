/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationsCreateFormInputValues = {
    userId?: string;
    read?: boolean;
    messageBody?: string;
    linking?: string;
    subject?: string;
    displayTime?: string;
};
export declare type NotificationsCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    read?: ValidationFunction<boolean>;
    messageBody?: ValidationFunction<string>;
    linking?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    displayTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsCreateFormOverridesProps = {
    NotificationsCreateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    read?: FormProps<SwitchFieldProps>;
    messageBody?: FormProps<TextFieldProps>;
    linking?: FormProps<TextFieldProps>;
    subject?: FormProps<TextFieldProps>;
    displayTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationsCreateFormInputValues) => NotificationsCreateFormInputValues;
    onSuccess?: (fields: NotificationsCreateFormInputValues) => void;
    onError?: (fields: NotificationsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NotificationsCreateFormInputValues) => NotificationsCreateFormInputValues;
    onValidate?: NotificationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsCreateForm(props: NotificationsCreateFormProps): React.ReactElement;
