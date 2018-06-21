import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '123ABC'
    const action = {
        type: 'LOGIN',
        uid 
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should clear uid for logout', () => {
    const uid = '123ABC'
    const currentState = { uid }
    const action = { type: 'LOGOUT' };
    const state = authReducer(currentState, action);
    expect(state).toEqual({ });
});