import {API_BASE_URL, API_TIMEOUT} from '@constants/config';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

/**
 * API Service for making HTTP requests
 */
class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.timeout = API_TIMEOUT;
  }

  /**
   * Make an API request
   * @param endpoint - API endpoint
   * @param options - Request options
   * @returns Promise with response data
   */
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const {method = 'GET', headers = {}, body} = options;

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, {method: 'GET', headers});
  }

  /**
   * POST request
   */
  post<T>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.request<T>(endpoint, {method: 'POST', body, headers});
  }

  /**
   * PUT request
   */
  put<T>(
    endpoint: string,
    body: any,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.request<T>(endpoint, {method: 'PUT', body, headers});
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, {method: 'DELETE', headers});
  }
}

export default new ApiService();
