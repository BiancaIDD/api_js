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
              background-image: url('https://storage.googleapis.com/bucket-larnu/media/business/145/images/YS4GQW1Q.png');
              background-size: contain;
              border-radius: 30px 30px 0px 0px;
              height: 140px;
            "
          >
            <img
              src="https://storage.googleapis.com/bucket-larnu/media/business/123/images/NHNE8PPG.png"
            />
          </div>
          <div>
            <h3>SEO</h3>
            <p>Total Quizes: 34</p>
            <p>Users: 130</p>
            <a href="https://www.larnu.com">Go to LarnU</a>
          </div>
        </div>
      `);
    }
  });
}

createCards();
