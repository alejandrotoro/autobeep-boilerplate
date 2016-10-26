import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import path from 'path';
import sinon from 'sinon';
import chai from 'chai';
import { fromJS } from 'immutable';
import { VenuesContainer } from '../../client/components/VenuesContainer';

chai.use(require('dirty-chai'));
chai.use(require('chai-jest-snapshot'));

const expect = chai.expect;

jest.mock('react-router');

describe('<VenuesContainer />', () => {
  
  const defaultConfig = { config: { defaultTitle: 'AutobeepTest' } };
  const props = Object.assign(defaultConfig, {});
  // const component = shallow(<VenuesContainer redux={fromJS({})} />);

  describe('render', () => {

    xit('match snapshot', () => {
      // const snapshotFileName = path.join(__dirname, 'VenuesContainer.spec.js.snap');
      // const snapshotName = 'VenuesContainer renders correctly';
      // expect(shallowToJson(component)).to.matchSnapshot(snapshotFileName, snapshotName);
    });

    xit('contains a Create Venue button', () => {
      // expect(component.find('.btn.btn-info')).to.have.length(1);
    });

    xit('contains a list of venues', () => {
      // expect(component.find('ul')).to.have.length(1);
    });
  });

});