// 1) Let get our Guides an show then on the home page
const guideList = document.querySelector('#guide-list');

const getGuides = (guides) => {

  if (guides.length >= 1) {
    guideList.innerHTML = '';
    let counter = 1;
    guides.forEach(guide => {
      const html = `
      <div class="card">
        <div class="card-header">
          <h2 class="mb-0">
            <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne${counter}"
              aria-expanded="true" aria-controls="collapseOne">
             ${guide.data().title}
          </h2>
        </div>

        <div id="collapseOne${counter}" class="collapse" data-parent="#guide-list">
          <div class="card-body">
           ${guide.data().content}
          </div>
        </div>
      </div>
  `;

      guideList.innerHTML += html;
      counter += 1;
    });
  } else {
    guideList.innerHTML = `<h5 class="text-center font-weight-light">Login to see the Guides</h5>`;
  }
};

// 2) Show Menu Links based on user status

const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');

const showMenuUi = (user) => {
  if (user) {
    loggedInLinks.forEach(link => (link.style.display = 'block'));
    loggedOutLinks.forEach(link => (link.style.display = 'none'));
  } else {
    loggedInLinks.forEach(link => (link.style.display = 'none'));
    loggedOutLinks.forEach(link => (link.style.display = 'block'));
  }
}