/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Posts } from "../models";
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
export default function PostsCreateForm(props) {
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
    messageBody: undefined,
    images: [],
    olympicEvent: false,
    eventDetails: undefined,
    usersInPost: [],
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [messageBody, setMessageBody] = React.useState(
    initialValues.messageBody
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [olympicEvent, setOlympicEvent] = React.useState(
    initialValues.olympicEvent
  );
  const [eventDetails, setEventDetails] = React.useState(
    initialValues.eventDetails
  );
  const [usersInPost, setUsersInPost] = React.useState(
    initialValues.usersInPost
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setMessageBody(initialValues.messageBody);
    setImages(initialValues.images);
    setCurrentImagesValue(undefined);
    setOlympicEvent(initialValues.olympicEvent);
    setEventDetails(initialValues.eventDetails);
    setUsersInPost(initialValues.usersInPost);
    setCurrentUsersInPostValue(undefined);
    setErrors({});
  };
  const [currentImagesValue, setCurrentImagesValue] = React.useState(undefined);
  const imagesRef = React.createRef();
  const [currentUsersInPostValue, setCurrentUsersInPostValue] =
    React.useState(undefined);
  const usersInPostRef = React.createRef();
  const validations = {
    userId: [{ type: "Required" }],
    messageBody: [],
    images: [],
    olympicEvent: [{ type: "Required" }],
    eventDetails: [],
    usersInPost: [],
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
          messageBody,
          images,
          olympicEvent,
          eventDetails,
          usersInPost,
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
          await DataStore.save(new Posts(modelFields));
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
      {...getOverrideProps(overrides, "PostsCreateForm")}
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
              messageBody,
              images,
              olympicEvent,
              eventDetails,
              usersInPost,
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
        label="Message body"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              messageBody: value,
              images,
              olympicEvent,
              eventDetails,
              usersInPost,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userId,
              messageBody,
              images: values,
              olympicEvent,
              eventDetails,
              usersInPost,
            };
            const result = onChange(modelFields);
            values = result?.images ?? values;
          }
          setImages(values);
          setCurrentImagesValue(undefined);
        }}
        currentFieldValue={currentImagesValue}
        label={"Images"}
        items={images}
        hasError={errors.images?.hasError}
        setFieldValue={setCurrentImagesValue}
        inputFieldRef={imagesRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Images"
          isRequired={false}
          isReadOnly={false}
          value={currentImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.images?.hasError) {
              runValidationTasks("images", value);
            }
            setCurrentImagesValue(value);
          }}
          onBlur={() => runValidationTasks("images", currentImagesValue)}
          errorMessage={errors.images?.errorMessage}
          hasError={errors.images?.hasError}
          ref={imagesRef}
          {...getOverrideProps(overrides, "images")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Olympic event"
        defaultChecked={false}
        isDisabled={false}
        isChecked={olympicEvent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              messageBody,
              images,
              olympicEvent: value,
              eventDetails,
              usersInPost,
            };
            const result = onChange(modelFields);
            value = result?.olympicEvent ?? value;
          }
          if (errors.olympicEvent?.hasError) {
            runValidationTasks("olympicEvent", value);
          }
          setOlympicEvent(value);
        }}
        onBlur={() => runValidationTasks("olympicEvent", olympicEvent)}
        errorMessage={errors.olympicEvent?.errorMessage}
        hasError={errors.olympicEvent?.hasError}
        {...getOverrideProps(overrides, "olympicEvent")}
      ></SwitchField>
      <TextField
        label="Event details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              messageBody,
              images,
              olympicEvent,
              eventDetails: value,
              usersInPost,
            };
            const result = onChange(modelFields);
            value = result?.eventDetails ?? value;
          }
          if (errors.eventDetails?.hasError) {
            runValidationTasks("eventDetails", value);
          }
          setEventDetails(value);
        }}
        onBlur={() => runValidationTasks("eventDetails", eventDetails)}
        errorMessage={errors.eventDetails?.errorMessage}
        hasError={errors.eventDetails?.hasError}
        {...getOverrideProps(overrides, "eventDetails")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userId,
              messageBody,
              images,
              olympicEvent,
              eventDetails,
              usersInPost: values,
            };
            const result = onChange(modelFields);
            values = result?.usersInPost ?? values;
          }
          setUsersInPost(values);
          setCurrentUsersInPostValue(undefined);
        }}
        currentFieldValue={currentUsersInPostValue}
        label={"Users in post"}
        items={usersInPost}
        hasError={errors.usersInPost?.hasError}
        setFieldValue={setCurrentUsersInPostValue}
        inputFieldRef={usersInPostRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Users in post"
          isRequired={false}
          isReadOnly={false}
          value={currentUsersInPostValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.usersInPost?.hasError) {
              runValidationTasks("usersInPost", value);
            }
            setCurrentUsersInPostValue(value);
          }}
          onBlur={() =>
            runValidationTasks("usersInPost", currentUsersInPostValue)
          }
          errorMessage={errors.usersInPost?.errorMessage}
          hasError={errors.usersInPost?.hasError}
          ref={usersInPostRef}
          {...getOverrideProps(overrides, "usersInPost")}
        ></TextField>
      </ArrayField>
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
