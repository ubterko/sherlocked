import { ServerItemRendere} from "@khanacademy/perseus";

interface RadioWidgetProps {
    item: any;
    dependencies: any;
}

export default function RadioWidget({ item, dependencies }: RadioWidgetProps) {
    return (
        <div>
            <h3>Radio Widget</h3>
            <p>This is a placeholder for the Radio Widget component.</p>

            <ServerItemRenderer
                apiOptions={{
                    isArticle: false,
                    readOnly: true,
                }}
                item={item}
                dependencies={dependencies}
            />
        </div>
    );
};
