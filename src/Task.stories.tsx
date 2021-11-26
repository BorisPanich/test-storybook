import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Task } from './Task';


export default {
    title: 'Todolist/Task',
    component: Task,
    args: {
        changeTaskStatus: action('Status changed inside Task'),
        changeTaskTitle: action('Title changed inside Task'),
        removeTask: action('Remove Button  inside Task clicked')
    },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneExemple = Template.bind({});
TaskIsDoneExemple.args = {
    task: { id: '1', isDone: true, title: 'JS' },
    todolistId: 'todolistId1'
};

export const TaskIsNotDoneExemple = Template.bind({});
TaskIsNotDoneExemple.args = {
    task: { id: '1', isDone: false, title: 'CSS' },
    todolistId: 'todolistId1'
};
