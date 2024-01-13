import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import Button from '../src/components/Button';

describe('likeButtton', () => {
  it('Change the image when its clicked', () => {
    const mocisActive = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [false, mocisActive]);

    render(
      <Button testId="button" state1={unLiked} state2={liked} processNum={1} />,
    );
  });

  const button = screen.getByTestId('button');
  expect(mocisActive).not.toHaveBeenCalledWith();

  fireEvent.press(button);

  expect(mocisActive).toHaveBeenCalledWith(true);
});
