import React from "react";
import {ServerItemRenderer} from "../../package/perseus/src/server-item-renderer";
import {ServerItemRendererWithDebugUI} from "../../package/perseus/testing/server-item-renderer-with-debug-ui";
import type { PerseusItem } from "@khanacademy/perseus-core";
import {type PerseusDependenciesV2  } from "@khanacademy/perseus";
import { storybookDependenciesV2 } from "../../package/perseus/testing/test-dependencies";
import { useEffect, useState } from "react";
import { PerseusI18nProvider } from "../context/perseusI18nContext";

const RendererComponent = () => {
    const [perseusItems, setPerseusItems] = useState<PerseusItem[]>([]);

    useEffect(() => {
    fetch("http://localhost:8000/api/questions")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPerseusItems(data); // Assuming the API returns an array of questions});
        }
    )}, []);

    return (
        <PerseusI18nProvider
            strings={{
                chooseNumAnswers: ({numCorrect}) => 
                    `Select ${numCorrect} correct answer${numCorrect !== "1" ? "s" : ""}`,
                chooseAllAnswers: "Select all correct answers",
                chooseOneAnswer: "Select one answer",
            }}
        >

            <div style={{ padding: "20px" }}>
                 {perseusItems.length > 0 ? (
                    <ServerItemRenderer
                        problemNum={0}
                        item={perseusItems[1]}
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
                    ) : (
                        <p>Loading...</p>
                    )}
            </div>

        </PerseusI18nProvider>
        
    );
};

export default RendererComponent;
