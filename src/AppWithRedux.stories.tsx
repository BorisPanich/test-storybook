import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import AppWithRedux from './AppWithRedux';
import { store } from './state/store';
import { ReduxStoreProviderDecorator } from './stories/ReduxStoreProviderDecorator';


export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    args: {},
    decorators: [ReduxStoreProviderDecorator]       //что-то вроде HOC
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux />

export const AppWithReduxStories = Template.bind({});
AppWithReduxStories.args = {};