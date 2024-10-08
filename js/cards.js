const donationData = [
    {
        id: 'noakhali',
        imagesource: 'assets/noakhali.png',
        cardtitle: 'Support Flood Relief in Noakhali',
        description: 'Floods in Noakhali have left many people without essential supplies. Your support can provide food, clean water, and shelter. Every donation, no matter the amount, can change lives. Stand with us to help the affected families.',
        donationid: 'noakhali-donation',
        totaldonated: 0,
        buttonid: 'btn-d-noakhali'
    },
    {
        id: 'feni',
        imagesource: 'assets/feni.png',
        cardtitle: 'Help Flood Victims in Feni',
        description: 'Severe floods have caused widespread damage in Feni. By donating, you provide vital resources to people in need, ensuring they receive the help they deserve in this challenging time.',
        donationid: 'feni-donation',
        totaldonated: 0,
        buttonid: 'btn-d-feni'
    },
    {
        id: 'quota-injured',
        imagesource: 'assets/quota-protest.png',
        cardtitle: 'Support Injured in Quota Movement',
        description: 'Many individuals were injured during the quota movement protests. Your donation will provide them with medical assistance and help them recover from their injuries.',
        donationid: 'quota-injured-donation',
        totaldonated: 0,
        buttonid: 'btn-d-quota-injured'
    }
];

function generatepostcard() {
    const section = document.getElementById('sections');
    donationData.forEach(item => {
        const cardhtmlcode = `
            <div class="card lg:card-side bg-base-100 shadow-xl p-8 mt-10 rounded-2xl border border-[#1111111A]">
                <img src="${item.imagesource}" alt="${item.cardtitle}" title="${item.cardtitle}" />
                <div class="card-body gap-4">
                    <span class="flex items-center space-x-2 bg-[#38383816] w-1/4 p-4 rounded-xl">
                        <img src="assets/coin.png" alt="">
                        <span class="text-gray-700 font-bold text-xl"  id="${item.donationid}">${item.totaldonated}</span> <span class="text-gray-700 font-bold text-xl" > BDT </span>
                    </span>
                    <h2 class="card-title">${item.cardtitle}</h2>
                    <p>${item.description}</p>
                    <input id="input-donation-amount-for-${item.id}" type="text" title="donation amount"
                        placeholder="Enter Donation Amount" class="p-4 border border-[#1111111A] rounded-lg" />
                    <button id="${item.buttonid}" class="btn btn-outline bg-[#B4F461] px-8 py-4 text-xl font-extrabold content-center border-none">
                        Donate Now
                    </button>
                </div>
            </div>
        `;

        section.innerHTML += cardhtmlcode;
    });

    donationData.forEach(item => {
        const button = document.getElementById(item.buttonid);
        button.addEventListener('click', () => handleDonation(item.id));
    });
}

window.onload = generatepostcard;
