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
export declare type GamesCreateFormInputValues = {
    name?: string;
    iconName?: string;
    minNumberOfTeams?: number;
    maxNumberOfTeams?: number;
    minNumberOfPlayersPerTeam?: number;
    maxNumberOfPlayersPerTeam?: number;
    points?: number[];
    rules?: string;
    canHaveMultipleWinners?: boolean;
};
export declare type GamesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    iconName?: ValidationFunction<string>;
    minNumberOfTeams?: ValidationFunction<number>;
    maxNumberOfTeams?: ValidationFunction<number>;
    minNumberOfPlayersPerTeam?: ValidationFunction<number>;
    maxNumberOfPlayersPerTeam?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
    rules?: ValidationFunction<string>;
    canHaveMultipleWinners?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesCreateFormOverridesProps = {
    GamesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    iconName?: FormProps<TextFieldProps>;
    minNumberOfTeams?: FormProps<TextFieldProps>;
    maxNumberOfTeams?: FormProps<TextFieldProps>;
    minNumberOfPlayersPerTeam?: FormProps<TextFieldProps>;
    maxNumberOfPlayersPerTeam?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    rules?: FormProps<TextFieldProps>;
    canHaveMultipleWinners?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GamesCreateFormProps = React.PropsWithChildren<{
    overrides?: GamesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GamesCreateFormInputValues) => GamesCreateFormInputValues;
    onSuccess?: (fields: GamesCreateFormInputValues) => void;
    onError?: (fields: GamesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GamesCreateFormInputValues) => GamesCreateFormInputValues;
    onValidate?: GamesCreateFormValidationValues;
} & React.CSSProperties>;
export default function GamesCreateForm(props: GamesCreateFormProps): React.ReactElement;
