import onVolunteer from '../../src/hooks/onVolunteer';

describe('onVolunteer', () => {
  it('Throws an error if used as a before hook', () => {
    const hook = {
      type: 'before',
    };
    expect(() => onVolunteer()(hook)).toThrowError('onVolunteer should be used as an after hook');
  });

  it('Throws an error if not used on create or delete methods', () => {
    const hook = {
      type: 'after',
      method: 'update',
      result: {
        projectId: '1',
        userId: '2',
      },
    };
    expect(() => onVolunteer()(hook)).toThrow('onVolunteer hook should only be used on create/remove methods');
  });
});
