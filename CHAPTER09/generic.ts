interface FetchResponse<T> {
  status: number;
  headers: Headers;
  data: T;
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
  const response = await fetch(url);
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  };
}

(async () => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const response = await fetchJson<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const todo = response.data as Todo;
  console.log(todo);
})();
