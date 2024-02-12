import {MailUiEditorProps} from "../MailUiEditor";
import {useMemo} from "react";

const useEditorId = (props: MailUiEditorProps) => {
    console.log('__useEditorId')
    return useMemo(() => {
        console.log('useEditorId')
        return props.editorId || `editor-${++window.__mailui_newEditorId}`
    }, [props.editorId]);
};

export default useEditorId