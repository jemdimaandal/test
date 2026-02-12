const batangasLocations = [
    {
        id: 1,
        name: "Montemaria",
        category: "Church",
        lat: 13.64249,
        lng: 121.04327,
        address: "Barangay Pagkilatan, Batangas City, 4200 Batangas",
        description: "The Montemaria International Pilgrimage and Conference Center, located in Batangas City, Philippines, is a prominent religious site. It serves as a Catholic pilgrimage destination, featuring extensive devotional areas, conference rooms, and prayer spaces. The center is designed to host spiritual retreats and large religious events, attracting pilgrims from both the Philippines and abroad. A major attraction is the enormous statue of the Virgin Mary, which has become a well-known landmark. Montemaria functions as a hub for faith-based activities, spiritual growth, and religious tourism in the region.",
        rating: 4,
        panorama: "Photos/Montemaria/360.jpg",
        photos: [
            {
                title: "Plaza Square",
                url: "Photos/Montemaria/1.png"
            },
            {
                title: "Basilica Church",
                url: "Photos/Montemaria/2.png"
            }
        ]
    },
    {
        id: 2,
        name: "Calatagan Batangas",
        category: "Nature",
        lat: 13.83346,
        lng: 120.62964,
        address: "4215 Calatagan, Batangas",
        description: "The area of Calatagan, Batangas, is known for having many pristine white-sand beaches and clear blue waters, such as Burot Beach, Stilts Calatagan Beach Resort, and Manuel Uy Beach.",
        rating: 4,
        panorama: "Photos/Calatagan/360.jpg",
        photos: [
            {
                title: "Beach Shore",
                url: "Photos/Calatagan/1.png"
            },
            {
                title: "Crystal Waters",
                url: "Photos/Calatagan/2.png"
            },
            {
                title: "Sunset Beach",
                url: "Photos/Calatagan/3.png"
            }
        ]
    },
    {
        id: 3,
        name: "San Pablo, Santo Tomas",
        category: "Church",
        lat: 14.07724,
        lng: 121.17519,
        address: "35GG+Q3Q, San Pablo, Santo Tomas, Batangas",
        description: "The National Shrine of Saint Padre Pio is a renowned Roman Catholic pilgrimage site dedicated to the Italian saint Padre Pio. Established in 2003 and declared a national shrine in 2015, it is notable for its distinctive salakot-shaped church serene environment, and healing masses that attract worshippers from across the Philippines.",
        rating: 5,
        panorama: "Photos/Santo Tomas/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Santo Tomas/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Santo Tomas/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Santo Tomas/3.png"
            },
            {
                title: "Beach Paradise",
                url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop"
            }
        ]
    },
    {
        id: 4,
        name: "Laurel, Batangas",
        category: "Church",
        lat: 14.04783,
        lng: 120.93158,
        address: "Laurel, Batangas",
        description: "A distinct stone chapel resembling a cave, dedicated to St. Gabriel the Archangel. Nestled among trees and natural rock formations, it is regarded as a sacred and tranquil place where worshippers gather for prayer, contemplation, and religious ceremonies, especially during Holy Week.",
        rating: 5,
        panorama: "Photos/Laurel/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Laurel/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Laurel/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Laurel/3.png"
            }
        ]
    },
    {
        id: 5,
        name: "Taal Volcano",
        category: "Nature",
        lat: 14.01225,
        lng: 120.99718,
        address: "Taal, Batangas",
        description: "Taal Volcano, located in Batangas province in the Philippines, is one of the nation’s most active and unique volcanoes. It sits on an island within Taal Lake, creating a remarkable “volcano within a lake within a volcano” formation. Although not very tall, it has produced powerful eruptions in the past, posing significant threats to nearby residents. Taal is also a popular tourist destination, attracting visitors for boat tours, hikes to the crater, and stunning views of the lake and volcanic island.",
        rating: 5,
        panorama: "Photos/Taal/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Taal/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Taal/2.png"
            }
        ]
    },
    {
        id: 6,
        name: "M.H.Del Pilar, Poblacion, Batangas City",
        category: "Church",
        lat: 13.75460,
        lng: 121.05910,
        address: "M.H.Del Pilar, Poblacion, Batangas City",
        description: "The Minor Basilica and Parish of the Immaculate Conception, also known as the Archdiocesan Shrine of Santo Niño de Batangas, is a minor basilica located in Batangas City, Philippines. It is under the jurisdiction of the Archdiocese of Lipa. Established as an independent parish in 1614, the church is dedicated to the Immaculate Conception and is one of the oldest in Batangas.",
        rating: 5,
        panorama: "Photos/BatangasCity/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/BatangasCity/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/BatangasCity/2.png"
            }
        ]
    },
    {
        id: 7,
        name: "Caleruega Road, Nasugbu",
        category: "Church",
        lat: 14.07434,
        lng: 120.83475,
        address: "4231 Caleruega Road, Nasugbu, Batangas",
        description: "A serene Catholic chapel perched atop a hill. It is renowned for its rustic brick architecture, stained-glass windows, and meticulously maintained gardens. Surrounded by rolling hills and offering picturesque views, it is a popular destination for retreats, weddings, and quiet spiritual reflection",
        rating: 5,
        panorama: "Photos/Nasugbu/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Nasugbu/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Nasugbu/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Nasugbu/3.png"
            }
        ]
    },
    {
        id: 8,
        name: "Taysan, Batangas",
        category: "Church",
        lat: 13.73468,
        lng: 121.19922,
        address: "P5MX+RM4, Taysan, Batangas",
        description: "San Lorenzo Ruiz Parish in Taysan, Batangas, is a Roman Catholic church established in 2010 within the Archdiocese of Lipa. Located in Barangay Dagatan, it serves the surrounding communities and functions as a center for worship, parish events, and religious celebrations dedicated to its patron saint, San Lorenzo Ruiz, the first Filipino Martyr.",
        rating: 5,
        panorama: "Photos/Taysan/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Taysan/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Taysan/2.png"
            }
        ]
    },
    {
        id: 9,
        name: "J Castles, Tanauan City, Batangas",
        category: "Attraction",
        lat: 14.07640,
        lng: 121.06951,
        address: "J Castles, Tanauan City, Batangas",
        description: "J Castles is an engaging theme park located in Brgy. Gonzales, Tanauan City, Batangas, designed for family fun and interactive activities. These attractions emphasize playful engagement, visual effects, and photo opportunities, making J Castles a popular destination for families, school groups, and visitors seeking a unique, modern theme park experience in Batangas. ",
        rating: 5,
        panorama: "Photos/Tanauan/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Tanauan/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Tanauan/2.png"
            }
        ]
    },
    {
        id: 10,
        name: "Sitio Maligaya, Lolo's Place",
        category: "Food",
        lat: 13.74531,
        lng: 121.05174,
        address: "Sitio Maligaya, Barangay Rd, Batangas City, 4200 Batangas",
        description: "Established in May 2017 on a site that was once a scrapyard and a lomian, Lolo’s Place Restaurant was founded. The restaurant focuses on prioritizing customers, creating innovative products, and delivering memorable service and events. Welcome to Lolo’s Place Batangas!",
        rating: 5,
        panorama: "Photos/Lolo/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Lolo/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Lolo/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Lolo/3.png"
            },
            {
                title: "Beach Paradise",
                url: "Photos/Lolo/4.png"
            },
            {
                title: "Beach Paradise",
                url: "Photos/Lolo/5.png"
            },
            {
                title: "Beach Paradise",
                url: "Photos/Lolo/6.png"
            }
        ]
    },
    {
        id: 11,
        name: "Most Holy Trinity Parish Church",
        category: "Church",
        lat: 13.75765,
        lng: 121.07021,
        address: "Q34C+X3X, Batangas - Tabangao - Lobo Rd, Batangas City, 4200 Batangas",
        description: "The Most Holy Trinity Parish Church in Batangas City is a Roman Catholic place of worship located on Tabangao - Lobo Road in Batangas City, Batangas. It serves as a local spiritual center dedicated to the Holy Trinity and holds significant importance in the religious and communal life of its congregation. The church regularly conducts Masses, sacraments, and religious events, reflecting the vibrant Catholic heritage of the region. Its location along a main road provides easy access for both locals and visitors.",
        rating: 5,
        panorama: "Photos/Trinity/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Trinity/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Trinity/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Trinity/3.png"
            }

        ]
    },
    {
        id: 12,
        name: "Plaza Mabini",
        category: "Attraction",
        lat: 13.75544,
        lng: 121.05909,
        address: "47 Rizal Ave, Barangay 3, Batangas City, 4200 Batangas",
        description: "Plaza Mabini is the central public park located in the heart of Batangas City, directly across from the Basilica of the Immaculate Conception. It is named in honor of Apolinario Mabini, a Batangas hero, and features a monument of him at its center. The plaza has long served as a historic gathering place for both residents and tourists. Today, it is a popular spot for leisure, events, and daily activities, reflecting the city’s culture and community spirit.",
        rating: 5,
        panorama: "Photos/Plaza/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Plaza/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Plaza/2.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Plaza/3.png"
            },
            {
                title: "Punta Fuego",
                url: "Photos/Plaza/4.png"
            }

        ]
    },
    {
        id: 13,
        name: "Batangas City Sports Center",
        category: "Sports",
        lat: 13.75291,
        lng: 121.05221,
        address: "A delas Alas Dr Rd, Batangas City, Batangas",
        description: "The Batangas City Sports Center is a prominent public sports complex in Batangas City, serving as a venue for athletic training, competitions, and community events. It features a sports coliseum, a track and field oval, and an Olympic-sized swimming pool, providing facilities for a diverse range of sports and fitness activities. The center plays a crucial role in promoting youth development, health initiatives, and local sports events throughout the city. ",
        rating: 5,
        panorama: "Photos/Coli/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Coli/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Coli/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Coli/3.png"
            }
        ]
    },
    {
        id: 14,
        name: "Batangas Provincial Sports Complex",
        category: "Sports",
        lat: 13.77901,
        lng: 121.04552,
        address: "34 Bolbok Rd, Batangas City, Batangas",
        description: "The Batangas Provincial Sports Complex, located in Brgy. Bolbok, Batangas City, is a prominent government-owned sports facility. It features a sports coliseum, a track and field oval, a swimming pool, and a grandstand, serving as a primary venue for athletic training, school competitions, and provincial sports events. Additionally, the complex hosts community events and large gatherings, fostering sports development and recreational activities for the public throughout the province.",
        rating: 5,
        panorama: "Photos/Complex/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Complex/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Complex/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Complex/3.png"
            }
        ]
    },
    {
        id: 15,
        name: "Deer Claus Steakhouse & Restaurant - Batangas City",
        category: "Food",
        lat: 13.75456,
        lng: 121.07026,
        address: "Q33C+R5X, Batangas - Tabangao - Lobo Rd, Batangas City, Batangas",
        description: "Deer Claus Steakhouse & Restaurant, located on Batangas-Tabangao-Lobo Road in Batangas City, is a welcoming establishment known for its festive atmosphere and premium meat selections. The restaurant offers a variety of steak dishes, pasta, seafood, and comfort foods. It is a popular destination for casual dining, special occasions, and family gatherings, providing a cozy environment and satisfying meals for both locals and tourists.",
        rating: 5,
        panorama: "Photos/Claus/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Claus/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Claus/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Claus/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Claus/4.png"
            }
        ]
    },
    {
        id: 16,
        name: "Tako-Tako Batangas",
        category: "Food",
        lat: 13.77440,
        lng: 121.06635,
        address: "Inside of Carwash, In front of Ann's Home, Beside Shell, National Hwy, Kumintang Ibaba, Batangas City, 4200 Batangas",
        description: "Tako-Tako Batangas is a cozy, Japanese-inspired food stall in Batangas City, renowned for its freshly prepared takoyaki and other quick snacks. Famous for its flavorful fillings such as octopus, cheese, bacon, and crab, the stall offers budget-friendly street food and beverages, making it a popular choice for casual bites and takeout.",
        rating: 5,
        panorama: "Photos/Tako/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Tako/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Tako/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Tako/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Tako/4.png"
            }
        ]
    },
    {
        id: 17,
        name: "Wanam sa Bukid",
        category: "Food",
        lat: 13.75856,
        lng: 121.07117,
        address: "Batangas City, 4200 Batangas",
        description: "Wanam sa Bukid is a popular Filipino-Chinese restaurant chain located in Batangas City, Batangas, Philippines. It is renowned for offering homestyle Filipino and Chinese fusion cuisine in a family-friendly atmosphere. Favored by both locals and tourists, the restaurant has established itself as a notable dining destination in the region, particularly known for its budget-friendly prices and generous portions.",
        rating: 5,
        panorama: "Photos/Wanam/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Wanam/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Wanam/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Wanam/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Wanam/4.png"
            }
        ]
    },
    {
        id: 18,
        name: "SM City Batangas",
        category: "Mall",
        lat: 13.75571,
        lng: 121.06841,
        address: "Brgy, M.Pastor Ave, Pallocan Kanluran, Village, Batangas City, Batangas",
        description: "SM City Batangas is a large shopping center located in Pastor Village, Pallocan West, Batangas City. It features a variety of retail shops, restaurants, a supermarket, and a movie theater, making it one of the primary hubs for commerce and entertainment in the area. The mall is a popular destination for shopping, relaxation, and social gatherings among both residents and tourists.",
        rating: 5,
        panorama: "Photos/SM/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/SM/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/SM/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/SM/3.png"
            }
        ]
    },
    {
        id: 19,
        name: "Cadre’s Grill and Restaurant",
        category: "Food",
        lat: 13.76838,
        lng: 121.05914,
        address: "830 Arce Rd 3, Kumintang Ibaba, Batangas City, 4200 Batangas",
        description: "Cadre’s Grill and Restaurant is a warm and inviting local eatery located in Kumintang Ibaba, Batangas City. It offers delicious Filipino comfort dishes and grilled specialties. Renowned for its laid-back atmosphere and generous portions, it is an ideal spot for casual dining with family and friends.",
        rating: 5,
        panorama: "Photos/Cadre/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Cadre/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Cadre/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Cadre/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Cadre/4.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Cadre/5.png"
            }
        ]
    },
    {
        id: 20,
        name: "Butch Seafood & Grill Restaurant",
        category: "Food",
        lat: 13.78694,
        lng: 121.06851,
        address: "8 National Road, Batangas City, Batangas",
        description: "A popular dining destination in Batangas City, Butch Seafood & Grill Restaurant offers freshly prepared seafood, traditional Filipino dishes, and expertly grilled meals, all served in a warm and inviting atmosphere.",
        rating: 5,
        panorama: "Photos/Butch/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Butch/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Butch/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Butch/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Butch/4.png"
            }
        ]
    },
    {
        id: 21,
        name: "Forkie’s Batangas City",
        category: "Food",
        lat: 13.79215,
        lng: 121.07014,
        address: "C, Villa C Building, National Road, Balagtas, Batangas City, 4200 Batangas",
        description: "Forkie’s Batangas City is a comfortable and casual restaurant located in the Villa C Building on National Road in Brgy. Balagtas, Batangas City. Known for its relaxed atmosphere and delicious comfort food, it is a convenient spot for both residents and visitors — perfect for quick bites, gatherings with friends, or casual family meals.",
        rating: 5,
        panorama: "Photos/Forkie/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/Forkie/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Forkie/2.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Forkie/3.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/Forkie/4.png"
            }
        ]
    },
    {
        id: 22,
        name: "Tree House Restaurant",
        category: "Food",
        lat: 13.77651,
        lng: 121.05341,
        address: "Q3G3+H8Q, Diversion Road, Batangas City, Batangas",
        description: "Tree House Restaurant, located on Diversion Road in Batangas City, is a charming and popular Filipino eatery. It serves traditional Filipino comfort dishes in generous portions, ideal for sharing with loved ones. The warm and inviting ambiance makes it a favorite destination for both residents and visitors.",
        rating: 5,
        panorama: "Photos/TreeHouse/360.jpg",
        photos: [
            {
                title: "White Sand Beach",
                url: "Photos/TreeHouse/1.png"
            },
            {
                title: "Pristine Waters",
                url: "Photos/TreeHouse/2.png"
            }
        ]
    }
];


