export type RequestOptions = {
  method?: string
  headers?: Record<string, string>
  body?: any
  params?: Record<string, string | number>
}

export interface BaseApiConstructorProps {
  baseURL: string
  defaultHeaders?: Record<string, string>
}

export interface GetRequestOptions {
  headers?: Record<string, string>
  params?: Record<string, string | number>
}

export interface PostRequestOptions {
  headers?: Record<string, string>
  body?: any
}

export interface PatchRequestOptions {
  headers?: Record<string, string>
  body?: any
}

export interface DeleteRequestOptions {
  headers?: Record<string, string>
}

export class BaseApi {
  public baseURL: string
  public defaultHeaders: Record<string, string>

  constructor({ baseURL, defaultHeaders = {} }: BaseApiConstructorProps) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  private buildURL(
    endpoint: string,
    params?: Record<string, string | number>,
  ): string {
    const url = new URL(`${this.baseURL}${endpoint}`)
    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, String(params[key])),
      )
    }
    return url.toString()
  }

  private async request(endpoint: string, options: RequestOptions) {
    const url = this.buildURL(endpoint, options.params)
    const headers = { ...this.defaultHeaders, ...options.headers }

    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : null,
      cache: 'no-cache',
    })

    return this.handleResponse(response)
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }

  public get<T>(endpoint: string, options?: GetRequestOptions): Promise<T> {
    return this.request(endpoint, { method: 'GET', ...options })
  }

  public post<T>(endpoint: string, options?: PostRequestOptions): Promise<T> {
    return this.request(endpoint, { method: 'POST', ...options })
  }

  public patch<T>(endpoint: string, options?: PatchRequestOptions): Promise<T> {
    return this.request(endpoint, { method: 'PATCH', ...options })
  }

  public delete<T>(
    endpoint: string,
    options?: DeleteRequestOptions,
  ): Promise<T> {
    return this.request(endpoint, { method: 'DELETE', ...options })
  }
}
