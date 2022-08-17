async function fetchCategories() {
  let response = await fetch(
    "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories?format=json"
  );
  let categories = await response.json();
}
