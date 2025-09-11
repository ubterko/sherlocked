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

// radio 
const perseusItem1: PerseusItem = {
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
        content: '**Select all input values for which $g(x)=2$.**\n\n[[☃ radio 1]]\n\n',
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
                    multipleSelect: false,
                    randomize: false
                },
                static: false,
                type: 'radio',
                version: { major: 0, minor: 0 }
            } as any // Add 'as any' to bypass strict typing for widget map if needed
        }
    }
};

// numeric-input 
const perseusItem2: PerseusItem = {
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
      content: '**Without using a calculator, put the numbers in order  from least to greatest.**  \n\n[[☃ orderer 1]]',
      images: {},
      widgets: {
        'orderer 1': {
          graded: true,
          options: {
            correctOptions: [
              {
                content: '1',
                images: {},
                widgets: {}
              },
              {
                content: '2',
                images: {},
                widgets: {}
              },
              {
                content: '3',
                images: {},
                widgets: {}
              }
            ],
            height: 'normal',
            layout: 'horizontal',
            options: [
              {
                content: '1',
                images: {},
                widgets: {}
              },
              {
                content: '3',
                images: {},
                widgets: {}
              },
              {
                content: '2',
                images: {},
                widgets: {}
              }
            ],
            otherOptions: []
          },
          type: 'orderer',
          version: {
            major: 0,
            minor: 0
          }
        }
      }
    }
};

// image 
const perseusItem3: PerseusItem = {
  "question": {
    "content": "[[☃ image 1]]",
    "images": {},
    "widgets": {
      "image 1": {
        "type": "image",
        "graded": true,
        "version": {
          "major": 0,
          "minor": 0
        },
        "static": false,
        "alignment": "default",
        "options": {
          "backgroundImage": {
            "url": "https://cdn.kastatic.org/ka-content-images/61831c1329dbc32036d7dd0d03e06e7e2c622718.jpg",
            "width": 400,
            "height": 225
          },
          "alt": "",
          "caption": "",
          "title": ""
        }
      }
    }
  },
  "answerArea": {
    "calculator": false,
    "periodicTable": false,
    "financialCalculatorMonthlyPayment": false,
    "financialCalculatorTotalAmount": false,
    "financialCalculatorTimeToPayOff": false,
    "periodicTableWithKey": false
  },
  "hints": []
};

// dropdown 
const perseusItem4: PerseusItem = {
  "question": {
    "content": "The total number of boxes the forklift can carry is [[☃ dropdown 1]] $60$.",
    "images": {},
    "widgets": {
      "dropdown 1": {
        "type": "dropdown",
        "alignment": "default",
        "static": false,
        "graded": true,
        "options": {
          "choices": [
            {
              "content": "greater than or equal to"
            },
            {
              "content": "less than or equal to"
            }
          ],
          "placeholder": "greater/less than or equal to",
          "static": false
        },
        "version": {
          "major": 0,
          "minor": 0
        }
      }
    }
  },
  "answerArea": {
    "calculator": false,
    "periodicTable": false,
    "financialCalculatorMonthlyPayment": false,
    "financialCalculatorTotalAmount": false,
    "financialCalculatorTimeToPayOff": false,
    "periodicTableWithKey": false
  },
  "hints": []
};

// matcher 
const perseusItem5: PerseusItem = {
  "question": {
    "content": "**Match each claim with its supporting evidence.**\n\n[[☃ matcher 1]]",
    "images": {},
    "widgets": {
      "matcher 1": {
        "version": {
          "major": 0,
          "minor": 0
        },
        "type": "matcher",
        "graded": true,
        "options": {
          "labels": [
            "**Claims**",
            "**Evidence**"
          ],
          "padding": true,
          "orderMatters": false,
          "right": [
            "Medium-sized stars typically exist for roughly 10 billion years",
            "The current trajectory of the Earth’s tectonic plate movement",
            "The life cycle of medium-sized stars includes a red giant stage and ends in a whimper as a white dwarf",
            "Rapid escalation of greenhouse gas emissions",
            "The current trajectory of the Milky Way galaxy and those in its immediate proximity"
          ],
          "left": [
            "Our Sun will run out of fuel and die in around 5 billion years ",
            "Plate tectonics will rearrange the continents: the Pacific will narrow, bringing Australia closer to the Americas, and the Atlantic will expand to form the largest of the oceans ",
            "Our Sun will run out of hydrogen, swell into a red giant, gobble up the inner rocky planets, and then collapse and die ",
            "Average global temperatures will rise ",
            "In 3 to 4 billion years, our galaxy will begin a slow collision with its closest large neighbor, Andromeda "
          ]
        }
      }
    }
  },
  "answerArea": {
    "calculator": false,
    "periodicTable": false,
    "financialCalculatorMonthlyPayment": false,
    "financialCalculatorTotalAmount": false,
    "financialCalculatorTimeToPayOff": false,
    "periodicTableWithKey": false
  },
  "hints": []
}


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
                    item={perseusItem5}
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
                />
            </div>

        </I18nContext.Provider>
        
    );
};

export default RendererComponent;