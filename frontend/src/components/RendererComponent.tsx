import React, { useEffect, useState } from "react"; 
import { ServerItemRenderer } from "../../package/perseus/src/server-item-renderer";
import { storybookDependenciesV2 } from "../../package/perseus/testing/test-dependencies";
import type { PerseusItem } from "@khanacademy/perseus-core";
import { PerseusI18nProvider } from "../contexts/perseusI18nContext";
// import { ExamContext } from "../contexts/ExamContext";

const RendererComponent = () => {
    const [perseusItems, setPerseusItems] = useState<PerseusItem[]>([]);
    const [item, setItem] = useState(0);
    const [loading, setLoading] = useState(true); 
    // const { dispatch } = React.useContext(ExamContext);

    useEffect(() => {
        fetch("http://localhost:8000/api/questions")
            .then((response) => response.json())
            .then((data) => {
                console.log("API response:", data);
                setPerseusItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch questions:", err);
                setLoading(false);
            });
    }, []);

    // further work on grading system 
    // const handleAnswer = (answer) => {
    //     dispatch({ type: 'RECORD_ANSWER', payload: { questionId, answer } });
    // };

    const perseusItem = perseusItems[item];

    return (
        <PerseusI18nProvider
            strings={{
                chooseNumAnswers: ({ numCorrect }) => 
                    `Select ${numCorrect} correct answer${numCorrect !== "1" ? "s" : ""}`,
                chooseAllAnswers: "Select all correct answers",
                chooseOneAnswer: "Select one answer",
            }}
        >
            <div style={{ padding: "20px" }}>
                {loading && <p>Loading questions...</p>}
                {!loading && perseusItems.length >= 1 &&
                    <ServerItemRenderer
                        problemNum={0}
                        item={perseusItem}
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
                    />}
                
                <button 
                    onClick={() => {
                        const index = (item === perseusItems.length - 1) ? 0 : (item + 1);
                        console.log(`Item: ${index}`)
                        setItem(index)}
                    }
                    className="absolute bg-black rounded text-white p-2 bottom-8 
                    right-40">
                        Next
                </button>
            </div>
        </PerseusI18nProvider>
    );
};

export default RendererComponent;
