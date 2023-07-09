/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AdminFavorites } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdminFavoritesUpdateFormInputValues = {
    image?: string;
};
export declare type AdminFavoritesUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminFavoritesUpdateFormOverridesProps = {
    AdminFavoritesUpdateFormGrid?: FormProps<GridProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminFavoritesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdminFavoritesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    adminFavorites?: AdminFavorites;
    onSubmit?: (fields: AdminFavoritesUpdateFormInputValues) => AdminFavoritesUpdateFormInputValues;
    onSuccess?: (fields: AdminFavoritesUpdateFormInputValues) => void;
    onError?: (fields: AdminFavoritesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdminFavoritesUpdateFormInputValues) => AdminFavoritesUpdateFormInputValues;
    onValidate?: AdminFavoritesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdminFavoritesUpdateForm(props: AdminFavoritesUpdateFormProps): React.ReactElement;