let map;
let markers = [];
let currentInfoPanel = null;

// Allowed area: Batangas Province (approximate bounding box)
const BATANGAS_BOUNDS = L.latLngBounds(
    L.latLng(13.45, 120.45), // Southwest
    L.latLng(14.25, 121.40)  // Northeast
);

// Track last valid center inside Batangas
let lastValidCenter = L.latLng(13.9, 121.0);

document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    populateLocationsList();
    setupSearchBar();
    setupEventListeners();
});

function enforceBatangasBounds() {
    const center = map.getCenter();
    if (!BATANGAS_BOUNDS.contains(center)) {
        map.panTo(lastValidCenter, { animate: false });
    } else {
        lastValidCenter = center;
    }
}


// Initialize the Leaflet map
function initializeMap() {
    // Create map centered on Batangas with appropriate zoom level
    map = L.map('map', {
        maxBounds: BATANGAS_BOUNDS.pad(0.05),
        maxBoundsViscosity: 0.8
    }).setView([13.9, 121.0], 10);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add markers for each location
    batangasLocations.forEach(location => {
        addMarker(location);
    });

    // Enforce bounds after any movement
    map.on('moveend', enforceBatangasBounds);
    // Record initial valid center
    lastValidCenter = map.getCenter();
}

// Add marker to map
function addMarker(location) {
    // Create custom icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                background: linear-gradient(135deg, #FF6B6B 0%, #088395 100%);
                width: 32px;
                height: 32px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            ">
                <div style="
                    transform: rotate(45deg);
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                ">📍</div>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    // Create marker
    const marker = L.marker([location.lat, location.lng], { 
        icon: customIcon,
        title: location.name
    }).addTo(map);
    
    // Create popup content
    const popupContent = `
        <div class="popup-header">
            <h3>${location.name}</h3>
        </div>
        <div class="popup-body">
            <p>${location.description.substring(0, 120)}...</p>
            <button class="popup-btn" onclick="showLocationDetails(${location.id})">
                View Details
            </button>
        </div>
    `;
    
    // Bind popup to marker
    marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
    });
    
    // Add click event to marker
    marker.on('click', function() {
        zoomToLocation(location);
    });
    
    // Store marker reference with location id
    markers.push({
        id: location.id,
        marker: marker,
        location: location
    });
}

