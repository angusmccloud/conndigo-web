/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Notifications } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NotificationsCreateForm(props) {
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
    read: false,
    messageBody: undefined,
    linking: undefined,
    subject: undefined,
    displayTime: undefined,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [read, setRead] = React.useState(initialValues.read);
  const [messageBody, setMessageBody] = React.useState(
    initialValues.messageBody
  );
  const [linking, setLinking] = React.useState(initialValues.linking);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [displayTime, setDisplayTime] = React.useState(
    initialValues.displayTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setRead(initialValues.read);
    setMessageBody(initialValues.messageBody);
    setLinking(initialValues.linking);
    setSubject(initialValues.subject);
    setDisplayTime(initialValues.displayTime);
    setErrors({});
  };
  const validations = {
    userId: [{ type: "Required" }],
    read: [{ type: "Required" }],
    messageBody: [{ type: "Required" }],
    linking: [],
    subject: [{ type: "Required" }],
    displayTime: [{ type: "Required" }],
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
          read,
          messageBody,
          linking,
          subject,
          displayTime,
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
          await DataStore.save(new Notifications(modelFields));
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
      {...getOverrideProps(overrides, "NotificationsCreateForm")}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              read,
              messageBody,
              linking,
              subject,
              displayTime,
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
      <SwitchField
        label="Read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={read}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              read: value,
              messageBody,
              linking,
              subject,
              displayTime,
            };
            const result = onChange(modelFields);
            value = result?.read ?? value;
          }
          if (errors.read?.hasError) {
            runValidationTasks("read", value);
          }
          setRead(value);
        }}
        onBlur={() => runValidationTasks("read", read)}
        errorMessage={errors.read?.errorMessage}
        hasError={errors.read?.hasError}
        {...getOverrideProps(overrides, "read")}
      ></SwitchField>
      <TextField
        label="Message body"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              read,
              messageBody: value,
              linking,
              subject,
              displayTime,
            };
            const result = onChange(modelFields);
            value = result?.messageBody ?? value;
          }
          if (errors.messageBody?.hasError) {
            runValidationTasks("messageBody", value);
          }
          setMessageBody(value);
        }}
        onBlur={() => runValidationTasks("messageBody", messageBody)}
        errorMessage={errors.messageBody?.errorMessage}
        hasError={errors.messageBody?.hasError}
        {...getOverrideProps(overrides, "messageBody")}
      ></TextField>
      <TextField
        label="Linking"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              read,
              messageBody,
              linking: value,
              subject,
              displayTime,
            };
            const result = onChange(modelFields);
            value = result?.linking ?? value;
          }
          if (errors.linking?.hasError) {
            runValidationTasks("linking", value);
          }
          setLinking(value);
        }}
        onBlur={() => runValidationTasks("linking", linking)}
        errorMessage={errors.linking?.errorMessage}
        hasError={errors.linking?.hasError}
        {...getOverrideProps(overrides, "linking")}
      ></TextField>
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              read,
              messageBody,
              linking,
              subject: value,
              displayTime,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextField
        label="Display time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              read,
              messageBody,
              linking,
              subject,
              displayTime: value,
            };
            const result = onChange(modelFields);
            value = result?.displayTime ?? value;
          }
          if (errors.displayTime?.hasError) {
            runValidationTasks("displayTime", value);
          }
          setDisplayTime(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("displayTime", displayTime)}
        errorMessage={errors.displayTime?.errorMessage}
        hasError={errors.displayTime?.hasError}
        {...getOverrideProps(overrides, "displayTime")}
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
