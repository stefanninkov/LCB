const list_items = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');

        let img = document.createElement("img");
        img.setAttribute("src", "../img/casino.jpg");
        img.setAttribute("width", "100%");
        img.classList.add('item_img');

        let news = document.createElement('span')
        news.innerHTML = "NEWS";
        news.classList.add('span_news');

        let head = document.createElement('h3');
        head.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

        let author = document.createElement('span')
        author.innerHTML = " Author: Terry Davis";
        author.classList.add('span__author');

        let icon = document.createElement('i')
        icon.classList.add('fa');
        icon.classList.add('fa-user-circle');


        let date = document.createElement('span')
        date.innerHTML = " December 12, 2019";
        date.classList.add('span__date');

        let time = document.createElement('i')
        time.classList.add('far');
        time.classList.add('fa-clock');

        let p = document.createElement('p');
        p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ornare est, et fringilla neque. Quisque at accumsan felis. Maecenas sed feugiat leo, ac laoreet leo aliquam sodales purus sed auctor pharetra maecenas mauris leo, tempor at nisi vel, congue ac cursus velit scelerisque at. Etiam ex urna...";


        wrapper.appendChild(item_element);
        item_element.appendChild(img);
        item_element.appendChild(news);
        item_element.appendChild(head);
        item_element.appendChild(author);
        author.insertBefore(icon, author.firstChild);
        item_element.appendChild(date);
        date.insertBefore(time, date.firstChild);
        item_element.appendChild(p);



    }
}

function SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('act');

    button.addEventListener('click', function () {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumbers button.act');
        current_btn.classList.remove('act');

        button.classList.add('act');
    });

    return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);