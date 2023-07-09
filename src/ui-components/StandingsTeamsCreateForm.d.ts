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
export declare type StandingsTeamsCreateFormInputValues = {
    teamId?: string;
    rank?: number;
    points?: number;
    lastCalculationTime?: string;
};
export declare type StandingsTeamsCreateFormValidationValues = {
    teamId?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
    lastCalculationTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsTeamsCreateFormOverridesProps = {
    StandingsTeamsCreateFormGrid?: FormProps<GridProps>;
    teamId?: FormProps<TextFieldProps>;
    rank?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    lastCalculationTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StandingsTeamsCreateFormProps = React.PropsWithChildren<{
    overrides?: StandingsTeamsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StandingsTeamsCreateFormInputValues) => StandingsTeamsCreateFormInputValues;
    onSuccess?: (fields: StandingsTeamsCreateFormInputValues) => void;
    onError?: (fields: StandingsTeamsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StandingsTeamsCreateFormInputValues) => StandingsTeamsCreateFormInputValues;
    onValidate?: StandingsTeamsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsTeamsCreateForm(props: StandingsTeamsCreateFormProps): React.ReactElement;
