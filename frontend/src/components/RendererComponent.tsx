import React, { useEffect, useState } from "react"; 
import { ServerItemRenderer } from "../../package/perseus/src/server-item-renderer";
import { storybookDependenciesV2 } from "../../package/perseus/testing/test-dependencies";
import type { PerseusItem } from "@khanacademy/perseus-core";
import { PerseusI18nProvider } from "../context/perseusI18nContext";

const RendererComponent = () => {
    const [perseusItems, setPerseusItems] = useState<PerseusItem[]>([]);
    const [loading, setLoading] = useState(true);

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

    const item = perseusItems[0];

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
                {!loading && !item && <p>No question found</p>}
                {item && (
                    <ServerItemRenderer
                        problemNum={0}
                        item={item}
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
                )}
            </div>
        </PerseusI18nProvider>
    );
};

export default RendererComponent;
