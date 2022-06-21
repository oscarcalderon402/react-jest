import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer>', () => {
  let footer = null;

  beforeAll(() => {
    footer = mount(<Footer />);
  });
  test('should render footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('should show platzi-store', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