// Zoom to specific location
function zoomToLocation(location) {
    map.flyTo([location.lat, location.lng], 14, {
        animate: true,
        duration: 1.5
    });
}

// Filter map markers
function filterMarkers(filteredLocations) {
    const visibleIds = new Set(filteredLocations.map(loc => loc.id));
    
    markers.forEach(item => {
        if (visibleIds.has(item.id)) {
            if (!map.hasLayer(item.marker)) {
                item.marker.addTo(map);
            }
        } else {
            if (map.hasLayer(item.marker)) {
                item.marker.remove();
            }
        }
    });
}


// ===================================
// SIDEBAR FUNCTIONALITY
// ===================================

// Populate the locations list in sidebar
function populateLocationsList(locations = batangasLocations) {
    const locationsList = document.getElementById('locationsList');
    locationsList.innerHTML = '';
    
    if (locations.length === 0) {
        locationsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-medium);">
                <p>No locations found.</p>
            </div>
        `;
        return;
    }
    
    locations.forEach((location, index) => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.setAttribute('data-id', location.id);
        
        // Add stagger animation
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="location-card-header">
                <h3>${location.name}</h3>
            </div>
            <p>${location.description.substring(0, 100)}...</p>
        `;
        
        // Add click event
        card.addEventListener('click', (e) => {
            handleLocationCardClick(location, e);
        });
        
        locationsList.appendChild(card);
    });
}

