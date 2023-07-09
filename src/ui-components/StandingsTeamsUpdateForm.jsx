/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { StandingsTeams } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function StandingsTeamsUpdateForm(props) {
  const {
    id,
    standingsTeams,
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
    teamId: undefined,
    rank: undefined,
    points: undefined,
    lastCalculationTime: undefined,
  };
  const [teamId, setTeamId] = React.useState(initialValues.teamId);
  const [rank, setRank] = React.useState(initialValues.rank);
  const [points, setPoints] = React.useState(initialValues.points);
  const [lastCalculationTime, setLastCalculationTime] = React.useState(
    initialValues.lastCalculationTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...standingsTeamsRecord };
    setTeamId(cleanValues.teamId);
    setRank(cleanValues.rank);
    setPoints(cleanValues.points);
    setLastCalculationTime(cleanValues.lastCalculationTime);
    setErrors({});
  };
  const [standingsTeamsRecord, setStandingsTeamsRecord] =
    React.useState(standingsTeams);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(StandingsTeams, id)
        : standingsTeams;
      setStandingsTeamsRecord(record);
    };
    queryData();
  }, [id, standingsTeams]);
  React.useEffect(resetStateValues, [standingsTeamsRecord]);
  const validations = {
    teamId: [],
    rank: [],
    points: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          teamId,
          rank,
          points,
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
          await DataStore.save(
            StandingsTeams.copyOf(standingsTeamsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "StandingsTeamsUpdateForm")}
    >
      <TextField
        label="Team id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={teamId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId: value,
              rank,
              points,
              lastCalculationTime,
            };
            const result = onChange(modelFields);
            value = result?.teamId ?? value;
          }
          if (errors.teamId?.hasError) {
            runValidationTasks("teamId", value);
          }
          setTeamId(value);
        }}
        onBlur={() => runValidationTasks("teamId", teamId)}
        errorMessage={errors.teamId?.errorMessage}
        hasError={errors.teamId?.hasError}
        {...getOverrideProps(overrides, "teamId")}
      ></TextField>
      <TextField
        label="Rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={rank}
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
              teamId,
              rank: value,
              points,
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
        defaultValue={points}
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
              teamId,
              rank,
              points: value,
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
        label="Last calculation time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={
          lastCalculationTime && convertToLocal(new Date(lastCalculationTime))
        }
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              rank,
              points,
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
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
