// 1) Let get our Guides an show then on the home page
const guideList = document.querySelector('#guide-list');

const getGuides = (guides) => {
  let counter = 1;
  guides.forEach(guide => {
    console.log(guide.data());
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
}