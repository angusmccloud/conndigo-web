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
export declare type StandingsPeopleCreateFormInputValues = {
    userId?: string;
    rank?: number;
    points?: number;
    gamesPlayed?: number;
    lastCalculationTime?: string;
};
export declare type StandingsPeopleCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
    gamesPlayed?: ValidationFunction<number>;
    lastCalculationTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsPeopleCreateFormOverridesProps = {
    StandingsPeopleCreateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    rank?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    gamesPlayed?: FormProps<TextFieldProps>;
    lastCalculationTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StandingsPeopleCreateFormProps = React.PropsWithChildren<{
    overrides?: StandingsPeopleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StandingsPeopleCreateFormInputValues) => StandingsPeopleCreateFormInputValues;
    onSuccess?: (fields: StandingsPeopleCreateFormInputValues) => void;
    onError?: (fields: StandingsPeopleCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StandingsPeopleCreateFormInputValues) => StandingsPeopleCreateFormInputValues;
    onValidate?: StandingsPeopleCreateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsPeopleCreateForm(props: StandingsPeopleCreateFormProps): React.ReactElement;
