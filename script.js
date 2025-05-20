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
      name: "H&M (JEM)",
      items: ["clothes"],
      location: "50 Jurong Gateway Rd, JEM, Singapore 608549",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.33328,
      lng: 103.74296
    },
    {
      name: "H&M (Kallang Wave Mall)",
      items: ["clothes"],
      location: "1 Stadium Place, Singapore 397628",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.30325,
      lng: 103.87380
    },
    {
      name: "H&M (NEX)",
      items: ["clothes"],
      location: "23 Serangoon Central, #01-12 to 33, Singapore 556083",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.35090,
      lng: 103.87232
    },
    {
      name: "H&M (Orchard Building)",
      items: ["clothes"],
      location: "1 Grange Rd, Orchard Building, Singapore 239693",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.30163,
      lng: 103.83724
    },
    {
      name: "H&M (PLQ)",
      items: ["clothes"],
      location: "2 Paya Lebar Rd, #01-01/01A/02, Singapore 409053",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.31772,
      lng: 103.89289
    },
    {
      name: "H&M (Suntec City)",
      items: ["clothes"],
      location: "3 Temasek Blvd, #01-307 / 308 / 309 / 311, Singapore 038983",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.29356,
      lng: 103.85681
    },
    {
      name: "H&M (United Square)",
      items: ["clothes"],
      location: "101 Thomson Rd, Singapore 307571",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.31754,
      lng: 103.84350
    },
    {
      name: "H&M (Vivo City)",
      items: ["clothes"],
      location: "1 HarbourFront Walk, #01-18/19/20, Singapore 098585",
      hours: "Mon-Sun: 10 AM - 10 PM",
      logo: "images/H&M logo.JPG",
      lat: 1.26502,
      lng: 103.82225
    }
  ];

  const map = L.map('map', {
    center: [1.358192, 103.825378],
    zoom: 12,
    dragging: true,
    zoomControl: true,
    scrollWheelZoom: false
  });

  window.scrollTo(window.scrollX, window.scrollY);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 25,
  }).addTo(map);

  let markers = [];

  function updateMatchingCenters() {
    const selectedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value);

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
        // Custom icon for donation centers
        const donationIcon = L.icon({
          iconUrl: center.logo,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        });

        // Capitalize each item (handles multi-word items too)
        const capitalizedItems = center.items.map(item =>
          item.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        ).join(", ");

        // Add marker with popup
        const marker = L.marker([center.lat, center.lng], { icon: donationIcon })
          .addTo(map)
          .bindPopup(` 
            <strong>${center.name}</strong><br>
            ${center.location}<br>
            ${center.hours}<br><br>
            <strong>Items Accepted:</strong> ${capitalizedItems}
          `);

        markers.push(marker);
      });

      // Auto-zoom to fit all markers on the map
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds());
    }
  }

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", updateMatchingCenters);
  });

  updateMatchingCenters();
});



