import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FileUpload from '.';
import { MainProvider } from '../../context/MainContext';

// ----------------------------------------------------------------------

test('handles file change correctly', async () => {
  const updateFileContent = jest.fn();
  const updateWordCount = jest.fn();

  render(
    <MainProvider>
      <FileUpload />
    </MainProvider>
  );

  const file = new File(['file content'], 'file.txt', { type: 'text/plain' });
  const input = screen.getByTestId(/file-upload/i);

  Object.defineProperty(input, 'files', {
    value: [file],
  });

  fireEvent.change(input);

  expect(updateFileContent).toHaveBeenCalledWith('file content');
  expect(updateWordCount).toHaveBeenCalled();
});
