import BaseRadio from '../../package/perseus/src/widgets/radio/base-radio'; // assuming I've placed BaseRadio in my project
import React, { useState } from "react";
import { PerseusI18nProvider, usePerseusI18n } from "../contexts/perseusI18nContext";

const RadioWidget = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [reviewMode, setReviewMode] = useState(false);

    // Example choices data
    const choices = [
        {
            id: "1",
            checked: selectedIds.includes("1"),
            content: <div>Paris</div>,
            rationale: <div>The capital of France is Paris.</div>,
            hasRationale: true,
            showRationale: reviewMode,
            showCorrectness: reviewMode,
            correct: true,
            isNoneOfTheAbove: false,
            highlighted: false,
            previouslyAnswered: false,
            revealNoneOfTheAbove: false,
            disabled: false,
        },
        {
            id: "2",
            checked: selectedIds.includes("2"),
            content: <div>London</div>,
            rationale: <div>London is the capital of UK, not France.</div>,
            hasRationale: true,
            showRationale: reviewMode,
            showCorrectness: reviewMode,
            correct: false,
            isNoneOfTheAbove: false,
            highlighted: false,
            previouslyAnswered: false,
            revealNoneOfTheAbove: false,
            disabled: false,
        },
        {
            id: "3",
            checked: selectedIds.includes("3"),
            content: <div>Berlin</div>,
            rationale: <div>Berlin is the capital of Germany.</div>,
            hasRationale: true,
            showRationale: reviewMode,
            showCorrectness: reviewMode,
            correct: false,
            isNoneOfTheAbove: false,
            highlighted: false,
            previouslyAnswered: false,
            revealNoneOfTheAbove: false,
            disabled: false,
        }
    ];

    const apiOptions = {
        isMobile: false,
        readOnly: false,
        canScrollPage: true,
    };

    const handleChange = (checkedChoiceIds: readonly string[]) => {
        setSelectedIds([...checkedChoiceIds]);
    };

    return (
        <PerseusI18nProvider
            strings={{
                chooseNumAnswers: ({numCorrect}) => 
                    `Select ${numCorrect} correct answer${numCorrect !== "1" ? "s" : ""}`,
                chooseAllAnswers: "Select all correct answers",
                chooseOneAnswer: "Select one answer",
            }}
        >
            <div>
                <h1>Country Capital Quiz</h1>
                <p>What is the capital of France?</p>
                
                <BaseRadio
                    apiOptions={apiOptions}
                    choices={choices}
                    labelWrap={true}
                    countChoices={false}
                    numCorrect={1}
                    multipleSelect={false}
                    reviewMode={reviewMode}
                    reviewModeRubric={null}
                    onChange={handleChange}
                    isLastUsedWidget={false}
                />

                <button 
                    onClick={() => setReviewMode(!reviewMode)}
                    style={{marginTop: '20px'}}
                >
                    {reviewMode ? 'Exit Review' : 'Check Answers'}
                </button>
                
                <div style={{marginTop: '10px'}}>
                    Selected: {selectedIds.join(', ')}
                </div>
            </div>
        </PerseusI18nProvider>
    );
};

export default RadioWidget;
