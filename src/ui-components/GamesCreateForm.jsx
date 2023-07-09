/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Games } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function GamesCreateForm(props) {
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
    name: undefined,
    iconName: undefined,
    minNumberOfTeams: undefined,
    maxNumberOfTeams: undefined,
    minNumberOfPlayersPerTeam: undefined,
    maxNumberOfPlayersPerTeam: undefined,
    points: [],
    rules: undefined,
    canHaveMultipleWinners: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [iconName, setIconName] = React.useState(initialValues.iconName);
  const [minNumberOfTeams, setMinNumberOfTeams] = React.useState(
    initialValues.minNumberOfTeams
  );
  const [maxNumberOfTeams, setMaxNumberOfTeams] = React.useState(
    initialValues.maxNumberOfTeams
  );
  const [minNumberOfPlayersPerTeam, setMinNumberOfPlayersPerTeam] =
    React.useState(initialValues.minNumberOfPlayersPerTeam);
  const [maxNumberOfPlayersPerTeam, setMaxNumberOfPlayersPerTeam] =
    React.useState(initialValues.maxNumberOfPlayersPerTeam);
  const [points, setPoints] = React.useState(initialValues.points);
  const [rules, setRules] = React.useState(initialValues.rules);
  const [canHaveMultipleWinners, setCanHaveMultipleWinners] = React.useState(
    initialValues.canHaveMultipleWinners
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setIconName(initialValues.iconName);
    setMinNumberOfTeams(initialValues.minNumberOfTeams);
    setMaxNumberOfTeams(initialValues.maxNumberOfTeams);
    setMinNumberOfPlayersPerTeam(initialValues.minNumberOfPlayersPerTeam);
    setMaxNumberOfPlayersPerTeam(initialValues.maxNumberOfPlayersPerTeam);
    setPoints(initialValues.points);
    setCurrentPointsValue(undefined);
    setRules(initialValues.rules);
    setCanHaveMultipleWinners(initialValues.canHaveMultipleWinners);
    setErrors({});
  };
  const [currentPointsValue, setCurrentPointsValue] = React.useState(undefined);
  const pointsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    iconName: [{ type: "Required" }],
    minNumberOfTeams: [{ type: "Required" }],
    maxNumberOfTeams: [],
    minNumberOfPlayersPerTeam: [{ type: "Required" }],
    maxNumberOfPlayersPerTeam: [],
    points: [{ type: "Required" }],
    rules: [],
    canHaveMultipleWinners: [{ type: "Required" }],
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
          name,
          iconName,
          minNumberOfTeams,
          maxNumberOfTeams,
          minNumberOfPlayersPerTeam,
          maxNumberOfPlayersPerTeam,
          points,
          rules,
          canHaveMultipleWinners,
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
          await DataStore.save(new Games(modelFields));
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
      {...getOverrideProps(overrides, "GamesCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Icon name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              iconName: value,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.iconName ?? value;
          }
          if (errors.iconName?.hasError) {
            runValidationTasks("iconName", value);
          }
          setIconName(value);
        }}
        onBlur={() => runValidationTasks("iconName", iconName)}
        errorMessage={errors.iconName?.errorMessage}
        hasError={errors.iconName?.hasError}
        {...getOverrideProps(overrides, "iconName")}
      ></TextField>
      <TextField
        label="Min number of teams"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              minNumberOfTeams: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams: value,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.minNumberOfTeams ?? value;
          }
          if (errors.minNumberOfTeams?.hasError) {
            runValidationTasks("minNumberOfTeams", value);
          }
          setMinNumberOfTeams(value);
        }}
        onBlur={() => runValidationTasks("minNumberOfTeams", minNumberOfTeams)}
        errorMessage={errors.minNumberOfTeams?.errorMessage}
        hasError={errors.minNumberOfTeams?.hasError}
        {...getOverrideProps(overrides, "minNumberOfTeams")}
      ></TextField>
      <TextField
        label="Max number of teams"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              maxNumberOfTeams: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams: value,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.maxNumberOfTeams ?? value;
          }
          if (errors.maxNumberOfTeams?.hasError) {
            runValidationTasks("maxNumberOfTeams", value);
          }
          setMaxNumberOfTeams(value);
        }}
        onBlur={() => runValidationTasks("maxNumberOfTeams", maxNumberOfTeams)}
        errorMessage={errors.maxNumberOfTeams?.errorMessage}
        hasError={errors.maxNumberOfTeams?.hasError}
        {...getOverrideProps(overrides, "maxNumberOfTeams")}
      ></TextField>
      <TextField
        label="Min number of players per team"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              minNumberOfPlayersPerTeam: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam: value,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.minNumberOfPlayersPerTeam ?? value;
          }
          if (errors.minNumberOfPlayersPerTeam?.hasError) {
            runValidationTasks("minNumberOfPlayersPerTeam", value);
          }
          setMinNumberOfPlayersPerTeam(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "minNumberOfPlayersPerTeam",
            minNumberOfPlayersPerTeam
          )
        }
        errorMessage={errors.minNumberOfPlayersPerTeam?.errorMessage}
        hasError={errors.minNumberOfPlayersPerTeam?.hasError}
        {...getOverrideProps(overrides, "minNumberOfPlayersPerTeam")}
      ></TextField>
      <TextField
        label="Max number of players per team"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              maxNumberOfPlayersPerTeam: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam: value,
              points,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.maxNumberOfPlayersPerTeam ?? value;
          }
          if (errors.maxNumberOfPlayersPerTeam?.hasError) {
            runValidationTasks("maxNumberOfPlayersPerTeam", value);
          }
          setMaxNumberOfPlayersPerTeam(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "maxNumberOfPlayersPerTeam",
            maxNumberOfPlayersPerTeam
          )
        }
        errorMessage={errors.maxNumberOfPlayersPerTeam?.errorMessage}
        hasError={errors.maxNumberOfPlayersPerTeam?.hasError}
        {...getOverrideProps(overrides, "maxNumberOfPlayersPerTeam")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points: values,
              rules,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            values = result?.points ?? values;
          }
          setPoints(values);
          setCurrentPointsValue(undefined);
        }}
        currentFieldValue={currentPointsValue}
        label={"Points"}
        items={points}
        hasError={errors.points?.hasError}
        setFieldValue={setCurrentPointsValue}
        inputFieldRef={pointsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Points"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPointsValue}
          onChange={(e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value)) {
              setErrors((errors) => ({
                ...errors,
                points: "Value must be a valid number",
              }));
              return;
            }
            if (errors.points?.hasError) {
              runValidationTasks("points", value);
            }
            setCurrentPointsValue(value);
          }}
          onBlur={() => runValidationTasks("points", currentPointsValue)}
          errorMessage={errors.points?.errorMessage}
          hasError={errors.points?.hasError}
          ref={pointsRef}
          {...getOverrideProps(overrides, "points")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Rules"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules: value,
              canHaveMultipleWinners,
            };
            const result = onChange(modelFields);
            value = result?.rules ?? value;
          }
          if (errors.rules?.hasError) {
            runValidationTasks("rules", value);
          }
          setRules(value);
        }}
        onBlur={() => runValidationTasks("rules", rules)}
        errorMessage={errors.rules?.errorMessage}
        hasError={errors.rules?.hasError}
        {...getOverrideProps(overrides, "rules")}
      ></TextField>
      <SwitchField
        label="Can have multiple winners"
        defaultChecked={false}
        isDisabled={false}
        isChecked={canHaveMultipleWinners}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              iconName,
              minNumberOfTeams,
              maxNumberOfTeams,
              minNumberOfPlayersPerTeam,
              maxNumberOfPlayersPerTeam,
              points,
              rules,
              canHaveMultipleWinners: value,
            };
            const result = onChange(modelFields);
            value = result?.canHaveMultipleWinners ?? value;
          }
          if (errors.canHaveMultipleWinners?.hasError) {
            runValidationTasks("canHaveMultipleWinners", value);
          }
          setCanHaveMultipleWinners(value);
        }}
        onBlur={() =>
          runValidationTasks("canHaveMultipleWinners", canHaveMultipleWinners)
        }
        errorMessage={errors.canHaveMultipleWinners?.errorMessage}
        hasError={errors.canHaveMultipleWinners?.hasError}
        {...getOverrideProps(overrides, "canHaveMultipleWinners")}
      ></SwitchField>
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
