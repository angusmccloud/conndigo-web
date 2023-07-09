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
export declare type ExpoTokensCreateFormInputValues = {
    token?: string;
    userId?: string;
};
export declare type ExpoTokensCreateFormValidationValues = {
    token?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpoTokensCreateFormOverridesProps = {
    ExpoTokensCreateFormGrid?: FormProps<GridProps>;
    token?: FormProps<TextFieldProps>;
    userId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExpoTokensCreateFormProps = React.PropsWithChildren<{
    overrides?: ExpoTokensCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExpoTokensCreateFormInputValues) => ExpoTokensCreateFormInputValues;
    onSuccess?: (fields: ExpoTokensCreateFormInputValues) => void;
    onError?: (fields: ExpoTokensCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ExpoTokensCreateFormInputValues) => ExpoTokensCreateFormInputValues;
    onValidate?: ExpoTokensCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExpoTokensCreateForm(props: ExpoTokensCreateFormProps): React.ReactElement;
