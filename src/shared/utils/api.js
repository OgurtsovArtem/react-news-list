export const checkResponse = async (res) => {
  return (await res.ok) ? await res.json() : await res.json().then((err) => Promise.reject(err));
};
