
export async function fetchDb(endpoint:string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw "new ApiError(response.statusText, response.status)";
    }
      const dbData = await response.json();
    return dbData;
  }