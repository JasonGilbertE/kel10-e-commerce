function removeItem(element) {
    element.closest('.product-item').remove();
    updateTotal();
}

function decrementValue(input) {
    let value = parseInt(input.value);
    if (value > 0) {
        input.value = value - 1;
        updateTotal();
    }
}

function incrementValue(input) {
    let value = parseInt(input.value);
    input.value = value + 1;
    updateTotal();
}

function toggleSelectAll(checkbox) {
    const checkboxes = document.querySelectorAll('.product-item input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = checkbox.checked);
    updateTotal();
}

function updateTotal() {
    let total = 0;
    const items = document.querySelectorAll('.product-item');
    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const quantity = parseInt(item.querySelector('input[type="text"]').value);
        const price = parseInt(item.querySelector('.price').dataset.price);
        if (checkbox.checked) {
            total += quantity * price;
        }
    });
    document.getElementById('total').innerText = `Rp. ${total}`;
    const detailButton = document.getElementById('detailButton');
    if (total > 0) {
        detailButton.classList.remove('bg-[#F7CDCF]', 'text-white');
        detailButton.classList.add('bg-[#C62E2E]', 'text-white');
    } else {
        detailButton.classList.remove('bg-[#C62E2E]', 'text-white');
        detailButton.classList.add('bg-[#F7CDCF]', 'text-white');
    }
}
module.exports = {
    theme: {
      extend: {
        colors: {
          'custom-pink': '#F7CDCF',
        },
      },
    },
    plugins: [],
  }
  
