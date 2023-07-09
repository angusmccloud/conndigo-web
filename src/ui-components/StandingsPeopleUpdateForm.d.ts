/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { StandingsPeople } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StandingsPeopleUpdateFormInputValues = {
    userId?: string;
    rank?: number;
    points?: number;
    gamesPlayed?: number;
    lastCalculationTime?: string;
};
export declare type StandingsPeopleUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    rank?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
    gamesPlayed?: ValidationFunction<number>;
    lastCalculationTime?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsPeopleUpdateFormOverridesProps = {
    StandingsPeopleUpdateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    rank?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    gamesPlayed?: FormProps<TextFieldProps>;
    lastCalculationTime?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StandingsPeopleUpdateFormProps = React.PropsWithChildren<{
    overrides?: StandingsPeopleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    standingsPeople?: StandingsPeople;
    onSubmit?: (fields: StandingsPeopleUpdateFormInputValues) => StandingsPeopleUpdateFormInputValues;
    onSuccess?: (fields: StandingsPeopleUpdateFormInputValues) => void;
    onError?: (fields: StandingsPeopleUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StandingsPeopleUpdateFormInputValues) => StandingsPeopleUpdateFormInputValues;
    onValidate?: StandingsPeopleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsPeopleUpdateForm(props: StandingsPeopleUpdateFormProps): React.ReactElement;
