import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { EditableSpan } from './EditableSpan';


export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'Value EditableSpan changed'
        },
        value: {
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    }
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args: any) => <EditableSpan {...args} />;

export const EditableSpanStories = Template.bind({});
EditableSpanStories.args = {
    onChange: action('Value EditableSpan changed')
};

