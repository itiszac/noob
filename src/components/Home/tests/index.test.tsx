import React from 'react';
import {shallow} from 'enzyme';

import {Home} from '../index';

describe('About', () => {
  describe('Visuals', () => {
    it('should render', () => {
      const component = shallow(<Home />);
      const aboutTxt = component.text();
      expect(aboutTxt).toEqual('Home Page');
    });
  });
});
