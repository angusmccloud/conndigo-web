/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ScheduledNotifications } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScheduledNotificationsUpdateFormInputValues = {
    userId?: string;
    subject?: string;
    linking?: string;
    messageBody?: string;
    scheduleTrigger?: string;
    displayTime?: string;
};
export declare type ScheduledNotificationsUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    linking?: ValidationFunction<string>;
    messageBody?: ValidationFunction<string>;
    scheduleTrigger?: ValidationFunction<string>;
    displayTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScheduledNotificationsUpdateFormOverridesProps = {
    ScheduledNotificationsUpdateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    subject?: FormProps<TextFieldProps>;
    linking?: FormProps<TextFieldProps>;
    messageBody?: FormProps<TextFieldProps>;
    scheduleTrigger?: FormProps<TextFieldProps>;
    displayTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScheduledNotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScheduledNotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scheduledNotifications?: ScheduledNotifications;
    onSubmit?: (fields: ScheduledNotificationsUpdateFormInputValues) => ScheduledNotificationsUpdateFormInputValues;
    onSuccess?: (fields: ScheduledNotificationsUpdateFormInputValues) => void;
    onError?: (fields: ScheduledNotificationsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScheduledNotificationsUpdateFormInputValues) => ScheduledNotificationsUpdateFormInputValues;
    onValidate?: ScheduledNotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScheduledNotificationsUpdateForm(props: ScheduledNotificationsUpdateFormProps): React.ReactElement;
