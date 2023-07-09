/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { StandingsPeople } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function StandingsPeopleCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: undefined,
    rank: undefined,
    points: undefined,
    gamesPlayed: undefined,
    lastCalculationTime: undefined,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [rank, setRank] = React.useState(initialValues.rank);
  const [points, setPoints] = React.useState(initialValues.points);
  const [gamesPlayed, setGamesPlayed] = React.useState(
    initialValues.gamesPlayed
  );
  const [lastCalculationTime, setLastCalculationTime] = React.useState(
    initialValues.lastCalculationTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setRank(initialValues.rank);
    setPoints(initialValues.points);
    setGamesPlayed(initialValues.gamesPlayed);
    setLastCalculationTime(initialValues.lastCalculationTime);
    setErrors({});
  };
  const validations = {
    userId: [],
    rank: [],
    points: [],
    gamesPlayed: [],
    lastCalculationTime: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          rank,
          points,
          gamesPlayed,
          lastCalculationTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new StandingsPeople(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "StandingsPeopleCreateForm")}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              rank,
              points,
              gamesPlayed,
              lastCalculationTime,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              rank: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              userId,
              rank: value,
              points,
              gamesPlayed,
              lastCalculationTime,
            };
            const result = onChange(modelFields);
            value = result?.rank ?? value;
          }
          if (errors.rank?.hasError) {
            runValidationTasks("rank", value);
          }
          setRank(value);
        }}
        onBlur={() => runValidationTasks("rank", rank)}
        errorMessage={errors.rank?.errorMessage}
        hasError={errors.rank?.hasError}
        {...getOverrideProps(overrides, "rank")}
      ></TextField>
      <TextField
        label="Points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              points: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              userId,
              rank,
              points: value,
              gamesPlayed,
              lastCalculationTime,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <TextField
        label="Games played"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              gamesPlayed: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              userId,
              rank,
              points,
              gamesPlayed: value,
              lastCalculationTime,
            };
            const result = onChange(modelFields);
            value = result?.gamesPlayed ?? value;
          }
          if (errors.gamesPlayed?.hasError) {
            runValidationTasks("gamesPlayed", value);
          }
          setGamesPlayed(value);
        }}
        onBlur={() => runValidationTasks("gamesPlayed", gamesPlayed)}
        errorMessage={errors.gamesPlayed?.errorMessage}
        hasError={errors.gamesPlayed?.hasError}
        {...getOverrideProps(overrides, "gamesPlayed")}
      ></TextField>
      <TextField
        label="Last calculation time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              rank,
              points,
              gamesPlayed,
              lastCalculationTime: value,
            };
            const result = onChange(modelFields);
            value = result?.lastCalculationTime ?? value;
          }
          if (errors.lastCalculationTime?.hasError) {
            runValidationTasks("lastCalculationTime", value);
          }
          setLastCalculationTime(new Date(value).toISOString());
        }}
        onBlur={() =>
          runValidationTasks("lastCalculationTime", lastCalculationTime)
        }
        errorMessage={errors.lastCalculationTime?.errorMessage}
        hasError={errors.lastCalculationTime?.hasError}
        {...getOverrideProps(overrides, "lastCalculationTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
