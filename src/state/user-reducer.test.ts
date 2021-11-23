import { userReducer } from './user-reducer';


test('user reducer should increment only age', () => {
    const startState = { age: 36, childrenCount: 1, name: 'Boris' };
    const endState = userReducer(startState, { type: 'INCREMENT-AGE' })

    expect(endState.age).toBe(37);
    expect(endState.childrenCount).toBe(1);
});

test('user reducer should increment only childrenCount', () => {
    const startState = { age: 36, childrenCount: 1, name: 'Boris' };
    const endState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT' })

    expect(endState.childrenCount).toBe(2);
    expect(endState.age).toBe(36);
})

test('user reducer should change name of user', () => {
    const startState = { age: 36, childrenCount: 1, name: 'Boris' };
    const newName = 'Serega';
    const endState = userReducer(startState, { type: 'CHANGE-NAME', newName: newName })

    expect(endState.name).toBe(newName);
});

