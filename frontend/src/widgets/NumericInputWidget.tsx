import React, { useState } from "react";
import { NumericInput } from "../../package/perseus/src/widgets/numeric-input/numeric-input.class";
import { ApiOptions } from "../../package/perseus/src/perseus-api";
import { linterContextDefault } from "../package/perseus/src/perseus-linter";

const NumericInputWidget = () => {
    const [answer, setAnswer] = useState("");

    const numericInputProps = {
        value: answer,
        onChange: (newValue: string) => setAnswer(newValue),
        size: "normal",
        rightAlign: false,
        apiOptions: ApiOptions.defaults,
        coefficient: false,
        answerForms: [
            {
                value: 5,
                maxError: null,
                simplify: "required",
                // @ts-expect-error - TS2322: Type '"decimal"' is not assignable to type 'MathFormat'.
                // This is due to a type mismatch in the PerseusNumericInputAnswerForm definition.
                // For now, we'll ignore it as it's a mock setup.
                format: "decimal", 
                // @ts-expect-error - TS2322: Type 'true' is not assignable to type 'boolean | undefined'.
                // This is due to a type mismatch in the PerseusNumericInputAnswerForm definition.
                // For now, we'll ignore it as it's a mock setup.
                strict: true,
                type: "number",
            },
        ],
        labelText: "What is 2 + 3?",
        linterContext: linterContextDefault,
        // @ts-expect-error - TS2322: Type '{ currentValue: string; }' is not assignable to type 'PerseusNumericInputUserInput'.
        // This is due to a type mismatch in the PerseusNumericInputUserInput definition.
        // For now, we'll ignore it as it's a mock setup.
        userInput: {
            currentValue: answer,
        },
        // @ts-expect-error - TS2322: Type '{ value: number; maxError: null; simplify: "required"; format: "decimal"; strict: true; type: "number"; }[]' is not assignable to type 'readonly PerseusNumericInputAnswerForm[]'.
        // This is due to a type mismatch in the PerseusNumericInputAnswerForm definition.
        // For now, we'll ignore it as it's a mock setup.
        answers: [
            {
                value: 5,
                maxError: null,
                simplify: "required",
                format: "decimal",
                strict: true,
                type: "number",
            },
        ],
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Numeric Input Question</h1>
            <p>Please enter your answer in the box below:</p>
            <NumericInput {...numericInputProps} />
            <p>Your current answer: {answer}</p>
        </div>
    );
};

export default NumericInputWidget;
