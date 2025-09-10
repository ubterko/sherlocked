import React from "react";
import {ServerItemRenderer} from "../package/perseus/src/server-item-renderer";
import {ServerItemRendererWithDebugUI} from "../package/perseus/testing/server-item-renderer-with-debug-ui";
import type { PerseusItem } from "@khanacademy/perseus-core";
import {type PerseusDependenciesV2  } from "@khanacademy/perseus";
import { storybookDependenciesV2 } from "../package/perseus/testing/test-dependencies";

const I18nContext = React.createContext({
    strings: {
        chooseNumAnswers: ({numCorrect}: {numCorrect: string}) => 
            `Choose ${numCorrect} answers`,
        chooseAllAnswers: "Choose all that apply",
        chooseOneAnswer: "Choose one answer",
    },
});

const usePerseusI18n = () => React.useContext(I18nContext);

const PerseusItem: PerseusItem = {
    answerArea: {
        calculator: false,
        financialCalculatorMonthlyPayment: false,
        financialCalculatorTimeToPayOff: false,
        financialCalculatorTotalAmount: false,
        periodicTable: false,
        periodicTableWithKey: false
    },
    hints: [],
    question: {
        content: '**Select all input values for which $g(x)=2$.**\n\n[[☃ radio 1]]\n\n![](web+graphie://ka-perseus-graphie.s3.amazonaws.com/4613e0d9c906b3053fb5523eed83d4f779fdf6bb)',
        images: {},
        widgets: {
            // Use the correct widget key and structure according to PerseusWidgetTypes
            // If you only use radio widgets, you can cast as needed:
            ['radio 1']: {
                alignment: 'default',
                graded: true,
                options: {
                    choices: [
                        {
                            content: '$x=-6$',
                            correct: false,
                            id: 'radio-choice-test-id-0'
                        },
                        {
                            content: '$x=4$',
                            correct: false,
                            id: 'radio-choice-test-id-1'
                        },
                        {
                            content: '$x=7$',
                            correct: false,
                            id: 'radio-choice-test-id-2',
                            isNoneOfTheAbove: false
                        },
                        {
                            content: 'There is no such input value.',
                            correct: true,
                            id: 'radio-choice-test-id-3',
                            isNoneOfTheAbove: true
                        }
                    ],
                    hasNoneOfTheAbove: true,
                    multipleSelect: true,
                    randomize: false
                },
                static: false,
                type: 'radio',
                version: { major: 0, minor: 0 }
            } as any // Add 'as any' to bypass strict typing for widget map if needed
        }
    }
};

const RendererComponent = () => {
    return (
        <I18nContext.Provider value={{
            strings: {
                chooseNumAnswers: ({numCorrect}) => 
                    `Select ${numCorrect} correct answer${numCorrect !== "1" ? "s" : ""}`,
                chooseAllAnswers: "Select all correct answers",
                chooseOneAnswer: "Select one answer",
            }
        }}>

            <div style={{ padding: "20px" }}>
                <ServerItemRenderer
                    problemNum={0}
                    item={PerseusItem}
                    dependencies={storybookDependenciesV2}
                    apiOptions={{}}
                    linterContext={{
                        contentType: "",
                        highlightLint: true,
                        paths: [],
                        stack: [],
                    }}
                    showSolutions="none"
                    hintsVisible={0}
                    reviewMode={false}
                    // startAnswerless
                />
            </div>

        </I18nContext.Provider>
        
    );
};

export default RendererComponent;