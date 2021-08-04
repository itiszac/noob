import React from 'react';
import {shallow} from 'enzyme';

import {About} from '../index';

describe('About', () => {
  describe('Visuals', () => {
    it('should render', () => {
      const component = shallow(<About />);
      const aboutTxt = component.text();
      expect(aboutTxt).toEqual('About Page');
    });
  });
});
