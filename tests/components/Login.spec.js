import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import path from 'path';
import sinon from 'sinon';
import chai from 'chai';
import LoginForm from '../../client/components/Login';

chai.use(require('dirty-chai'));
chai.use(require('chai-jest-snapshot'));

const expect = chai.expect;

jest.mock('react-router');

describe('<LoginForm />', () => {
  
  const defaultConfig = { config: { defaultTitle: 'AutobeepTest' } };
  const props = Object.assign(defaultConfig, {});
  const component = shallow(<LoginForm {...props} />);

  describe('render', () => {

    it('match snapshot', () => {
      const snapshotFileName = path.join(__dirname, 'LoginForm.spec.js.snap');
      const snapshotName = 'LoginForm renders correctly';
      expect(shallowToJson(component)).to.matchSnapshot(snapshotFileName, snapshotName);
    });

    it('contains a form container', () => {
      expect(component.find('.adminLoginForm')).to.have.length(1);
    });

    it('contains a form', () => {
      expect(component.find('form')).to.have.length(1);
    });

    it('contains an input for email', () => {
      expect(component.find('#inputEmail')).to.have.length(1);
    });

    it('contains an input for password', () => {
      expect(component.find('#inputPassword')).to.have.length(1);
    });

    it('contains a submit button', () => {
      expect(component.find('button[type="submit"]')).to.have.length(1);
    });
    
  });

  describe('handleEmailChange', () => {
    const target = { value: 'johndoe@a.com' };
    const changeEmailEvent = { preventDefault: sinon.spy(), target };

    component.find('input[type="email"]').simulate('change', changeEmailEvent);

    it('should call preventDefault', () => {
      expect(changeEmailEvent.preventDefault.calledOnce).to.be.true();
    });

    it('should add email value to the state', () => {
      expect(component.state('email')).to.equal(target.value);
    });
  });

  describe('handlePasswordChange', () => {
    const target = { value: '1234567890' };
    const changePasswordEvent = { preventDefault: sinon.spy(), target };

    component.find('input[type="password"]').simulate('change', changePasswordEvent);

    it('should call preventDefault', () => {
      expect(changePasswordEvent.preventDefault.calledOnce).to.be.true();
    });

    it('should add password value to the state', () => {
      expect(component.state('password')).to.equal(target.value);
    });
  });

});