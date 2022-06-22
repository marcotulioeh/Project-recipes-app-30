export function saveTokensToLocalStorage() {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
}

export function saveUserEmailToLocalStorage(userEmail) {
  localStorage.setItem('user', JSON.stringify({ email: userEmail }));
}
