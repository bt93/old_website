const listItems = $('.blog-list');
const itemsPerPage = 5;

function showPage(list, page) {
	let startIndex = (page * itemsPerPage) - itemsPerPage;
  	let endIndex = page * itemsPerPage;

  	for (let i = 0; i < list.length; i++) {
  		if (i >= startIndex && i < endIndex) {
  			list[i].style.display = '';
  		} else {
  			list[i].style.display = 'none';
  		}
  	}
} 

showPage(listItems, 1);


function appendPageLinks(list) {
	let numOfPages = list.length / itemsPerPage;
	let page = $('.main-content');
	let div = document.createElement('div');
	let pageLinks = `<ul class="pagination justify-content-center">`;

	for (let i = 0; i < numOfPages; i++) {
		pageLinks += `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`;
	}

	pageLinks += `</ul>`;
	div.innerHTML = pageLinks;
	page.append(div);

	let links = div.querySelectorAll('a');
	for (let i = 0; i < links.length; i++) {
		(function() {
			links[i].addEventListener('click', (e) => {
		        showPage(listItems, e.target.textContent);
		      },false)
		})();
	}
}	

appendPageLinks(listItems);