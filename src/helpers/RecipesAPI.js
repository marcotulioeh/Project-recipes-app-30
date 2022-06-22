async function retrieveRecipeAPIData(APIUrl) {
  const APIResponse = await fetch(APIUrl);
  const result = await APIResponse.json();
  return result;
}

export default retrieveRecipeAPIData;
