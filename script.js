document.addEventListener("DOMContentLoaded", function () {
  const donationCenters = [
    {
      name: "Salvation Army (Balestier Road)",
      items: ["clothes", "books", "toys", "furniture", "appliances"],
      location: "123 Balestier Road, Singapore 329681",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/salvation_army.png",
      lat: 1.319665,
      lng: 103.884016
    },
    {
      name: "Salvation Army (Jalan Bukit Merah)",
      items: ["clothes", "books", "toys", "furniture", "appliances"],
      location: "107 Jalan Bukit Merah #01-1830, Singapore 160107",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/salvation_army.png",
      lat: 1.28002,
      lng: 103.82474
    },
    {
      name: "Salvation Army (Bishan)",
      items: ["clothes", "books", "toys", "furniture", "appliances"],
      location: "20 Bishan Street 22, Singapore 579768",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/salvation_army.png",
      lat: 1.36113,
      lng: 103.84258
    },
    {
      name: "Salvation Army (Pasir Panjang)",
      items: ["clothes", "books", "toys", "furniture", "appliances"],
      location: "350 Pasir Panjang Road, Singapore 118692",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/salvation_army.png",
      lat: 1.29066,
      lng: 103.77577
    },
    {
      name: "Salvation Army (Upper Bukit Timah)",
      items: ["clothes", "books", "toys", "furniture", "appliances"],
      location: "500 Upper Bukit Timah, Singapore 678108",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/salvation_army.png",
      lat: 1.36261,
      lng: 103.76769
    },
    {
      name: "ItsRainingRaincoats",
      items: ["clothes", "furniture", "appliances"],
      location: "217 Henderson Rd #03-07, Singapore 159555",
      hours: "Mon-Sat: 10 AM - 6 PM",
      logo: "images/rainingraincoats.png",
      lat: 1.28060,
      lng: 103.81920
    },
    {
      name: "Dignity Mama @ Khoo Teck Puat Hospital",
      items: ["books"],
      location: "90 Yishun Central, Singapore 768828",
      hours: "Mon-Fri: 10 AM - 4 PM",
      logo: "images/projectdignity.jpg",
      lat: 1.42448,
      lng: 103.83858
    },
        {
      name: "Dignity Mama @ Ng Teng Fong Hospital",
      items: ["books"],
      location: "1 Jurong East St 21 Tower A NTFGH Clinics #02-10, Singapore 609606",
      hours: "Mon-Sat: 10 AM - 6 PM",
      logo: "images/projectdignity.jpg",
      lat: 1.33389,
      lng: 103.74543
    },
            {
      name: "Dignity Mama @ NUH",
      items: ["books"],
      location: "1 Lower Kent Ridge Road #01-39, One@KentRidge, Singapore 119082",
      hours: "Mon-Fri: 10.30 AM - 8 PM",
      logo: "images/projectdignity.jpg",
      lat: 1.29383,
      lng: 103.78316
    },
                {
      name: "Dignity Mama @ Tan Tock Seng Hospital",
      items: ["books"],
      location: "11 Jalan Tan Tock Seng, Basement 1,Singapore 308433",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/projectdignity.jpg",
      lat: 1.32246,
      lng: 103.84643
    },
                    {
      name: "Dignity Mama @ Sengkang Hospital",
      items: ["books"],
      location: "110 Sengkang East Way Level 1 SKH Campus,Singapore 544886",
      hours: "Mon-Fri: 10 AM - 5 PM",
      logo: "images/projectdignity.jpg",
      lat: 1.39553,
      lng: 103.89286
    },
    {
      name: "Red Cross Singapore",
      items: ["clothes", "books", "appliances"],
      location: "62 Jalan Khairuddin, Singapore 457524",
      hours: "Tue-Sun: 10 AM - 4 PM",
      logo: "images/redcross.jpg",
      lat: 1.32155,
      lng: 103.92295
    },
    {
      name: "Charity E",
      items: ["clothes", "toys", "furniture"],
      location: "202 Kindness Dr., Metroville",
      hours: "Mon-Sun: 8 AM - 8 PM",
      logo: "images/charity_e_logo.png",
      lat: 1.3140,
      lng: 103.8450
    }
  ];

const map = L.map('map').setView([1.3521, 103.8198], 12);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 25,
  }).addTo(map);

  let markers = [];

  function updateMatchingCenters() {
    const selectedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value);

    const resultContainer = document.getElementById("match-result");
    resultContainer.innerHTML = "";

    // Remove previous markers from map
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    const matchedCenters = donationCenters
      .map(center => {
        const matchCount = center.items.filter(item => selectedItems.includes(item)).length;
        return { ...center, matchCount };
      })
      .filter(center => center.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (matchedCenters.length > 0) {
      matchedCenters.forEach(center => {
        // Add to list
        const div = document.createElement("div");
        div.classList.add("donation-center");
        div.innerHTML = `
          <div class="center-box">
            <h3>${center.name}</h3>
            <p><strong>Location:</strong> ${center.location}</p>
            <p><strong>Items Accepted:</strong> ${center.items.join(", ")}</p>
            <p><strong>Operating Hours:</strong> ${center.hours}</p>
          </div>
        `;
        resultContainer.appendChild(div);

        // Custom icon
        const donationIcon = L.icon({
          iconUrl: center.logo,
          iconSize: [30, 30],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50]
        });

        // Add marker with popup
        const marker = L.marker([center.lat, center.lng], { icon: donationIcon })
          .addTo(map)
          .bindPopup(`
            <strong>${center.name}</strong><br>
            ${center.location}<br>
            ${center.hours}<br>
            <strong>Items Accepted:</strong> ${center.items.join(", ")}
          `);

        markers.push(marker);
      });
    } else {
      resultContainer.innerHTML = "<p>No donation centers match your selected items.</p>";
    }
  }

  // Listen to checkbox changes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", updateMatchingCenters);
  });
});
