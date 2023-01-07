interface FetcherArgs {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
}

const fetcher = async ({ url, method, body, json = true }: FetcherArgs) => {
  if (!url || !url.length || !method || !method.length) {
    throw new Error(
      "Please provide a `url` and `method` argument to fetcher()"
    ) as Error;
  }

  const res = await fetch(url, {
    method,
    ...({ body: body && JSON.stringify(body) } || {}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(
      `API Error: url[${url}] | method[${method}] | body[${body}]`
    );
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export default fetcher;