function setupSearchBar() {
    const locationsList = document.getElementById('locationsList');
    if (!locationsList) return;

    // Prevent duplicates
    if (document.querySelector('.search-container')) return;

    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="Search places..." aria-label="Search locations">
            <span class="search-icon">🔍</span>
        </div>
        <div class="filter-wrapper" style="margin-top: 10px;">
            <select id="categoryFilter" class="search-input" style="width: 100%; cursor: pointer;">
                <option value="All">All Categories</option>
                <option value="Church">Church</option>
                <option value="Nature">Nature</option>
                <option value="Food">Food & Dining</option>
                <option value="Attraction">Tourist Attractions</option>
                <option value="Sports">Sports & Recreation</option>
                <option value="Mall">Mall</option>
            </select>
        </div>
    `;

    // Insert before locations list
    locationsList.parentNode.insertBefore(searchContainer, locationsList);

    // Handle sticky positioning
    const header = document.querySelector('.sidebar-header');
    if (header) {
        const updateStickyPosition = () => {
            searchContainer.style.top = header.offsetHeight + 'px';
        };
        updateStickyPosition();
        window.addEventListener('resize', updateStickyPosition);
    }

    // Add search and filter functionality
    const searchInput = searchContainer.querySelector('.search-input');
    const categoryFilter = searchContainer.querySelector('#categoryFilter');

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        const filteredLocations = batangasLocations.filter(loc => {
            const matchesSearch = loc.name.toLowerCase().includes(searchTerm) || 
                                  loc.address.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'All' || loc.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        populateLocationsList(filteredLocations);
        filterMarkers(filteredLocations);
    }

    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
}

// Handle location card click
function handleLocationCardClick(location, e) {
    // Remove active class from all cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to clicked card
    if (e && e.currentTarget) {
        e.currentTarget.classList.add('active');
    }
    
    // Zoom to location
    zoomToLocation(location);
    
    // Open marker popup
    const markerData = markers.find(m => m.id === location.id);
    if (markerData) {
        markerData.marker.openPopup();
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// ===================================
// INFO PANEL FUNCTIONALITY
// ===================================

// Show location details in info panel
function showLocationDetails(locationId) {
    const location = batangasLocations.find(loc => loc.id === locationId);
    if (!location) return;
    
    currentInfoPanel = location;
    
    const infoPanelContent = document.getElementById('infoPanelContent');
    const infoPanel = document.getElementById('infoPanel');
    
    // Generate photos HTML
    let photosHTML = '';
    location.photos.forEach((photo, index) => {
        photosHTML += `
            <div class="photo-card" style="animation-delay: ${index * 0.1}s" onclick="openImageModal('${photo.url}')">
                <img src="${photo.url}" alt="" class="photo-image">
            </div>
        `;
    });
    
    // Populate info panel
    infoPanelContent.innerHTML = `
        <div class="info-header">
            <h2>${location.name}</h2>
            <div class="info-address">${location.address}</div>
        </div>
        
        <div class="tab-bar">
            <button class="tab-btn active" data-tab="about">About</button>
            <button class="tab-btn" data-tab="photos">Photos</button>
        </div>
        
        <div class="tab-content">
            <div class="tab-pane active" id="about">
                <div class="info-section">
                    <p>${location.description}</p>
                </div>
                <div class="info-buttons">
                    <button class="view-panorama-btn" onclick="showPanoramaView(${location.id})">
                        🌐 First Person View
                    </button>
                </div>
            </div>
            <div class="tab-pane" id="photos">
                <div class="info-section">
                    <div class="photos-container">
                        ${photosHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add tab functionality
    const tabBtns = infoPanelContent.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            // Remove active from all
            infoPanelContent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            infoPanelContent.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            infoPanelContent.querySelector(`#${tab}`).classList.add('active');
        });
    });
    
    // Show panel
    infoPanel.classList.add('active');
    
    // Close any open popups
    map.closePopup();
}

