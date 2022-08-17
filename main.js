async function fetchCategories() {
  let response = await fetch(
    "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories?format=json"
  );
  let categories = await response.json();
  return categories;
}

function createCards() {
  fetchCategories().then((categories) => {
    for (let category of categories.communityCategories) {
      const card = document.createRange().createContextualFragment(/*html*/ `
        <div class="card">
          <div
            style="
              background-image: url('${category.logo}');
              background-size: contain;
              border-radius: 30px 30px 0px 0px;
              height: 140px;
            "
          >
            <img
              src="${category.icon}"
            />
          </div>
          <div>
            <h3>${category.name}</h3>
            <p>Total Quizes: ${category.quizzesDone}</p>
            <p>Users: ${category.users}</p>
            <a href="https://www.larnu.com">Go to LarnU</a>
          </div>
        </div>
      `);
      const main = document.querySelector("main")
      main.append(card)
    }
  });
}

createCards();
