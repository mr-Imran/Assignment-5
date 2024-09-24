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
    const onlytime = new Date().toLocaleTimeString();
    const onlydate = new Date().toLocaleDateString();  
    const historyItem = `
        <div class="card border my-4 border-[#1111111A] rounded-2xl p-10 space-x-2 w-3/7">
            <span class="indicator-item badge badge-primary">${onlytime}</span>
            <h3 class="font-semibold text-2xl text-black">${donationName}</h3>
            <p class="text-lg text-gray-800"> Date : ${onlydate}</p>
            <span class="font-bold mt-2 block">${donationAmount} BDT</span>
        </div>
    `;

    historyList.innerHTML += historyItem;

    showCongratsModal(donationAmount,donationName);
}

document.getElementById('accountbalance').innerText = accountbalance;
