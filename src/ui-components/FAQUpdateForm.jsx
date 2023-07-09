/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { FAQ } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function FAQUpdateForm(props) {
  const {
    id,
    fAQ,
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
    question: undefined,
    answer: undefined,
    sortOrder: undefined,
  };
  const [question, setQuestion] = React.useState(initialValues.question);
  const [answer, setAnswer] = React.useState(initialValues.answer);
  const [sortOrder, setSortOrder] = React.useState(initialValues.sortOrder);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...fAQRecord };
    setQuestion(cleanValues.question);
    setAnswer(cleanValues.answer);
    setSortOrder(cleanValues.sortOrder);
    setErrors({});
  };
  const [fAQRecord, setFAQRecord] = React.useState(fAQ);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(FAQ, id) : fAQ;
      setFAQRecord(record);
    };
    queryData();
  }, [id, fAQ]);
  React.useEffect(resetStateValues, [fAQRecord]);
  const validations = {
    question: [{ type: "Required" }],
    answer: [{ type: "Required" }],
    sortOrder: [{ type: "Required" }],
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
          question,
          answer,
          sortOrder,
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
            FAQ.copyOf(fAQRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FAQUpdateForm")}
    >
      <TextField
        label="Question"
        isRequired={true}
        isReadOnly={false}
        defaultValue={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question: value,
              answer,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
      ></TextField>
      <TextField
        label="Answer"
        isRequired={true}
        isReadOnly={false}
        defaultValue={answer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question,
              answer: value,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.answer ?? value;
          }
          if (errors.answer?.hasError) {
            runValidationTasks("answer", value);
          }
          setAnswer(value);
        }}
        onBlur={() => runValidationTasks("answer", answer)}
        errorMessage={errors.answer?.errorMessage}
        hasError={errors.answer?.hasError}
        {...getOverrideProps(overrides, "answer")}
      ></TextField>
      <TextField
        label="Sort order"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={sortOrder}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              sortOrder: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              question,
              answer,
              sortOrder: value,
            };
            const result = onChange(modelFields);
            value = result?.sortOrder ?? value;
          }
          if (errors.sortOrder?.hasError) {
            runValidationTasks("sortOrder", value);
          }
          setSortOrder(value);
        }}
        onBlur={() => runValidationTasks("sortOrder", sortOrder)}
        errorMessage={errors.sortOrder?.errorMessage}
        hasError={errors.sortOrder?.hasError}
        {...getOverrideProps(overrides, "sortOrder")}
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
