export default async function getDetailsFromFood(url) {
  const result = await fetch(url);
  const data = await result.json();
  return data.meals;
}

export async function getRecommendedDrinks(url) {
  const result = await fetch(url);
  const data = await result.json();
  return data.drinks;
}

export async function getDetailsFromDrinks(url) {
  const result = await fetch(url);
  const dataDrinks = await result.json();
  return dataDrinks.drinks;
}
