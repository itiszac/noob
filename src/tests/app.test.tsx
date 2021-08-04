import React from 'react';
import {Route} from 'react-router-dom';

import {shallow} from 'enzyme';

import {App} from '../App';

describe('App', () => {
  describe('Integration', () => {
    it('should render app', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toBeDefined();
    });
    it('should render routes', () => {
      const wrapper = shallow(<App />);
      const len = wrapper.find(Route).length;
      expect(len).toBeGreaterThan(0);
    });
  });
});
