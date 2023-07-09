/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ExpoTokens } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExpoTokensUpdateFormInputValues = {
    token?: string;
    userId?: string;
};
export declare type ExpoTokensUpdateFormValidationValues = {
    token?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpoTokensUpdateFormOverridesProps = {
    ExpoTokensUpdateFormGrid?: FormProps<GridProps>;
    token?: FormProps<TextFieldProps>;
    userId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExpoTokensUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExpoTokensUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    expoTokens?: ExpoTokens;
    onSubmit?: (fields: ExpoTokensUpdateFormInputValues) => ExpoTokensUpdateFormInputValues;
    onSuccess?: (fields: ExpoTokensUpdateFormInputValues) => void;
    onError?: (fields: ExpoTokensUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ExpoTokensUpdateFormInputValues) => ExpoTokensUpdateFormInputValues;
    onValidate?: ExpoTokensUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExpoTokensUpdateForm(props: ExpoTokensUpdateFormProps): React.ReactElement;
