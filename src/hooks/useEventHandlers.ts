import {MailUiEditor as MailUiEditorClass, MailUiEditorProps} from "../MailUiEditor";
import {useEffect} from "react";

const useEventHandlers = (editor: MailUiEditorClass | null, props: MailUiEditorProps) => {
    useEffect(() => {
        if (!editor) return;

        props.onLoad?.(editor);

        const eventProps = Object.keys(props).filter(propName => /^on/.test(propName));
        eventProps.forEach((eventProp: string) => {
            // @ts-ignore
            if (/^on/.test(eventProp) && eventProp !== 'onLoad' && eventProp !== 'onReady' && typeof props[eventProp] === 'function') {
                // @ts-ignore
                editor.addEventListener(eventProp, props[eventProp]);
            }
        });

        if (props.onReady) {
            editor.addEventListener('editor:ready', () => {
                // @ts-ignore
                props.onReady(editor);
            });
        }
    }, [editor, props]);
};

export default useEventHandlers
