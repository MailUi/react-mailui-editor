import React from 'react';
import {render, screen} from '@testing-library/react';
import MailUiEditor, {MailUiEditorRef} from "../index";

describe('MailUi Editor component', () => {
    it('renders the editor without crashing', () => {
        // Arrange
        const ref = React.createRef<MailUiEditorRef>(); // Create a valid ref object

        // Act
        render(<MailUiEditor ref={ref}/>);

        // Assert
        const editorElement = screen.getByTestId('mailui-editor') as HTMLElement;
        expect(editorElement).toBeTruthy();

        // eslint-disable-next-line testing-library/no-node-access
        // const iframe = editorElement?.querySelector('iframe');
        // expect(iframe).toBeTruthy();

        // Access the content of the iframe
        // @ts-ignore
        // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Check if the desired element exists inside the iframe content
        // eslint-disable-next-line testing-library/no-node-access
        // const elementInsideIframe = iframeDocument?.getElementById('root');
        // expect(elementInsideIframe).toBeTruthy();
    });
});
