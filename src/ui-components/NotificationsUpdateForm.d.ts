/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Notifications } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationsUpdateFormInputValues = {
    userId?: string;
    read?: boolean;
    messageBody?: string;
    linking?: string;
    subject?: string;
    displayTime?: string;
};
export declare type NotificationsUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    read?: ValidationFunction<boolean>;
    messageBody?: ValidationFunction<string>;
    linking?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    displayTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsUpdateFormOverridesProps = {
    NotificationsUpdateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    read?: FormProps<SwitchFieldProps>;
    messageBody?: FormProps<TextFieldProps>;
    linking?: FormProps<TextFieldProps>;
    subject?: FormProps<TextFieldProps>;
    displayTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notifications?: Notifications;
    onSubmit?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onSuccess?: (fields: NotificationsUpdateFormInputValues) => void;
    onError?: (fields: NotificationsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onValidate?: NotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsUpdateForm(props: NotificationsUpdateFormProps): React.ReactElement;
