/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { StandingsTeams } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StandingsTeamsUpdateFormInputValues = {
    teamId?: string;
    rank?: number;
    points?: number;
    lastCalculationTime?: string;
};
export declare type StandingsTeamsUpdateFormValidationValues = {
    teamId?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
    lastCalculationTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsTeamsUpdateFormOverridesProps = {
    StandingsTeamsUpdateFormGrid?: FormProps<GridProps>;
    teamId?: FormProps<TextFieldProps>;
    rank?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    lastCalculationTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StandingsTeamsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StandingsTeamsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    standingsTeams?: StandingsTeams;
    onSubmit?: (fields: StandingsTeamsUpdateFormInputValues) => StandingsTeamsUpdateFormInputValues;
    onSuccess?: (fields: StandingsTeamsUpdateFormInputValues) => void;
    onError?: (fields: StandingsTeamsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StandingsTeamsUpdateFormInputValues) => StandingsTeamsUpdateFormInputValues;
    onValidate?: StandingsTeamsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsTeamsUpdateForm(props: StandingsTeamsUpdateFormProps): React.ReactElement;