// Close info panel
function closeInfoPanel() {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.remove('active');
    currentInfoPanel = null;
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Close panel button
    const closeBtn = document.getElementById('closePanel');
    closeBtn.addEventListener('click', closeInfoPanel);
    
    // Toggle sidebar button (hamburger menu)
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleSidebar);
    }
    
    // Sidebar toggle button
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', toggleSidebar);
    }
    
    // Map toggle button (sidebar toggle on map area)
    const sidebarToggleBtnMap = document.getElementById('sidebarToggleBtnMap');
    if (sidebarToggleBtnMap) {
        sidebarToggleBtnMap.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }
    
    // Image modal close button
    const imageModalClose = document.getElementById('imageModalClose');
    if (imageModalClose) {
        imageModalClose.addEventListener('click', closeImageModal);
    }
    
    // Close image modal on click outside
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }
    
    // Close image modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    });
    
    // Close panorama button
    const panoramaCloseBtn = document.getElementById('panoramaCloseBtn');
    if (panoramaCloseBtn) {
        panoramaCloseBtn.addEventListener('click', closePanoramaView);
    }
    
    // Close panorama when clicking outside the viewer
    const panoramaModal = document.getElementById('panoramaModal');
    if (panoramaModal) {
        panoramaModal.addEventListener('click', function(e) {
            if (e.target === panoramaModal) {
                closePanoramaView();
            }
        });
    }
    
    // Close sidebar when clicking outside (mobile)
    const mapWrapper = document.querySelector('.map-wrapper');
    mapWrapper.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
}

