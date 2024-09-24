let accountbalance = 3000;

function showCongratsModal(amount,title) {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
    const message = modal.querySelector('p');
    message.textContent = `You Have Donated ${amount} BDT for ${title}`;

    document.getElementById('btn-modal').addEventListener('click', () => {
        modal.close();
    });
}

function handleDonation(donationid) {
    const donationInput = document.getElementById(`input-donation-amount-for-${donationid}`);
    const donationAmount = parseFloat(donationInput.value);

    const donation = donationData.find(item => item.id === donationid);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    if (donationAmount > accountbalance) {
        alert('Insufficient balance');
        return;
    }

    donation.totaldonated += donationAmount;
    accountbalance -= donationAmount;

    document.getElementById(donation.donationid).innerText = donation.totaldonated;
    document.getElementById('accountbalance').innerText = accountbalance;

    donationInput.value = '';

    addToHistory(donation.cardtitle, donationAmount);
}

function addToHistory(donationName, donationAmount) {
    const historyList = document.getElementById('history-list');
    const currentDate = new Date().toLocaleString();

    const historyItem = `
        <div class="card border my-6 border-[#1111111A] rounded-2xl p-4">
            <h3 class="font-semibold text-lg">${donationName}</h3>
            <p class="text-sm text-gray-500">${currentDate}</p>
            <span class="font-semibold mt-2 block">${donationAmount} BDT</span>
        </div>
    `;

    historyList.innerHTML += historyItem;

    showCongratsModal(donationAmount,donationName);
}

document.getElementById('accountbalance').innerText = accountbalance;

document.getElementById('btn-history').addEventListener('click', () => {
    const historySection = document.getElementById('history-section');
    const sections = document.getElementById('sections');

    if (historySection.style.display === 'none' || !historySection.style.display) {
        historySection.style.display = 'block';
        sections.style.display = 'none';
    } else {
        historySection.style.display = 'none';
        sections.style.display = 'block';
    }
});
