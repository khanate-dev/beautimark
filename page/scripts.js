const bookmarkListContainer = document.getElementById('bookmarkListContainer');

const addBookmarkMarkup = (bookmarkList) => {

	let bookmarkMarkup = "";
	console.log(bookmarkList[0].children);

	const folders = bookmarkList[0].children.filter(bookmarks => bookmarks.type === 'folder')
		, withoutFolders = bookmarkList[0].children.filter(bookmarks => bookmarks.type !== 'folder')

	folders.map(folder => {

		bookmarkMarkup += `<section id=${folder.id}><h1>${folder.title}</h1>`;

		folder.children.map(bookmark => {

			bookmarkMarkup +=
			`<div class='bookmark-container'>
				<h3>${bookmark.title}</h3>
				<a href=${bookmark.url}>${bookmark.url}</a>
			</div>`;

		});

		bookmarkMarkup += `</section>`;

	});

	if (withoutFolders.length > 1) {

		bookmarkMarkup += `<section id="folderLess"><h1>Folder Less</h1>`;

		withoutFolders.children.map(bookmark => {

			bookmarkMarkup +=
			`<div class='bookmark-container'>
				<h3>${bookmark.title}</h3>
				<a href=${bookmark.url}>${bookmark.url}</a>
			</div>`;

		});

		bookmarkMarkup += `</section>`;

	}

	bookmarkListContainer.innerHTML = bookmarkMarkup;

}

browser
	.bookmarks
	.getTree()
	.then(addBookmarkMarkup)
	.catch((error) => console.error(error));