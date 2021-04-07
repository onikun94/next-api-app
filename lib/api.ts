export async function getApi() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");

  const apiData = await response.json();
  return apiData.message;
}
