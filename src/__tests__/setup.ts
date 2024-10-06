import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

beforeEach(() => {
  // Reset any mocks or set up anything necessary before each test
  vi.clearAllMocks();
  cleanup();
  
});

afterEach(() => {
  

  cleanup();

  
});