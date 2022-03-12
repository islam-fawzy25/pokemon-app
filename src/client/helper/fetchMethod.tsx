export async function fetchDb(endpoint:string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw "new ApiError(response.statusText, response.status)";
    }
      const dbData = await response.json();
    return dbData;
  }