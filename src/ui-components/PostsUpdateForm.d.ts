/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Posts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostsUpdateFormInputValues = {
    userId?: string;
    messageBody?: string;
    images?: string[];
    olympicEvent?: boolean;
    eventDetails?: string;
    usersInPost?: string[];
};
export declare type PostsUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    messageBody?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    olympicEvent?: ValidationFunction<boolean>;
    eventDetails?: ValidationFunction<string>;
    usersInPost?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsUpdateFormOverridesProps = {
    PostsUpdateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    messageBody?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    olympicEvent?: FormProps<SwitchFieldProps>;
    eventDetails?: FormProps<TextFieldProps>;
    usersInPost?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    posts?: Posts;
    onSubmit?: (fields: PostsUpdateFormInputValues) => PostsUpdateFormInputValues;
    onSuccess?: (fields: PostsUpdateFormInputValues) => void;
    onError?: (fields: PostsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostsUpdateFormInputValues) => PostsUpdateFormInputValues;
    onValidate?: PostsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostsUpdateForm(props: PostsUpdateFormProps): React.ReactElement;
