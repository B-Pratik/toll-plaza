export const GET = (url) => fetch(url).then((res) => res.json());
export const POST = (url, obj) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
