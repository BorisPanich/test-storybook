import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import AppWithRedux from './AppWithRedux';
import { store } from './state/store';


export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    args: {

    },
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = () => <Provider store={store}>
    <AppWithRedux />
</Provider>;

export const AppWithReduxStories = Template.bind({});
AppWithReduxStories.args = {};