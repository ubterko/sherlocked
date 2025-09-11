import React from "react";
import {ServerItemRenderer} from "../../package/perseus/src/server-item-renderer";
import {ServerItemRendererWithDebugUI} from "../../package/perseus/testing/server-item-renderer-with-debug-ui";
import type { PerseusItem } from "@khanacademy/perseus-core";
import {type PerseusDependenciesV2  } from "@khanacademy/perseus";
import { storybookDependenciesV2 } from "../../package/perseus/testing/test-dependencies";
import { useEffect, useState } from "react";
import { PerseusI18nProvider } from "../context/perseusI18nContext";

const [perseusItems, setPerseusItems] = useState<PerseusItem[]>([]);
// const [perseusItem, setPerseusItem] = useState<PerseusItem | null>(null);

useEffect(() => {
  fetch("http://localhost:8000/api/questions")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setPerseusItems(data); // Assuming the API returns an array of questions});
    }
)}, []);

const RendererComponent = () => {
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
                <ServerItemRenderer
                    problemNum={0}
                    item={perseusItems[0]}
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

        </PerseusI18nProvider>
        
    );
};

export default RendererComponent;
