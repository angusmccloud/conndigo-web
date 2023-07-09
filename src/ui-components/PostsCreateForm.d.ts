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
export declare type PostsCreateFormInputValues = {
    userId?: string;
    messageBody?: string;
    images?: string[];
    olympicEvent?: boolean;
    eventDetails?: string;
    usersInPost?: string[];
};
export declare type PostsCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    messageBody?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    olympicEvent?: ValidationFunction<boolean>;
    eventDetails?: ValidationFunction<string>;
    usersInPost?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsCreateFormOverridesProps = {
    PostsCreateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    messageBody?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    olympicEvent?: FormProps<SwitchFieldProps>;
    eventDetails?: FormProps<TextFieldProps>;
    usersInPost?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsCreateFormProps = React.PropsWithChildren<{
    overrides?: PostsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onSuccess?: (fields: PostsCreateFormInputValues) => void;
    onError?: (fields: PostsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onValidate?: PostsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostsCreateForm(props: PostsCreateFormProps): React.ReactElement;
