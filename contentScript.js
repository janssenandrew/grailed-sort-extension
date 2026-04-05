let hasSetSort = false;

function setDefaultSort() {
  if (hasSetSort) return;
  let sortDropdown = document.querySelector('select.ais-SortBy-select');
  if (!sortDropdown)
    sortDropdown = document.querySelector('select.SortBy_select__5wf1w');
  if (!sortDropdown) return;

  if (sortDropdown.value !== 'Listing_by_date_added_production') {
    sortDropdown.value = 'Listing_by_date_added_production';
    sortDropdown.dispatchEvent(new Event('change', { bubbles: true }));
    hasSetSort = true;
  }
}

const observer = new MutationObserver(setDefaultSort);
observer.observe(document.body, { childList: true, subtree: true });
