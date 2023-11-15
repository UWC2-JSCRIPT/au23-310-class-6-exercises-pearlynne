$(document).ready(function () {
	/**
	 * Toggles "done" class on <li> element
	 */
	// Create callback function to toggle class
	function listToggleClass() {
		let $this = $(this);
		$this.toggleClass("done")
	};

	// Execute callback function for list items
	$("li").on("click", listToggleClass)


	/**
	 * Delete element when delete link clicked
	 */
	const $delete = $(".delete");

	// Create callback function to remove items
	function deleteItems(e) {
		let $this = $(this);
		// Add fade out [does not remove]
		$this.parent().fadeOut("normal", function () {
			$this.parent().remove();
		})
		e.stopPropagation()
	};

	// Execute callback function for delete
	$delete.on("click", deleteItems);


	/**
	 * Adds new list item to <ul>
	 */
	const addListItem = function (e) {
		e.preventDefault();
		const text = $('input').val();

		// Add new span item wth text
		const $newSpan = $("<span>").text(text);

		// Create new delete button with class and text
		const $newDel = $("<a>").addClass("delete").text("Delete");

		//Append span and delete to newly created list item
		const $newListItem = $("<li>").append($newSpan, $newDel);

		//Append item to current list
		$("ul").append($newListItem);

		$newListItem.on("click", listToggleClass);
		$newDel.on("click", deleteItems);

		// Reset input value
		$('input').val(null);
	};


	// Add listener for add
	const $add = $(".add-item");
	$add.on("click", addListItem);

});