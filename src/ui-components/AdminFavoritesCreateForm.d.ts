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
export declare type AdminFavoritesCreateFormInputValues = {
    image?: string;
};
export declare type AdminFavoritesCreateFormValidationValues = {
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminFavoritesCreateFormOverridesProps = {
    AdminFavoritesCreateFormGrid?: FormProps<GridProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminFavoritesCreateFormProps = React.PropsWithChildren<{
    overrides?: AdminFavoritesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdminFavoritesCreateFormInputValues) => AdminFavoritesCreateFormInputValues;
    onSuccess?: (fields: AdminFavoritesCreateFormInputValues) => void;
    onError?: (fields: AdminFavoritesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdminFavoritesCreateFormInputValues) => AdminFavoritesCreateFormInputValues;
    onValidate?: AdminFavoritesCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdminFavoritesCreateForm(props: AdminFavoritesCreateFormProps): React.ReactElement;
