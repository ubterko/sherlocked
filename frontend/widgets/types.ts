interface Version {
    major: number;
    minor: number;
}

interface AnswerArea {
    calculator: boolean;
    financialCalculatorMonthlyPayment: boolean;
    financialCalculatorTimeToPayOff: boolean;
    financialCalculatorTotalAmount: boolean;
    periodicTable: boolean;
    periodicTableWithKey: boolean;
}

interface Choice {
    content: string;
    correct: boolean;
    id: string;
    isNoneOfTheAbove?: boolean;
}

interface WidgetOptions {
    choices: Choice[];
    hasNoneOfTheAbove: boolean;
    multipleSelect: boolean;
    randomize: boolean;
}

interface Widget {
    alignment: string;
    graded: boolean;
    options: WidgetOptions;
    static: boolean;
    type: string;
    version: Version;
}

interface Question {
    content: string;
    images: Record<string, unknown>;
    widgets: Record<string, Widget>;
}

export interface PerseusItem {
    answerArea: AnswerArea;
    hints: any[]; // You might want to define a proper Hint type later
    question: Question;
}

// Usage example:
const sampleItem: PerseusItem = {
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
            'radio 1': {
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
            }
        }
    }
};