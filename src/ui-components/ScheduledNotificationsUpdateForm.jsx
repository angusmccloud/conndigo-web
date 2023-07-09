/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ScheduledNotifications } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ScheduledNotificationsUpdateForm(props) {
  const {
    id,
    scheduledNotifications,
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
    subject: undefined,
    linking: undefined,
    messageBody: undefined,
    scheduleTrigger: undefined,
    displayTime: undefined,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [linking, setLinking] = React.useState(initialValues.linking);
  const [messageBody, setMessageBody] = React.useState(
    initialValues.messageBody
  );
  const [scheduleTrigger, setScheduleTrigger] = React.useState(
    initialValues.scheduleTrigger
  );
  const [displayTime, setDisplayTime] = React.useState(
    initialValues.displayTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...scheduledNotificationsRecord };
    setUserId(cleanValues.userId);
    setSubject(cleanValues.subject);
    setLinking(cleanValues.linking);
    setMessageBody(cleanValues.messageBody);
    setScheduleTrigger(cleanValues.scheduleTrigger);
    setDisplayTime(cleanValues.displayTime);
    setErrors({});
  };
  const [scheduledNotificationsRecord, setScheduledNotificationsRecord] =
    React.useState(scheduledNotifications);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(ScheduledNotifications, id)
        : scheduledNotifications;
      setScheduledNotificationsRecord(record);
    };
    queryData();
  }, [id, scheduledNotifications]);
  React.useEffect(resetStateValues, [scheduledNotificationsRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    subject: [{ type: "Required" }],
    linking: [],
    messageBody: [{ type: "Required" }],
    scheduleTrigger: [{ type: "Required" }],
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
          userId,
          subject,
          linking,
          messageBody,
          scheduleTrigger,
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
          await DataStore.save(
            ScheduledNotifications.copyOf(
              scheduledNotificationsRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
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
      {...getOverrideProps(overrides, "ScheduledNotificationsUpdateForm")}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        defaultValue={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              subject,
              linking,
              messageBody,
              scheduleTrigger,
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
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        defaultValue={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              subject: value,
              linking,
              messageBody,
              scheduleTrigger,
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
        label="Linking"
        isRequired={false}
        isReadOnly={false}
        defaultValue={linking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              subject,
              linking: value,
              messageBody,
              scheduleTrigger,
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
        label="Message body"
        isRequired={true}
        isReadOnly={false}
        defaultValue={messageBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              subject,
              linking,
              messageBody: value,
              scheduleTrigger,
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
        label="Schedule trigger"
        isRequired={true}
        isReadOnly={false}
        defaultValue={scheduleTrigger}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              subject,
              linking,
              messageBody,
              scheduleTrigger: value,
              displayTime,
            };
            const result = onChange(modelFields);
            value = result?.scheduleTrigger ?? value;
          }
          if (errors.scheduleTrigger?.hasError) {
            runValidationTasks("scheduleTrigger", value);
          }
          setScheduleTrigger(value);
        }}
        onBlur={() => runValidationTasks("scheduleTrigger", scheduleTrigger)}
        errorMessage={errors.scheduleTrigger?.errorMessage}
        hasError={errors.scheduleTrigger?.hasError}
        {...getOverrideProps(overrides, "scheduleTrigger")}
      ></TextField>
      <TextField
        label="Display time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={displayTime && convertToLocal(new Date(displayTime))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              subject,
              linking,
              messageBody,
              scheduleTrigger,
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
