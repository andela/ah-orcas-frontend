import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { HomePage, LoginPage } from '../views/HomePage';
import { Main } from './Routes';

test('test if home page link return homepage component', () => {
  const url = ['/',
  ];
  const wrapper = mount(
    <MemoryRouter initialEntries={url
    }
    >
      <Main />
    </MemoryRouter>,
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(LoginPage)).toHaveLength(0);
});

// test('test if home page link return homepage component', () => {
//   const Login = Main;
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/login/',
//     ]}
//     >
//       <Login />
//     </MemoryRouter>,
//   );
//   expect(wrapper.find(LoginPage)).toHaveLength(1);
//   expect(wrapper.find(HomePage)).toHaveLength(0);
// });
