/* eslint-disable dot-notation */
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Icon from '..';

describe('Icon', () => {
    afterEach(cleanup);
    it('icon prop', () => {
        const { container } = render(<Icon size="25" name="SmileOutlined" color="#1989fa" />);
        expect(container).toMatchSnapshot();
    });
});