// Toggle sidebar (mobile)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    
    // Add/remove mobile overlay
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay && sidebar.classList.contains('active')) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-overlay active';
        overlay.addEventListener('click', toggleSidebar);
        document.body.appendChild(overlay);
    } else if (overlay) {
        if (sidebar.classList.contains('active')) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    }
    
    // Close info panel when hiding sidebar
    if (!sidebar.classList.contains('active')) {
        closeInfoPanel();
    }
    
    // Invalidate map size to adjust to new layout after transition
    if (map) {
        setTimeout(() => map.invalidateSize(), 450);
    }
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        // Remove mobile overlay on desktop
        const overlay = document.querySelector('.mobile-overlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Remove active class from sidebar
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
    }
    
    // Invalidate map size to fix display issues
    if (map) {
        setTimeout(() => map.invalidateSize(), 100);
    }
}

// ===================================
// GLOBAL FUNCTIONS (called from HTML)
// ===================================

// Make showLocationDetails available globally for popup buttons
window.showLocationDetails = showLocationDetails;

// ===================================
// PANORAMA VIEWER FUNCTIONALITY
// ===================================

// Show panorama view (first person view)
function showPanoramaView(locationId) {
    const location = batangasLocations.find(loc => loc.id === locationId);
    if (!location || !location.panorama) return;
    
    const panoramaModal = document.getElementById('panoramaModal');
    const panoramaViewer = document.getElementById('panoramaViewer');
    
    // Show modal
    panoramaModal.classList.add('active');
    
    // Initialize Pannellum panorama viewer
    pannellum.viewer('panoramaViewer', {
        type: 'equirectangular',
        panorama: location.panorama,
        autoLoad: true,
        autoRotate: -2,
        yaw: 0,
        pitch: 0,
        hfov: 110,
        showControls: true,
        mouseZoom: true,
        title: `${location.name} - 360° View`
    });
}

// Close panorama view
function closePanoramaView() {
    const panoramaModal = document.getElementById('panoramaModal');
    panoramaModal.classList.remove('active');
    
    // Destroy the panorama viewer
    try {
        pannellum.viewer('panoramaViewer').destroy();
    } catch (e) {
        // Viewer already destroyed or doesn't exist
    }
}

// Open image modal
function openImageModal(url) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    
    modalImg.src = url;
    modalImg.alt = '';
    modal.classList.add('active');
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Make these functions available globally
window.showPanoramaView = showPanoramaView;
window.closePanoramaView = closePanoramaView;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
