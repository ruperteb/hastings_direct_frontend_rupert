import { Data } from '../definitions/dataTypes';

// Should be safe to call this function in multiple components within the application without performance concerns due to request caching / memoisation
// https://nextjs.org/docs/app/building-your-application/caching#request-memoization
export const getData = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_URL}/data`);
  const data: Data = await res.json();
  return data;
};
