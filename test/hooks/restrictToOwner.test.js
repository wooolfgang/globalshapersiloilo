import restrictToOwner from '../../src/hooks/restictToOwner';

describe('restrictToOwner', () => {
  it('Throws an error if not used as a before hook', () => {
    const hook = {
      type: 'after',
    };
    expect(() => restrictToOwner()(hook)).toThrowError('The restrictToOwner hook should be used as a before hook');
  });

  it('Returns the hook if it is used by the backend/server', () => {
    const hook = {
      type: 'before',
      params: {
        provider: undefined,
      },
    };
    expect(restrictToOwner()(hook)).toEqual(hook);
  });

  it('Throws an error if there is no user in hook data', () => {
    const hook = {
      type: 'before',
      params: {
        provider: 'socketi',
        user: undefined,
      },
    };
    expect(() => restrictToOwner()(hook)).toThrowError('No user entity');
  });

  it('Throws an error if used with multiple changes', () => {
    const hook = {
      type: 'before',
      id: undefined,
      params: {
        provider: 'socketio',
        user: {},
      },
    };
    expect(() => restrictToOwner()(hook)).toThrowError('Multiple changes not supported yet');
  });

  it('Returns the hook if user is the owner', () => {
    const hook = {
      type: 'before',
      method: 'get',
      id: 123,
      params: {
        provider: 'socketio',
        user: {
          _id: 123,
        },
      },
      service: {
        get() {
          return Promise.resolve({ owner: 123 });
        },
      },
    };
    expect(restrictToOwner({ userIdField: '_id', ownerField: 'owner' })(hook)).resolves.toBe(hook);
  });
});
