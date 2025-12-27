interface MakeHttpRequest {
  host: string
  path: string
  token?: string
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: any
}

export async function makeHttpRequest({
  host,
  path,
  token,
  method = 'GET',
  body,
}: MakeHttpRequest) {

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  // 👉 SOLO agregar Authorization si hay token
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const request: RequestInit = {
    method,
    headers,
  }

  // 👉 SOLO agregar body si NO es GET
  if (body && method !== 'GET') {
    request.body = JSON.stringify(body)
  }

  return fetch(`${host}${path}`, request)
    .then(async res => {
      if (!res.ok) {
        throw new Error(String(res.status))
      }
      return res.json()
    })
}