import fetch from 'node-fetch';
import { jest } from '@jest/globals';
import listRequest from './fetch';

// Mock the global fetch function
jest.mock('node-fetch', () => jest.fn());

describe('listRequest', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should make a GET request with correct configuration', async () => {
    const mockResponse = { data: 'test data' };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await listRequest.listRequest();

    expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:3002/news', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    expect(result).toEqual(mockResponse);
  });

  it('should handle network errors', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(listRequest.listRequest()).rejects.toThrow('Network error');
  });

  it('should handle invalid JSON response', async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockRejectedValueOnce(new Error('Invalid JSON')),
    });

    await expect(listRequest.listRequest()).rejects.toThrow('Invalid JSON');
  });
});