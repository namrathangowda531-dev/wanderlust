import type { Itinerary, ItineraryDay, ItineraryItem, CurrencyInfo } from './supabase';

export type TripPreferences =
  | 'adventure'
  | 'nature'
  | 'food'
  | 'shopping'
  | 'culture'
  | 'relaxation'
  | 'spiritual'
  | 'family';

export type TravelStyle = 'budget' | 'balanced' | 'luxury';

export type TripInput = {
  destination: string;
  budget: number;
  days: number;
  preferences: TripPreferences[];
  travelStyle: TravelStyle;
};

// ─── Currency definitions ───────────────────────────────────────────

export const currencies: Record<string, CurrencyInfo> = {
  INR: { code: 'INR', symbol: '\u20b9', name: 'Indian Rupee', rateFromINR: 1 },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rateFromINR: 0.012 },
  EUR: { code: 'EUR', symbol: '\u20ac', name: 'Euro', rateFromINR: 0.011 },
  GBP: { code: 'GBP', symbol: '\u00a3', name: 'British Pound', rateFromINR: 0.0095 },
  JPY: { code: 'JPY', symbol: '\u00a5', name: 'Japanese Yen', rateFromINR: 1.75 },
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', rateFromINR: 0.044 },
  THB: { code: 'THB', symbol: '\u0e3f', name: 'Thai Baht', rateFromINR: 0.42 },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rateFromINR: 0.018 },
  TRY: { code: 'TRY', symbol: '\u20ba', name: 'Turkish Lira', rateFromINR: 0.39 },
  IDR: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rateFromINR: 188 },
  EUR2: { code: 'EUR', symbol: '\u20ac', name: 'Euro', rateFromINR: 0.011 },
  CHF: { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', rateFromINR: 0.011 },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rateFromINR: 0.016 },
  LKR: { code: 'LKR', symbol: 'Rs', name: 'Sri Lankan Rupee', rateFromINR: 3.6 },
  NPR: { code: 'NPR', symbol: 'Rs', name: 'Nepalese Rupee', rateFromINR: 1.6 },
  BDT: { code: 'BDT', symbol: '\u09f3', name: 'Bangladeshi Taka', rateFromINR: 1.35 },
  MVR: { code: 'MVR', symbol: 'Rf', name: 'Maldivian Rufiyaa', rateFromINR: 0.18 },
  BTN: { code: 'BTN', symbol: 'Nu', name: 'Bhutanese Ngultrum', rateFromINR: 1 },
};

// ─── Destination data ───────────────────────────────────────────────

type DestinationData = {
  landmarks: string[];
  museums: string[];
  parks: string[];
  restaurants: string[];
  cafes: string[];
  activities: string[];
  shopping: string[];
  markets: string[];
  dayTrips: string[];
  localDish: string;
  currency: string;
  isIndian: boolean;
  region: string;
  baseCostINR: number;
};

const destinationDatabase: Record<string, DestinationData> = {
  // ─── Indian Destinations ─────────────────────────────────────────
  jaipur: {
    landmarks: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort', 'Jal Mahal'],
    museums: ['Albert Hall Museum', 'City Palace Museum', 'Anokhi Museum of Hand Printing', 'Maharaja Sawai Man Singh II Museum'],
    parks: ['Ram Niwas Garden', 'Central Park Jaipur', 'Kanak Vrindavan Garden', 'Sisodia Rani Garden'],
    restaurants: ['Laxmi Misthan Bhandar', 'Choki Dhani', 'Suvarna Mahal at Rambagh Palace', 'Peacock Rooftop Restaurant', 'Rawat Mishtan Bhandar'],
    cafes: ['Tapri Central', 'Curious Life Coffee Roasters', 'Cafe Bae', 'The Coffee Garden', 'Anokhi Cafe'],
    activities: ['Elephant Ride at Amber Fort', 'Hot Air Balloon Ride', 'Block Printing Workshop', 'Camel Safari', 'Folk Dance & Music Show at Chokhi Dhani'],
    shopping: ['Johari Bazaar', 'Bapu Bazaar', 'Tripolia Bazaar', 'Chandpole Bazaar', 'Nehru Bazaar'],
    markets: ['Johari Bazaar', 'Bapu Bazaar', 'Tripolia Bazaar', 'Chandpole Bazaar'],
    dayTrips: ['Pushkar Camel Fair Town', 'Sariska Tiger Reserve', 'Abhaneri Step Well', 'Samode Palace'],
    localDish: 'dal baati churma and lassi',
    currency: 'INR',
    isIndian: true,
    region: 'Rajasthan',
    baseCostINR: 800,
  },
  agra: {
    landmarks: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Itmad-ud-Daulah (Baby Taj)', 'Mehtab Bagh'],
    museums: ['Taj Museum', 'Mughal Heritage Museum', 'Kalinjar Fort Museum'],
    parks: ['Mehtab Bagh', 'Ram Bagh', 'Shah Jahan Park', 'Taj Nature Walk'],
    restaurants: ['Peshawri at ITC Mughal', 'Pinch of Spice', 'Joney\u2019s Place', 'Saniya Palace Mughlai Restaurant', 'Dasaprakash'],
    cafes: ['Cafe Shiva', 'The Grand Buffet', 'Cafe Mughal Garden', 'Bon Barbecue'],
    activities: ['Sunrise Taj Mahal Visit', 'Sunset at Mehtab Bagh', 'Mughal Heritage Walk', 'Marble Inlay Workshop', 'Tonga Ride to Taj Mahal'],
    shopping: ['Sadar Bazaar', 'Kinari Bazaar', 'Subhash Bazaar', 'Taj Ganj Market'],
    markets: ['Sadar Bazaar', 'Kinari Bazaar', 'Subhash Bazaar', 'Taj Mahal Complex Market'],
    dayTrips: ['Fatehpur Sikri', 'Bharatpur Bird Sanctuary', 'Mathura & Vrindavan', 'Gwalior Fort'],
    localDish: 'petha and Mughlai thali',
    currency: 'INR',
    isIndian: true,
    region: 'Uttar Pradesh',
    baseCostINR: 700,
  },
  varanasi: {
    landmarks: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Manikarnika Ghat', 'Sarnath', 'Ramnagar Fort'],
    museums: ['Sarnath Archaeological Museum', 'Bharat Kala Bhavan', 'Ramnagar Fort Museum'],
    parks: ['Sarnath Deer Park', 'Beniya Park', 'Rana Mahal Ghat Garden'],
    restaurants: ['Deena Chat Bhandar', 'Brown Bread Bakery', 'Kerala Cafe', 'Baba Lassi', 'Kachori Sabzi at Vishwanath Gali'],
    cafes: ['Brown Bread Bakery Cafe', 'Cranky Cafe', 'Open Hand Cafe', 'Lotus Lounge'],
    activities: ['Ganga Aarti at Dashashwamedh Ghat', 'Sunrise Boat Ride on Ganges', 'Sarnath Buddhist Pilgrimage', 'Silk Weaving Workshop', 'Temple Hopping Tour'],
    shopping: ['Vishwanath Gali', 'Thatheri Bazaar', 'Godowlia Market', 'Silk Emporium'],
    markets: ['Vishwanath Gali', 'Thatheri Bazaar', 'Godowlia Market', 'Chowk Bazaar'],
    dayTrips: ['Sarnath', 'Vindhyachal Temple', 'Chunar Fort', 'Allahabad (Prayagraj)'],
    localDish: 'banarasi chaat and thandai',
    currency: 'INR',
    isIndian: true,
    region: 'Uttar Pradesh',
    baseCostINR: 500,
  },
  goa: {
    landmarks: ['Basilica of Bom Jesus', 'Fort Aguada', 'Se Cathedral', 'Chapora Fort', 'Dudhsagar Falls'],
    museums: ['Goa State Museum', 'Museum of Christian Art', 'Naval Aviation Museum', 'Goa Chitra Museum'],
    parks: ['Bhagwan Mahaveer Wildlife Sanctuary', 'Salim Ali Bird Sanctuary', 'Bondla Wildlife Sanctuary'],
    restaurants: ['Vinayak Family Restaurant', 'Martin\u2019s Corner', 'Thalassa', 'Sublime', 'Gunpowder'],
    cafes: ['Baba Woodhouse', 'Cafe Mojo', 'Tito\u2019s Cafe', 'Artjuna Cafe', 'Cafe Chocolatti'],
    activities: ['Beach Hopping in North Goa', 'Scuba Diving at Grande Island', 'Dudhsagar Waterfall Trek', 'Casino Cruise on Mandovi', 'Spice Plantation Tour'],
    shopping: ['Anjuna Flea Market', 'Mapusa Market', 'Panjim Market', 'Margao Market'],
    markets: ['Anjuna Flea Market', 'Mapusa Friday Market', 'Panjim Market', 'Arpora Saturday Night Market'],
    dayTrips: ['Dudhsagar Falls', 'Old Goa Churches', 'Netravali Wildlife Sanctuary', 'Tambdi Surla Temple'],
    localDish: 'fish curry rice and feni',
    currency: 'INR',
    isIndian: true,
    region: 'Goa',
    baseCostINR: 900,
  },
  kerala: {
    landmarks: ['Backwaters of Alleppey', 'Munnar Tea Gardens', 'Fort Kochi', 'Padmanabhaswamy Temple', 'Athirappilly Falls'],
    museums: ['Kerala Folklore Museum', 'Indo-Portuguese Museum', 'Hill Palace Museum', 'Pazhassiraja Museum'],
    parks: ['Periyar Tiger Reserve', 'Eravikulam National Park', 'Silent Valley National Park', 'Wayanad Wildlife Sanctuary'],
    restaurants: ['Malabar Junction', 'Paragon Restaurant', 'Kayees Biryani', 'Fort House Restaurant', 'Old Coffee House'],
    cafes: ['Kashi Art Cafe', 'Tea Pot Cafe', 'Cafe Craft', 'Ginger House Cafe', 'Qissa Cafe'],
    activities: ['Houseboat Cruise on Backwaters', 'Kathakali Performance', 'Ayurvedic Spa & Massage', 'Tea Plantation Walk in Munnar', 'Snake Boat Ride'],
    shopping: ['Broadway Kochi', 'Spice Market Mattancherry', 'Connemara Market', 'MG Road'],
    markets: ['Broadway Market', 'Spice Market', 'Jew Town Market', 'Ernakulam Market'],
    dayTrips: ['Munnar Hill Station', 'Thekkady Wildlife Sanctuary', 'Varkala Beach', 'Bekal Fort'],
    localDish: 'appam with stew and filter coffee',
    currency: 'INR',
    isIndian: true,
    region: 'Kerala',
    baseCostINR: 750,
  },
  delhi: {
    landmarks: ['Red Fort', 'India Gate', 'Qutub Minar', 'Humayun\u2019s Tomb', 'Lotus Temple', 'Rashtrapati Bhavan'],
    museums: ['National Museum', 'National Gallery of Modern Art', 'Gandhi Smriti', 'Crafts Museum', 'Nehru Memorial Museum'],
    parks: ['Lodhi Garden', 'Mughal Gardens', 'Deer Park', 'Nehru Park', 'Garden of Five Senses'],
    restaurants: ['Karim\u2019s Jama Masjid', 'Indian Accent', 'Bukhara at ITC Maurya', 'Paranthe Wali Gali', 'Saravana Bhavan'],
    cafes: ['Blue Tokai Coffee', 'Social', 'Cafe Lota', 'Rose Cafe', 'United Coffee House'],
    activities: ['Old Delhi Food Walk', 'Heritage Walk in Shahjahanabad', 'Dilli Haat Craft Shopping', 'Light & Sound Show at Red Fort', 'Cycle Tour of Old Delhi'],
    shopping: ['Connaught Place', 'Chandni Chowk', 'Dilli Haat', 'Khan Market', 'Sarojini Nagar Market'],
    markets: ['Chandni Chowk', 'Sarojini Nagar', 'Dilli Haat', 'Janpath Market'],
    dayTrips: ['Agra Day Trip', 'Mathura & Vrindavan', 'Neemrana Fort Palace', 'Sultanpur Bird Sanctuary'],
    localDish: 'chole bhature and jalebi',
    currency: 'INR',
    isIndian: true,
    region: 'Delhi NCR',
    baseCostINR: 600,
  },
  mumbai: {
    landmarks: ['Gateway of India', 'Chhatrapati Shivaji Terminus', 'Marine Drive', 'Elephanta Caves', 'Haji Ali Dargah'],
    museums: ['Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', 'Mani Bhavan', 'Nehru Science Centre', 'BEST Museum'],
    parks: ['Hanging Gardens', 'Sanjay Gandhi National Park', 'Kamla Nehru Park', 'Five Gardens'],
    restaurants: ['Leopold Cafe', 'Mohammad Ali Road Food Stalls', 'The Bombay Canteen', 'Trishna', 'Cafe Mondegar'],
    cafes: ['Theobroma', 'Cafe Madras', 'Kala Ghoda Cafe', 'Cafe Leopold', 'Bombay Coffee Roasters'],
    activities: ['Bollywood Studio Tour', 'Elephanta Island Ferry', 'Dharavi Slum Tour', 'Marine Drive Sunset Walk', 'Street Food Tour of Mohammed Ali Road'],
    shopping: ['Colaba Causeway', 'Linking Road', 'Crawford Market', 'Chor Bazaar', 'Fashion Street'],
    markets: ['Crawford Market', 'Colaba Causeway', 'Chor Bazaar', 'Linking Road Market'],
    dayTrips: ['Elephanta Caves', 'Lonavala & Khandala', 'Alibaug Beach', 'Matheran Hill Station'],
    localDish: 'vada pav and cutting chai',
    currency: 'INR',
    isIndian: true,
    region: 'Maharashtra',
    baseCostINR: 700,
  },
  rishikesh: {
    landmarks: ['Lakshman Jhula', 'Triveni Ghat', 'Ram Jhula', 'Neelkanth Mahadev Temple', 'The Beatles Ashram'],
    museums: ['The Beatles Ashram Gallery', 'Omkareshwar Temple Art Gallery'],
    parks: ['Rajaji National Park', 'Neer Garh Waterfall Trail', 'Phool Chatti Nature Trail'],
    restaurants: ['Chotiwala Restaurant', 'Ayurpak Restaurant', 'Ganga Ayurvedic Restaurant', 'Pure Soul Cafe', 'Sitting Elephant'],
    cafes: ['The Beatles Cafe', 'Little Buddha Cafe', 'Freedom Cafe', 'Pyramid Cafe', 'Cafe de Goon'],
    activities: ['White Water Rafting on Ganges', 'Yoga & Meditation Retreat', 'Bungee Jumping at Mohanchatti', 'Ganga Aarti at Triveni Ghat', 'Trekking to Neer Garh Waterfall'],
    shopping: ['Lakshman Jhula Market', 'Rishikesh Main Market', 'Ganga Handicrafts'],
    markets: ['Lakshman Jhula Market', 'Rishikesh Market', 'Swarg Ashram Market'],
    dayTrips: ['Haridwar', 'Neelkanth Mahadev Temple Trek', 'Kunjapuri Sunrise Trek', 'Dehradun'],
    localDish: 'sattu paratha and herbal tea',
    currency: 'INR',
    isIndian: true,
    region: 'Uttarakhand',
    baseCostINR: 500,
  },
  manali: {
    landmarks: ['Hadimba Devi Temple', 'Solang Valley', 'Rohtang Pass', 'Manikaran Sahib', 'Old Manali'],
    museums: ['Naggar Castle Museum', 'Mountaineering Institute'],
    parks: ['Van Vihar National Park', 'Great Himalayan National Park', 'Jogini Waterfall Trail'],
    restaurants: ['Johnson\u2019s Cafe', 'Cafe Amigos', 'The Lazy Dog', 'Drifters Inn Cafe', 'La Plage'],
    cafes: ['Cafe 1947', 'The Johnson\u2019s Lodge', 'Cafe Chemmi', 'Old World Cafe', 'Cafe Illiterati'],
    activities: ['Skiing at Solang Valley', 'Paragliding', 'River Rafting on Beas', 'Trekking to Hampta Pass', 'Mountain Biking'],
    shopping: ['Mall Road Manali', 'Tibetan Market', 'Old Manali Market'],
    markets: ['Mall Road Market', 'Tibetan Market', 'Manu Market'],
    dayTrips: ['Rohtang Pass', 'Manikaran Sahib', 'Naggar Castle', 'Kasol & Tosh'],
    localDish: 'momos and butter tea',
    currency: 'INR',
    isIndian: true,
    region: 'Himachal Pradesh',
    baseCostINR: 600,
  },
  udaipur: {
    landmarks: ['City Palace Udaipur', 'Lake Pichola', 'Lake Palace', 'Jagdish Temple', 'Sajjangarh (Monsoon Palace)'],
    museums: ['City Palace Museum', 'Vintage Car Museum', 'Shilpgram Museum', 'Bagore Ki Haveli Museum'],
    parks: ['Saheliyo Ki Bari', 'Gulab Bagh', 'Doodh Talai Garden', 'Manikya Lal Verma Park'],
    restaurants: ['Upre Restaurant', 'Ambrai Restaurant', 'Raaj Bagh', 'Millets of Mewar', 'Jaiwana Haveli Rooftop'],
    cafes: ['Cafe Edelweiss', 'Jheel Cafe', 'Cafe Fateh Garh', 'Udai Art Cafe', 'The Green Leaf Cafe'],
    activities: ['Sunset Boat Ride on Lake Pichola', 'Vintage Car Ride', 'Miniature Painting Workshop', 'Kathakali Performance at Bagore Ki Haveli', 'Sunset at Monsoon Palace'],
    shopping: ['Bada Bazaar', 'Hathi Pol Bazaar', 'Bapu Bazaar Udaipur', 'Shilpgram Crafts'],
    markets: ['Bada Bazaar', 'Hathi Pol', 'Bapu Bazaar', 'Chetak Circle Market'],
    dayTrips: ['Kumbhalgarh Fort', 'Ranakpur Jain Temple', 'Mount Abu', 'Chittorgarh Fort'],
    localDish: 'daal baati and ghevar',
    currency: 'INR',
    isIndian: true,
    region: 'Rajasthan',
    baseCostINR: 750,
  },
  kolkata: {
    landmarks: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Belur Math', 'St. Paul\u2019s Cathedral'],
    museums: ['Indian Museum Kolkata', 'Victoria Memorial Museum', 'Academy of Fine Arts', 'Science City'],
    parks: ['Maidan', 'Botanical Garden Acharya Jagadish Chandra Bose', 'Central Park Kolkata', 'Eco Park'],
    restaurants: ['Peter Cat', 'Arsalan', '6 Ballygunge Place', 'Aheli at Peerless Inn', 'Kewpies Kitchen'],
    cafes: ['Flurys', 'Indian Coffee House', 'La Martiniere Cafe', 'Roastery Roti & Coffee', 'Sienna Cafe'],
    activities: ['Tram Ride through Kolkata', 'Howrah Bridge Walk at Sunset', 'Adda at College Street Coffee House', 'Durga Puja Pandale Hopping', 'Ganges River Cruise'],
    shopping: ['New Market', 'Gariahat Market', 'College Street Book Market', 'Hatibagan Market'],
    markets: ['New Market', 'Gariahat Market', 'College Street', 'Hatibagan'],
    dayTrips: ['Sundarbans Mangrove Safari', 'Shantiniketan', 'Digha Beach', 'Mandarmani Beach'],
    localDish: 'rosogolla and kathi roll',
    currency: 'INR',
    isIndian: true,
    region: 'West Bengal',
    baseCostINR: 550,
  },
  chennai: {
    landmarks: ['Marina Beach', 'Kapaleeswarar Temple', 'Fort St. George', 'San Thome Basilica', 'Valluvar Kottam'],
    museums: ['Government Museum Chennai', 'Birla Planetarium', 'Cholamandal Artists Village', 'Fort Museum'],
    parks: ['Guindy National Park', 'Semmozhi Poonga Botanical Garden', 'Anna Zoological Park', 'Theosophical Society Garden'],
    restaurants: ['Murugan Idli Shop', 'Saravana Bhavan', 'Buhari Hotel', 'Amma Canteen', 'Karavalli'],
    cafes: ['Writer\u2019s Cafe', 'Amethyst Cafe', 'Chamiers Cafe', 'Ecstasy Dark Chocolate Cafe', 'Java'],
    activities: ['Classical Music & Dance at Kalakshetra', 'Marina Beach Walk', 'Temple Architecture Tour', 'Filter Coffee Tasting', 'Silk Saree Shopping at Kanchipuram'],
    shopping: ['T. Nagar Saree Market', 'Pondy Bazaar', 'George Town', 'Anna Salai'],
    markets: ['T. Nagar Market', 'Pondy Bazaar', 'George Town Market', 'Kodambakkam Market'],
    dayTrips: ['Mahabalipuram', 'Kanchipuram Temples', 'Pondicherry', 'Tirupati Temple'],
    localDish: 'masala dosa and filter coffee',
    currency: 'INR',
    isIndian: true,
    region: 'Tamil Nadu',
    baseCostINR: 500,
  },
  amritsar: {
    landmarks: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Durgiana Temple', 'Gobindgarh Fort'],
    museums: ['Partition Museum', 'Maharaja Ranjit Singh Museum', 'Jallianwala Bagh Memorial Museum'],
    parks: ['Ram Bagh Gardens', 'Company Bagh', 'Guru Nanak Dev University Botanical Garden'],
    restaurants: ['Kesar Da Dhaba', 'Brothers Dhaba', 'Bharawan Da Dhaba', 'Makhan Fish & Chicken', 'Beera Chicken Corner'],
    cafes: ['Cafe De Temples', 'The Coffee Shop', 'Cafe 7', 'Bristles Coffee Bar'],
    activities: ['Wagah Border Retreat Ceremony', 'Golden Temple Night Palki Ceremony', 'Punjabi Thali Feast', 'Cooking Class for Punjabi Cuisine', 'Heritage Walk in Old Amritsar'],
    shopping: ['Hall Bazaar', 'Katra Jaimal Singh Market', 'Lohgarh Gate Market', 'Guru Bazaar'],
    markets: ['Hall Bazaar', 'Katra Jaimal Singh', 'Guru Bazaar', 'Lohgarh Gate Market'],
    dayTrips: ['Wagah Border', 'Tarn Taran Sahib', 'Harike Wetland', 'Dera Baba Nanak'],
    localDish: 'amritsari kulcha and lassi',
    currency: 'INR',
    isIndian: true,
    region: 'Punjab',
    baseCostINR: 550,
  },
  leh: {
    landmarks: ['Leh Palace', 'Thiksey Monastery', 'Pangong Lake', 'Nubra Valley', 'Shanti Stupa'],
    museums: ['Hall of Fame Museum', 'Ladakh Art & Media Centre'],
    parks: ['Hemis National Park', 'Tso Moriri Lake', 'Indus Valley'],
    restaurants: ['The Tibetan Kitchen', 'Bon Appetit', 'Gesmo Restaurant', 'La Maison Cafe', 'Wonder Garden'],
    cafes: ['World Garden Cafe', 'Yama Coffee', 'Cafe Jeevan', 'Lzoma Restaurant & Cafe'],
    activities: ['Khardung La Pass Drive', 'Magnetic Hill Visit', 'River Rafting on Zanskar', 'Camel Ride in Nubra Valley', 'Monastery Circuit Tour'],
    shopping: ['Leh Main Bazaar', 'Tibetan Market', 'Moti Market'],
    markets: ['Leh Main Bazaar', 'Tibetan Market', 'Moti Market'],
    dayTrips: ['Pangong Tso Lake', 'Nubra Valley', 'Tso Moriri', 'Magnetic Hill & Gurudwara Pathar Sahib'],
    localDish: 'thukpa and butter tea',
    currency: 'INR',
    isIndian: true,
    region: 'Ladakh',
    baseCostINR: 1000,
  },
  mysore: {
    landmarks: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\u2019s Church', 'Brindavan Gardens', 'Srirangapatna'],
    museums: ['Mysore Palace Museum', 'Rail Museum', 'Folk Lore Museum', 'Jayachamarajendra Art Gallery'],
    parks: ['Mysore Zoo', 'Karanji Lake', 'Ranganathittu Bird Sanctuary', 'Kukkarahalli Lake'],
    restaurants: ['Mylari Dosa', 'Vinayaka Mylari', 'RRR Restaurant', 'Oyster Bay', 'The Old House'],
    cafes: ['Indra Cafe', 'Cafe Aramane', 'Cafe Palms', 'Tao Gardens Cafe', 'Cafe Coffee Day'],
    activities: ['Mysore Palace Illumination (Sundays)', 'Silk Saree Shopping', 'Sandalwood Oil Factory Visit', 'Yoga Class at Gokulam', 'Brindavan Gardens Musical Fountain'],
    shopping: ['Devaraja Market', 'Cauvery Handicrafts Emporium', 'Sandalwood Factory', 'Mysore Silk Emporium'],
    markets: ['Devaraja Market', 'Vishwa Shanti Ashram Market', 'Mysore Silk Market'],
    dayTrips: ['Srirangapatna', 'Bandipur National Park', 'Coorg Coffee Plantations', 'Shivanasamudra Falls'],
    localDish: 'mysore masala dosa and filter coffee',
    currency: 'INR',
    isIndian: true,
    region: 'Karnataka',
    baseCostINR: 550,
  },
  hampi: {
    landmarks: ['Virupaksha Temple', 'Vittala Temple', 'Lotus Mahal', 'Elephant Stables', 'Matanga Hill Sunset'],
    museums: ['Archaeological Museum Kamalapuram', 'Hampi Heritage Gallery'],
    parks: ['Daroji Bear Sanctuary', 'Tungabhadra River Banks'],
    restaurants: ['Mango Tree Restaurant', 'Ganesh Restaurant', 'Sri Lakshmi Tourist Home', 'Shanthi Guest House Restaurant', 'Laughing Buddha'],
    cafes: ['Cafe Lotus', 'Goan Corner', 'Cafe Chillout', 'Kishkinda Heritage Cafe'],
    activities: ['Coracle Ride on Tungabhadra', 'Sunrise Hike to Matanga Hill', 'Boulder Climbing', 'Heritage Cycling Tour', 'Temple Architecture Tour'],
    shopping: ['Hampi Bazaar', 'Hampi Island Market', 'Kamalapur Market'],
    markets: ['Hampi Bazaar', 'Hampi Island Market', 'Virupapura Gaddhe Market'],
    dayTrips: ['Anegundi Village', 'Daroji Bear Sanctuary', 'Tungabhadra Dam', 'Badami Cave Temples'],
    localDish: 'South Indian thali and jowar roti',
    currency: 'INR',
    isIndian: true,
    region: 'Karnataka',
    baseCostINR: 450,
  },
  pondicherry: {
    landmarks: ['Sri Aurobindo Ashram', 'Auroville', 'Promenade Beach', 'Basilica of the Sacred Heart of Jesus', 'Arikamedu'],
    museums: ['Pondicherry Museum', 'Bharathidasan Museum', 'Ananda Ranga Pillai House'],
    parks: ['Bharathi Park', 'Botanical Garden Pondicherry', 'Ousteri Wetland'],
    restaurants: ['Le Dupleix', 'Rendezvous Restaurant', 'Satsanga', 'Cafe des Arts', 'Surguru Restaurant'],
    cafes: ['Baker Street', 'Cafe des Arts', 'Le Cafe', 'Kasha Ki Aasha', 'Cafe Xtasy'],
    activities: ['French Heritage Walk in White Town', 'Auroville Matrimandir Visit', 'Sunrise at Promenade Beach', 'Pottery Workshop at Golden Bridge Pottery', 'Scuba Diving at Temple Reef'],
    shopping: ['Sunday Market', 'Nehru Street', 'Mahatma Gandhi Road', 'Mission Street'],
    markets: ['Sunday Market', 'Goubert Market', 'Anna Market'],
    dayTrips: ['Auroville', 'Chidambaram Temple', 'Mahabalipuram', 'Tranquebar (Tharangambadi)'],
    localDish: 'French pastries and South Indian filter coffee',
    currency: 'INR',
    isIndian: true,
    region: 'Puducherry',
    baseCostINR: 600,
  },
  darjeeling: {
    landmarks: ['Tiger Hill Sunrise', 'Darjeeling Himalayan Railway (Toy Train)', 'Batasia Loop', 'Peace Pagoda', 'Observatory Hill'],
    museums: ['Himalayan Mountaineering Institute', 'Darjeeling Zoo (Padmaja Naidu)', 'Tibetan Refugee Self-Help Centre'],
    parks: ['Rock Garden Darjeeling', 'Senchal Wildlife Sanctuary', 'Singhamari Garden'],
    restaurants: ['Glenary\u2019s', 'Keventers', 'Frank Ross', 'Hasty Tasty', 'Park Restaurant'],
    cafes: ['Glenary\u2019s Bakery', 'Keventers Cafe', 'Sonam\u2019s Kitchen', 'Cafe Coffee Day Darjeeling', 'Tipsy Tiger'],
    activities: ['Toy Train Ride to Ghum', 'Sunrise at Tiger Hill', 'Tea Garden Tour at Happy Valley', 'Trekking to Sandakphu', 'Rock Garden Picnic'],
    shopping: ['Chowrasta Market', 'Nehru Road Market', 'Mahakal Market'],
    markets: ['Chowrasta Market', 'Nehru Road Market', 'Mahakal Market', 'Lal Bazaar'],
    dayTrips: ['Mirik Lake', 'Kalimpong', 'Kurseong', 'Sandakphu Trek'],
    localDish: 'momos and Darjeeling tea',
    currency: 'INR',
    isIndian: true,
    region: 'West Bengal',
    baseCostINR: 650,
  },
  andaman: {
    landmarks: ['Cellular Jail', 'Radhanagar Beach', 'Ross Island', 'Chidiya Tapu', 'Neil Island'],
    museums: ['Cellular Jail Museum', 'Anthropological Museum', 'Samudrika Naval Marine Museum'],
    parks: ['Mahatma Gandhi Marine National Park', 'Mount Harriet National Park', 'Saddle Peak National Park'],
    restaurants: ['Annapurna', 'Full Moon Cafe', 'Sea Dragon Restaurant', 'New Lighthouse Restaurant', 'B3 - Bayview Bliss'],
    cafes: ['Cafe Del Mar', 'Anju Cafe', 'Blue Sea Restaurant & Cafe', 'Sunsea Cafe'],
    activities: ['Scuba Diving at Havelock', 'Sea Walking at North Bay', 'Glass Bottom Boat Ride', 'Mangrove Kayaking', 'Sunset at Chidiya Tapu'],
    shopping: ['Aberdeen Bazaar', 'Sagarika Emporium', 'Goal Ghar Market'],
    markets: ['Aberdeen Bazaar', 'Sagarika Emporium', 'Goal Ghar Market'],
    dayTrips: ['Havelock Island', 'Baratang Island Limestone Caves', 'Neil Island', 'Diglipur'],
    localDish: 'grilled fish and coconut water',
    currency: 'INR',
    isIndian: true,
    region: 'Andaman & Nicobar',
    baseCostINR: 1200,
  },
  shirdi: {
    landmarks: ['Shirdi Sai Baba Temple', 'Dwarkamai Mosque', 'Chavadi', 'Gurusthan', 'Lendi Baug'],
    museums: ['Sai Heritage Village', 'Sai Baba Museum at Dixit Wada'],
    parks: ['Lendi Baug Garden', 'Shirdi Temple Complex Gardens'],
    restaurants: ['Sai Prasadalaya', 'Hotel Sai Mahal', 'Rajbhog Thali Restaurant', 'Sai Ashish', 'Bhagyalaxmi Restaurant'],
    cafes: ['Cafe Coffee Day Shirdi', 'Sai Cafe', 'Temple Town Cafe'],
    activities: ['Morning Kakad Aarti at Sai Baba Temple', 'Dwarkamai Visit', 'Lendi Baug Walk', 'Shani Shingnapur Day Trip', 'Temple Prasad Distribution'],
    shopping: ['Shirdi Temple Market', 'Sai Baba Souvenir Shops', 'Pimpalwadi Road Market'],
    markets: ['Shirdi Temple Market', 'Pimpalwadi Road Market', 'Sai Heritage Village Market'],
    dayTrips: ['Shani Shingnapur', 'Nashik Trimbakeshwar', 'Ajanta & Ellora Caves (via Aurangabad)', 'Ellora Caves'],
    localDish: 'prasad and puran poli',
    currency: 'INR',
    isIndian: true,
    region: 'Maharashtra',
    baseCostINR: 500,
  },
  tirupati: {
    landmarks: ['Tirumala Venkateswara Temple', 'Sri Padmavathi Ammavari Temple', 'Sri Govindarajaswamy Temple', 'Chandragiri Fort', 'Silathoranam'],
    museums: ['Tirupati Museum', 'Sri Venkateswara Museum', 'Chandragiri Fort Museum'],
    parks: ['Tirumala Deer Park', 'Sri Venkateswara Zoological Park', 'Kapila Theertham Waterfall'],
    restaurants: ['Sri Balaji Bhavan', 'Andhra Spice', 'Woodside Restaurant', 'Tirumala Tirupati Devasthanam Food Complex', 'Hotel Mayura'],
    cafes: ['Cafe Coffee Day Tirupati', 'Annapurna Food Plaza', 'Balaji Coffee Bar'],
    activities: ['Tirumala Temple Darshan', 'Walking Trek to Tirumala (Srivari Mettu)', 'Chandragiri Fort Visit', 'Kapila Theertham Bath', 'Silathoranam Geological Site'],
    shopping: ['Tirumala Tirupati Devasthanam Shops', 'Chandragiri Market', 'Tirupati Main Market'],
    markets: ['Tirupati Main Market', 'Chandragiri Market', 'Tirumala Complex Market'],
    dayTrips: ['Srikalahasti Temple', 'Horsley Hills', 'Talakona Waterfall', 'Kanipakam Vinayaka Temple'],
    localDish: 'tirupati laddu and South Indian meals',
    currency: 'INR',
    isIndian: true,
    region: 'Andhra Pradesh',
    baseCostINR: 450,
  },
  // ─── Foreign Destinations ───────────────────────────────────────
  dubai: {
    landmarks: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Frame', 'Jumeirah Mosque', 'Dubai Marina'],
    museums: ['Museum of the Future', 'Dubai Museum at Al Fahidi Fort', 'Etihad Museum', 'Coffee Museum'],
    parks: ['Dubai Miracle Garden', 'Zabeel Park', 'Dubai Creek Park', 'Safa Park'],
    restaurants: ['Al Mahara', 'Pierchic', 'Ravi Restaurant', 'Al Ustad Special Kebab', 'Armani Ristorante'],
    cafes: ['The Espresso Lab', '%Arabica Dubai', 'Tom & Serg', 'Three by Three', 'Seven Fortunes Coffee'],
    activities: ['Desert Safari with BBQ Dinner', 'Dhow Cruise on Dubai Creek', 'Gold Souk Shopping', 'Indoor Skiing at Ski Dubai', 'Helicopter Tour'],
    shopping: ['Dubai Mall', 'Mall of the Emirates', 'Gold Souk', 'Spice Souk', 'City Walk'],
    markets: ['Gold Souk', 'Spice Souk', 'Ripe Market', 'Textile Souk'],
    dayTrips: ['Abu Dhabi & Sheikh Zayed Mosque', 'Hatta Mountain Safari', 'Fujairah Beach Day', 'Al Ain Oasis'],
    localDish: 'shawarma and karak chai',
    currency: 'AED',
    isIndian: false,
    region: 'UAE',
    baseCostINR: 3000,
  },
  bangkok: {
    landmarks: ['Grand Palace', 'Wat Arun', 'Wat Pho', 'Golden Mount', 'Giant Swing'],
    museums: ['National Museum Bangkok', 'Bangkok Art and Culture Centre', 'Museum of Siam', 'Jim Thompson House'],
    parks: ['Lumphini Park', 'Chatuchak Park', 'Benjasiri Park', 'Santichaiprakan Park'],
    restaurants: ['Jay Fai', 'Err', 'Sra Bua by Kiin Kiin', 'Paste Bangkok', 'Supanniga Eating Room'],
    cafes: ['Roots Coffee Roaster', 'Casa Lapin', 'Roast', 'Phil Coffee Company', 'Litterature'],
    activities: ['Floating Market Tour', 'Thai Cooking Class', 'Muay Thai Match', 'Long-tail Boat Canal Tour', 'Rooftop Bar Hopping'],
    shopping: ['Chatuchak Weekend Market', 'Siam Paragon', 'MBK Center', 'Asiatique Night Market'],
    markets: ['Chatuchak Market', 'Damnoen Saduak Floating Market', 'Khao San Road stalls', 'Pratunam Market'],
    dayTrips: ['Ayutthaya Ancient City', 'Damnoen Saduak Floating Market', 'Erawan Waterfalls', 'Hua Hin Beach'],
    localDish: 'pad thai and mango sticky rice',
    currency: 'THB',
    isIndian: false,
    region: 'Thailand',
    baseCostINR: 1500,
  },
  singapore: {
    landmarks: ['Marina Bay Sands', 'Gardens by the Bay', 'Merlion Park', 'Sentosa Island', 'Singapore Flyer'],
    museums: ['National Gallery Singapore', 'ArtScience Museum', 'Asian Civilisations Museum', 'Peranakan Museum'],
    parks: ['Singapore Botanic Gardens', 'East Coast Park', 'Fort Canning Park', 'HortPark'],
    restaurants: ['Burnt Ends', 'Odette', 'Hawker Chan', 'Jumbo Seafood', 'Tiong Bahru Market Food Centre'],
    cafes: ['Chye Seng Huat Hardware', 'Toby\u2019s Estate', 'Nylon Coffee Roasters', 'Common Man Coffee Roasters', 'Strangers Reunion'],
    activities: ['Night Safari', 'Universal Studios Singapore', 'River Cruise on Singapore River', 'Hawker Centre Food Tour', 'Sentosa Beach Day'],
    shopping: ['Orchard Road', 'VivoCity', 'Bugis Street Market', 'Mustafa Centre', 'Chinatown Street Market'],
    markets: ['Chinatown Market', 'Bugis Street Market', 'Little India Arcade', 'Tiong Bahru Market'],
    dayTrips: ['Sentosa Island', 'Jurong Bird Park', 'Pulau Ubin Island', 'Legoland Malaysia (Johor)'],
    localDish: 'Hainanese chicken rice and kopi',
    currency: 'SGD',
    isIndian: false,
    region: 'Singapore',
    baseCostINR: 2500,
  },
  paris: {
    landmarks: ['Eiffel Tower', 'Arc de Triomphe', 'Notre-Dame Cathedral', 'Sacr\u00e9-C\u0153ur Basilica', 'Pont Alexandre III'],
    museums: ['Louvre Museum', 'Mus\u00e9e d\u2019Orsay', 'Centre Pompidou', 'Mus\u00e9e de l\u2019Orangerie', 'Mus\u00e9e Rodin'],
    parks: ['Luxembourg Gardens', 'Tuileries Garden', 'Bois de Boulogne', 'Parc des Buttes-Chaumont'],
    restaurants: ['Le Comptoir du Panth\u00e9on', 'Chez Janou', 'Bistrot Paul Bert', 'Le Bouillon Chartier', 'Septime'],
    cafes: ['Caf\u00e9 de Flore', 'Les Deux Magots', 'Caf\u00e9 de la Paix', 'La Maison Rose', 'Coutume Caf\u00e9'],
    activities: ['Seine River Cruise', 'Montmartre Walking Tour', 'Versailles Day Trip', 'Cooking Class in Le Marais', 'Cabaret at Moulin Rouge'],
    shopping: ['Galeries Lafayette', 'Le Bon March\u00e9', 'Champs-\u00c9lys\u00e9es', 'Saint-Germain-des-Pr\u00e9s boutiques'],
    markets: ['March\u00e9 d\u2019Aligre', 'March\u00e9 Bastille', 'March\u00e9 des Enfants Rouges', 'Saint-Ouen Flea Market'],
    dayTrips: ['Palace of Versailles', 'Giverny Monet Garden', 'Ch\u00e2teau de Fontainebleau', 'Reims Champagne Region'],
    localDish: 'croissant and caf\u00e9 au lait',
    currency: 'EUR',
    isIndian: false,
    region: 'France',
    baseCostINR: 4000,
  },
  tokyo: {
    landmarks: ['Tokyo Tower', 'Sens\u014d-ji Temple', 'Shibuya Crossing', 'Meiji Shrine', 'Imperial Palace'],
    museums: ['Tokyo National Museum', 'Mori Art Museum', 'teamLab Borderless', 'Ghibli Museum', 'Edo-Tokyo Museum'],
    parks: ['Shinjuku Gyoen', 'Ueno Park', 'Yoyogi Park', 'Hama-rikyu Gardens'],
    restaurants: ['Ichiran Ramen', 'Sushi Dai', 'Gonpachi Nishi-Azabu', 'Tonkatsu Maisen', 'Afuri Ramen'],
    cafes: ['Blue Bottle Coffee Aoyama', '%Arabica Kyoto', 'Bear Pond Espresso', 'Onibus Coffee', 'Fuglen Tokyo'],
    activities: ['Sumo Wrestling Tournament', 'Tsukiji Food Tour', 'Tea Ceremony in Asakusa', 'Robot Restaurant Show', 'Mount Fuji Day Trip'],
    shopping: ['Ginza Six', 'Shibuya 109', 'Don Quijote', 'Akihabara Electric Town', 'Harajuku Takeshita Street'],
    markets: ['Tsukiji Outer Market', 'Ameya-Yokoch\u014d', 'Sunamachi Ginza', 'Omoide Yokocho'],
    dayTrips: ['Mount Fuji & Hakone', 'Nikko Toshogu Shrine', 'Kamakura Great Buddha', 'Yokohama Chinatown'],
    localDish: 'ramen and matcha',
    currency: 'JPY',
    isIndian: false,
    region: 'Japan',
    baseCostINR: 3500,
  },
  london: {
    landmarks: ['Big Ben', 'Tower Bridge', 'Buckingham Palace', 'London Eye', 'Westminster Abbey'],
    museums: ['British Museum', 'Tate Modern', 'National Gallery', 'Natural History Museum', 'Victoria & Albert Museum'],
    parks: ['Hyde Park', 'Regent\u2019s Park', 'Hampstead Heath', 'Greenwich Park'],
    restaurants: ['Dishoom', 'Sketch', 'The Wolseley', 'Brat', 'St. John'],
    cafes: ['Monmouth Coffee', 'Department of Coffee & Social Affairs', 'Origin Coffee Roasters', 'Workshop Coffee', 'Kaffeine'],
    activities: ['Thames River Cruise', 'West End Theatre Show', 'Harry Potter Studio Tour', 'Afternoon Tea at The Ritz', 'Tower of London Tour'],
    shopping: ['Oxford Street', 'Harrods', 'Camden Market', 'Covent Garden', 'Portobello Road Market'],
    markets: ['Borough Market', 'Camden Market', 'Portobello Road Market', 'Brick Lane Market', 'Maltby Street Market'],
    dayTrips: ['Windsor Castle', 'Stonehenge & Bath', 'Oxford Day Trip', 'Brighton Beach'],
    localDish: 'fish and chips and tea',
    currency: 'GBP',
    isIndian: false,
    region: 'UK',
    baseCostINR: 4500,
  },
  bali: {
    landmarks: ['Tanah Lot Temple', 'Uluwatu Temple', 'Besakih Temple', 'Tirta Empul Water Temple', 'Goa Gajah Cave'],
    museums: ['Agung Rai Museum of Art', 'Museum Pasifika', 'Blanco Renaissance Museum', 'Setia Darma Masks & Puppets House'],
    parks: ['Bali Botanical Garden', 'Sacred Monkey Forest Sanctuary', 'Bali Bird Park', 'Tegallalang Rice Terraces'],
    restaurants: ['Locavore', 'Mozaic', 'Hujan Locale', 'Warung Babi Guling Ibu Oka', 'Bambu'],
    cafes: ['Anomali Coffee', 'Revolver Espresso', 'Sisterfields', 'Crate Cafe', 'Pison Coffee'],
    activities: ['Surfing in Uluwatu', 'Rice Terrace Hike', 'Balinese Cooking Class', 'Sunrise at Mount Batur', 'Spa & Yoga Retreat'],
    shopping: ['Ubud Art Market', 'Seminyak Village', 'Kuta Beachwalk', 'Sukawati Art Market'],
    markets: ['Ubud Traditional Market', 'Kreneng Market', 'Badung Market', 'Sukawati Art Market'],
    dayTrips: ['Nusa Penida Island', 'Gili Islands', 'Mount Batur Sunrise', 'Uluwatu Cliffside Temples'],
    localDish: 'nasi goreng and kopi',
    currency: 'IDR',
    isIndian: false,
    region: 'Indonesia',
    baseCostINR: 1800,
  },
  istanbul: {
    landmarks: ['Hagia Sophia', 'Blue Mosque', 'Topkapi Palace', 'Galata Tower', 'Basilica Cistern'],
    museums: ['Istanbul Archaeological Museum', 'Pera Museum', 'Istanbul Modern', 'Museum of Turkish and Islamic Arts'],
    parks: ['G\u00fclhane Park', 'Emirgan Park', 'Y\u0131ld\u0131z Park', 'Ma\u011fluka Park'],
    restaurants: ['\u00c7\u0131ra\u011fan Palace', 'Mikla', 'Karak\u00f6y Lokantas\u0131', 'Asitane', 'Ciya Sofras\u0131'],
    cafes: ['Karak\u00f6y G\u00fcll\u00fco\u011flu', 'Mandabornmaz', 'Kronotrop Coffee', 'Walter\u2019s Coffee', 'SALT Galata Cafe'],
    activities: ['Bosphorus Cruise', 'Turkish Bath (Hammam)', 'Grand Bazaar Tour', 'Whirling Dervish Show', 'Suleymaniye Mosque Visit'],
    shopping: ['Grand Bazaar', 'Spice Bazaar', 'Istiklal Street', 'Ni\u015fanta\u015f\u0131 boutiques'],
    markets: ['Grand Bazaar', 'Spice Bazaar', 'Kad\u0131k\u00f6y Market', 'Ferik\u00f6y Organic Market'],
    dayTrips: ['Princes\u2019 Islands', 'Bursa & Uluda\u011f Mountain', 'Gallipoli Peninsula', 'Cappadocia'],
    localDish: 'kebab and Turkish coffee',
    currency: 'TRY',
    isIndian: false,
    region: 'Turkey',
    baseCostINR: 2200,
  },
  maldives: {
    landmarks: ['Mal\u00e9 Friday Mosque', 'Maldives National Museum', 'Artificial Beach Mal\u00e9', 'Tsinghua Mosque', 'Republic Square'],
    museums: ['Maldives National Museum', 'Maldives Monetary Authority Museum'],
    parks: ['Rasrani Bugeyru Park', 'Sultan Park'],
    restaurants: ['The Lagoon Restaurant', 'Sea House Cafe', 'Thai Wok Restaurant', 'Sala Thai Restaurant', 'Symphony Restaurant'],
    cafes: ['Sea House Cafe', 'Bistro Jade', 'Cafe Ailafushi', 'Cafe del Mar Maldives'],
    activities: ['Snorkeling at Banana Reef', 'Scuba Diving at Maaya Thila', 'Dolphin Watching Cruise', 'Island Hopping', 'Sunset Fishing Trip'],
    shopping: ['Mal\u00e9 Local Market', 'Chaandhanee Magu', 'Majeedhee Magu'],
    markets: ['Mal\u00e9 Local Market', 'Majeedhee Magu', 'Chaandhanee Magu'],
    dayTrips: ['Hulhumale Island', 'Villingili Island', 'Resort Island Day Trip', 'Sandbank Picnic'],
    localDish: 'mas huni and black tea',
    currency: 'MVR',
    isIndian: false,
    region: 'Maldives',
    baseCostINR: 5000,
  },
  nepal: {
    landmarks: ['Pashupatinath Temple', 'Boudhanath Stupa', 'Swayambhunath (Monkey Temple)', 'Kathmandu Durbar Square', 'Patan Durbar Square'],
    museums: ['National Museum of Nepal', 'Patan Museum', 'Narayanhiti Palace Museum', 'Taragaon Museum'],
    parks: ['Shivapuri Nagarjun National Park', 'Garden of Dreams', 'Chitwan National Park'],
    restaurants: ['OR2K', 'Bhojan Griha', 'Krishnarpan Restaurant', 'New Orleans Cafe', 'Kruizine'],
    cafes: ['Himalayan Java Coffee', 'Kathmandu Coffee', 'Karma Coffee', 'Cafe Che Bahala', 'Yolmo Coffee'],
    activities: ['Everest Mountain Flight', 'Pashupatinath Aarti', 'Thamel Walking Tour', 'Nagarkot Sunrise Hike', 'Pottery Class in Bhaktapur'],
    shopping: ['Thamel Market', 'Asan Bazaar', 'New Road Market', 'Patan Handicraft Market'],
    markets: ['Asan Bazaar', 'Thamel Market', 'New Road Market', 'Kalimati Market'],
    dayTrips: ['Nagarkot', 'Bhaktapur', 'Patan', 'Chandragiri Hill'],
    localDish: 'momo and dal bhat',
    currency: 'NPR',
    isIndian: false,
    region: 'Nepal',
    baseCostINR: 800,
  },
  bhutan: {
    landmarks: ['Paro Taktsang (Tiger\u2019s Nest)', 'Punakha Dzong', 'Tashichho Dzong', 'Buddha Dordenma Statue', 'Kyichu Lhakhang'],
    museums: ['National Museum of Bhutan', 'Folk Heritage Museum', 'Textile Museum'],
    parks: ['Jigme Dorji National Park', 'Royal Manas National Park', 'Motithang Takin Preserve'],
    restaurants: ['Bukhari Restaurant', 'Zhiwa Ling Restaurant', 'Changangkha Cafeteria', 'Benez Restaurant', 'Sambhima Cafe'],
    cafes: ['Ambient Cafe', 'Karma\u2019s Coffee', 'Cafe Tashi Tagye', 'Chen Xing Lounge'],
    activities: ['Tiger\u2019s Nest Hike', 'Hot Stone Bath', 'Archery Session', 'Monastery Tour', 'River Rafting on Mo Chhu'],
    shopping: ['Weekend Market Thimphu', 'Norzin Lam Craft Market', 'Yarkay Central'],
    markets: ['Weekend Market', 'Norzin Lam Market', 'Craft Bazaar'],
    dayTrips: ['Punakha Valley', 'Haa Valley', 'Phobjikha Valley', 'Paro Valley'],
    localDish: 'ema datshi and suja',
    currency: 'BTN',
    isIndian: false,
    region: 'Bhutan',
    baseCostINR: 900,
  },
  sriLanka: {
    landmarks: ['Sigiriya Rock Fortress', 'Temple of the Tooth (Kandy)', 'Galle Fort', 'Dambulla Cave Temple', 'Nine Arches Bridge Ella'],
    museums: ['National Museum of Colombo', 'National Museum of Kandy', 'Galle National Museum', 'Dutch Museum'],
    parks: ['Yala National Park', 'Udawalawe National Park', 'Sinharaja Forest Reserve', 'Horton Plains National Park'],
    restaurants: ['Ministry of Crab', 'The Commons', 'Nuga Gama', 'Upali\u2019s by Nawaloka', 'Curry Pot'],
    cafes: ['Barefoot Garden Cafe', 'Cafe Kumbuk', 'Hela Bojun', 'Commons Coffee Bar', 'Cafe Chill Ella'],
    activities: ['Safari at Yala National Park', 'Train Ride from Kandy to Ella', 'Surfing at Arugam Bay', 'Tea Plantation Tour in Nuwara Eliya', 'Whale Watching at Mirissa'],
    shopping: ['Pettah Market', 'Galle Fort Shopping', 'Odel Mall', 'Barefoot Gallery Shop'],
    markets: ['Pettah Market', 'Galle Fort Market', 'Kandy Market', 'Nuwara Eliya Market'],
    dayTrips: ['Sigiriya & Dambulla', 'Nuwara Eliya Hill Country', 'Mirissa Beach', 'Anuradhapura Ancient City'],
    localDish: 'rice and curry and Ceylon tea',
    currency: 'LKR',
    isIndian: false,
    region: 'Sri Lanka',
    baseCostINR: 900,
  },
  sydney: {
    landmarks: ['Sydney Opera House', 'Sydney Harbour Bridge', 'Bondi Beach', 'Darling Harbour', 'Mrs Macquarie\u2019s Chair'],
    museums: ['Art Gallery of NSW', 'Museum of Contemporary Art', 'Australian Museum', 'Powerhouse Museum'],
    parks: ['Royal Botanic Garden', 'Hyde Park', 'Centennial Park', 'Sydney Park'],
    restaurants: ['Quay', 'Tetsuya\u2019s', 'Bennelong', 'The Grounds of the City', 'Mr. Wong'],
    cafes: ['Single O', 'Reuben Hills', 'The Grounds of Alexandria', 'Brewtown Newtown', 'Coffee Alchemy'],
    activities: ['Bridge Climb', 'Harbour Cruise', 'Surfing at Bondi', 'Blue Mountains Day Trip', 'Coastal Walk from Bondi to Coogee'],
    shopping: ['Queen Victoria Building', 'Pitt Street Mall', 'The Rocks Markets', 'Paddington Markets'],
    markets: ['The Rocks Markets', 'Paddy\u2019s Markets', 'Carriageworks Farmers Market', 'Glebe Markets'],
    dayTrips: ['Blue Mountains', 'Hunter Valley Wineries', 'Manly Beach Ferry', 'Jenolan Caves'],
    localDish: 'flat white and meat pie',
    currency: 'AUD',
    isIndian: false,
    region: 'Australia',
    baseCostINR: 4000,
  },
  switzerland: {
    landmarks: ['Jungfraujoch (Top of Europe)', 'Lake Lucerne', 'Chateau de Chillon', 'Matterhorn', 'Rhine Falls'],
    museums: ['Swiss National Museum', 'Olympic Museum Lausanne', 'Kunsthaus Zurich', 'Museum of Fine Arts Bern'],
    parks: ['Swiss National Park', 'Botanical Garden Zurich', 'Parc des Bastions Geneva', 'Engadin Valley'],
    restaurants: ['Kronenhalle Zurich', 'Hiltl', 'Zeughauskeller', 'Fondue House', 'Restaurant de l\u2019Hotel de Ville'],
    cafes: ['Cafe Sprungli', 'Henrietta Zurich', 'Cafe Odeon', 'Grand Cafe Motta', 'Mame Coffee'],
    activities: ['Jungfrau Railway Trip', 'Lake Lucerne Cruise', 'Skiing at Zermatt', 'Glacier Express Train', 'Paragliding in Interlaken'],
    shopping: ['Bahnhofstrasse Zurich', 'Lucerne Old Town', 'Geneva Rue du Rhone', 'Vevey Market'],
    markets: ['Zurich Christmas Market', 'Lucerne Market', 'Niederdorf Market', 'Burkliplatz Market'],
    dayTrips: ['Jungfraujoch', 'Mount Titlis', 'Interlaken', 'Grindelwald'],
    localDish: 'fondue and Swiss chocolate',
    currency: 'CHF',
    isIndian: false,
    region: 'Switzerland',
    baseCostINR: 5500,
  },
};

const defaultDestination: DestinationData = {
  landmarks: ['City Center Square', 'Old Town Quarter', 'Historic Cathedral', 'Riverside Promenade', 'City Viewpoint'],
  museums: ['City History Museum', 'Modern Art Gallery', 'Cultural Heritage Center', 'Science Museum'],
  parks: ['Central City Park', 'Botanical Gardens', 'Riverside Walk', 'Hillside Nature Trail'],
  restaurants: ['Local Bistro', 'Traditional Kitchen', 'Garden Restaurant', 'Rooftop Dining', 'Street Food Alley'],
  cafes: ['Artisan Coffee House', 'Corner Cafe', 'Specialty Roasters', 'Garden Cafe'],
  activities: ['Guided City Tour', 'Food Walking Tour', 'Sunset Cruise', 'Local Workshop Class', 'Cultural Performance'],
  shopping: ['Main Shopping Street', 'Boutique District', 'Craft Market', 'Souvenir Bazaar'],
  markets: ['Central Market', 'Weekend Craft Market', 'Farmers Market', 'Night Market'],
  dayTrips: ['Nearby Mountain Village', 'Coastal Town Excursion', 'Wine Country Tour', 'Historical Ruins Trip'],
  localDish: 'local specialties and coffee',
  currency: 'INR',
  isIndian: true,
  region: 'India',
  baseCostINR: 600,
};

function getDestinationData(destination: string): DestinationData {
  const key = destination
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/\s+/g, '');
  return destinationDatabase[key] || defaultDestination;
}

// ─── Cost calculation ───────────────────────────────────────────────

function styleMultiplier(style: TravelStyle): number {
  switch (style) {
    case 'budget': return 0.6;
    case 'luxury': return 1.6;
    default: return 1.0;
  }
}

function convertFromINR(amountINR: number, currencyCode: string): { local: number; currency: string; symbol: string } {
  const cur = currencies[currencyCode] || currencies.INR;
  return {
    local: Math.round(amountINR * cur.rateFromINR),
    currency: cur.code,
    symbol: cur.symbol,
  };
}

function formatINR(amount: number): string {
  return '\u20b9' + amount.toLocaleString('en-IN');
}

function formatLocal(amount: number, symbol: string): string {
  return `${symbol}${amount.toLocaleString()}`;
}

// ─── Item generation ────────────────────────────────────────────────

function pickRandom<T>(arr: T[], used: Set<number>): T | null {
  const available = arr.map((_, i) => i).filter((i) => !used.has(i));
  if (available.length === 0) return null;
  const idx = available[Math.floor(Math.random() * available.length)];
  used.add(idx);
  return arr[idx];
}

function generateItem(
  type: ItineraryItem['type'],
  name: string,
  description: string,
  baseCostINR: number,
  style: TravelStyle,
  location: string,
  currencyCode: string
): ItineraryItem {
  const costINR = Math.round((baseCostINR * styleMultiplier(style)) / 10) * 10;
  const converted = convertFromINR(costINR, currencyCode);
  const durations: Record<string, string> = {
    place: '1-2 hours',
    restaurant: '1-1.5 hours',
    cafe: '30-45 min',
    activity: '2-3 hours',
    hotel: 'overnight',
    travel: '30-60 min',
  };
  const times: Record<string, string> = {
    place: '10:00',
    restaurant: '13:00',
    cafe: '15:30',
    activity: '09:00',
    hotel: '18:00',
    travel: '08:30',
  };
  return {
    time: times[type] || '12:00',
    name,
    type,
    description,
    cost: costINR,
    cost_inr: costINR,
    local_currency: converted.currency,
    local_cost: converted.local,
    duration: durations[type] || '1 hour',
    location,
  };
}

function generateDay(
  dayNum: number,
  data: DestinationData,
  input: TripInput,
  usedItems: {
    landmarks: Set<number>;
    museums: Set<number>;
    parks: Set<number>;
    restaurants: Set<number>;
    cafes: Set<number>;
    activities: Set<number>;
    shopping: Set<number>;
    markets: Set<number>;
    dayTrips: Set<number>;
  }
): ItineraryDay {
  const prefs = input.preferences;
  const style = input.travelStyle;
  const items: ItineraryItem[] = [];
  const dest = input.destination;
  const baseCost = data.baseCostINR;
  const currency = data.currency;

  // Cost helpers
  const costFor = (multiplier: number) => Math.round((baseCost * multiplier));

  // Day themes
  const themes = [
    'Arrival & City Highlights',
    'Culture & Heritage',
    'Nature & Scenery',
    'Food & Local Flavors',
    'Adventure & Exploration',
    'Art & Museums',
    'Relaxation & Wellness',
    'Shopping & Markets',
    'Day Trip Excursion',
    'Hidden Gems',
    'Sunset & Farewell',
    'Beach & Coastline',
    'Spiritual & Temples',
  ];
  const theme = themes[(dayNum - 1) % themes.length];

  // Morning: landmark or activity
  if (prefs.includes('adventure') && Math.random() > 0.4) {
    const act = pickRandom(data.activities, usedItems.activities);
    if (act) {
      items.push(generateItem('activity', act, `Start your day with an exciting adventure: ${act.toLowerCase()} in ${dest}.`, costFor(1.5), style, dest, currency));
    }
  } else if (prefs.includes('spiritual') && data.isIndian && Math.random() > 0.4) {
    const landmark = pickRandom(data.landmarks, usedItems.landmarks);
    if (landmark) {
      items.push(generateItem('place', landmark, `Begin with a peaceful visit to ${landmark}, a sacred site in ${dest}.`, costFor(0.3), style, dest, currency));
    }
  } else if (prefs.includes('culture') && Math.random() > 0.5) {
    const museum = pickRandom(data.museums, usedItems.museums);
    if (museum) {
      items.push(generateItem('place', museum, `Explore the fascinating ${museum}, home to world-class collections and cultural treasures.`, costFor(0.8), style, dest, currency));
    }
  } else {
    const landmark = pickRandom(data.landmarks, usedItems.landmarks);
    if (landmark) {
      items.push(generateItem('place', landmark, `Visit the iconic ${landmark}, one of ${dest}'s most recognizable landmarks.`, costFor(0.5), style, dest, currency));
    }
  }

  // Mid-morning: park or market
  if (prefs.includes('nature') && Math.random() > 0.4) {
    const park = pickRandom(data.parks, usedItems.parks);
    if (park) {
      items.push(generateItem('place', park, `Stroll through ${park}, a beautiful green space perfect for a morning walk.`, 0, style, dest, currency));
    }
  } else if (prefs.includes('shopping') && Math.random() > 0.5) {
    const market = pickRandom(data.markets, usedItems.markets);
    if (market) {
      items.push(generateItem('place', market, `Wander through ${market}, a vibrant local market with fresh produce, crafts, and unique finds.`, costFor(0.3), style, dest, currency));
    }
  }

  // Lunch: restaurant
  const restaurant = pickRandom(data.restaurants, usedItems.restaurants);
  if (restaurant) {
    items.push(generateItem('restaurant', restaurant, `Enjoy lunch at ${restaurant}, known for authentic local cuisine and a great atmosphere.`, costFor(1.2), style, dest, currency));
  }

  // Afternoon: activity or museum
  if (dayNum > 2 && Math.random() > 0.7) {
    const dayTrip = pickRandom(data.dayTrips, usedItems.dayTrips);
    if (dayTrip) {
      items.push(generateItem('activity', dayTrip, `Take a memorable day trip to ${dayTrip}, a must-see destination near ${dest}.`, costFor(2.0), style, dest, currency));
    }
  } else if (prefs.includes('culture') || prefs.includes('family')) {
    const museum = pickRandom(data.museums, usedItems.museums);
    if (museum) {
      items.push(generateItem('place', museum, `Discover ${museum}, offering rich insights into the region\u2019s heritage and art.`, costFor(0.7), style, dest, currency));
    }
  } else {
    const act = pickRandom(data.activities, usedItems.activities);
    if (act) {
      items.push(generateItem('activity', act, `Experience ${act}, a fantastic way to spend your afternoon in ${dest}.`, costFor(1.3), style, dest, currency));
    }
  }

  // Afternoon coffee
  const cafe = pickRandom(data.cafes, usedItems.cafes);
  if (cafe) {
    items.push(generateItem('cafe', cafe, `Take a break at ${cafe}, a beloved local spot for ${data.localDish}.`, costFor(0.4), style, dest, currency));
  }

  // Evening: shopping or relaxation
  if (prefs.includes('shopping') && Math.random() > 0.4) {
    const shop = pickRandom(data.shopping, usedItems.shopping);
    if (shop) {
      items.push(generateItem('place', shop, `Browse ${shop}, offering everything from luxury brands to unique local products.`, costFor(1.0), style, dest, currency));
    }
  } else if (prefs.includes('relaxation')) {
    items.push(generateItem('activity', 'Spa & Wellness Session', `Unwind with a relaxing spa treatment, the perfect way to recharge.`, costFor(1.8), style, dest, currency));
  }

  // Dinner
  const dinnerRestaurant = pickRandom(data.restaurants, usedItems.restaurants);
  if (dinnerRestaurant) {
    items.push(generateItem('restaurant', dinnerRestaurant, `Dine at ${dinnerRestaurant}, a top-rated spot for dinner with local specialties.`, costFor(1.5), style, dest, currency));
  }

  // Sort items by time
  const timeOrder: Record<string, number> = {
    '08:30': 0, '09:00': 1, '10:00': 2, '12:00': 3, '13:00': 4, '15:30': 5, '18:00': 6,
  };
  items.sort((a, b) => (timeOrder[a.time] ?? 99) - (timeOrder[b.time] ?? 99));

  const dailyCost = items.reduce((sum, item) => sum + item.cost_inr, 0);

  return {
    day: dayNum,
    title: `Day ${dayNum}`,
    theme,
    items,
    daily_cost: dailyCost,
  };
}

// ─── Main generator ─────────────────────────────────────────────────

export function generateTrip(input: TripInput): {
  itinerary: Itinerary;
  summary: string;
  estimatedTotalCost: number;
} {
  const data = getDestinationData(input.destination);
  const usedItems = {
    landmarks: new Set<number>(),
    museums: new Set<number>(),
    parks: new Set<number>(),
    restaurants: new Set<number>(),
    cafes: new Set<number>(),
    activities: new Set<number>(),
    shopping: new Set<number>(),
    markets: new Set<number>(),
    dayTrips: new Set<number>(),
  };

  const itinerary: Itinerary = [];
  for (let i = 1; i <= input.days; i++) {
    itinerary.push(generateDay(i, data, input, usedItems));
  }

  const estimatedTotalCost = itinerary.reduce((sum, day) => sum + day.daily_cost, 0);

  const prefText = input.preferences.length > 0
    ? ` focused on ${input.preferences.join(', ')}`
    : '';

  const summary = `A ${input.days}-day ${input.travelStyle} trip to ${input.destination}${prefText}. Estimated total cost: ${formatINR(estimatedTotalCost)}. Includes visits to top landmarks, local restaurants, cultural sites, and curated activities tailored to your preferences.`;

  return { itinerary, summary, estimatedTotalCost };
}

// ─── Currency formatting helpers ────────────────────────────────────

export function formatPriceINR(amount: number): string {
  return '\u20b9' + amount.toLocaleString('en-IN');
}

export function formatPriceLocal(amountINR: number, currencyCode: string): string {
  const cur = currencies[currencyCode] || currencies.INR;
  const local = Math.round(amountINR * cur.rateFromINR);
  return `${cur.symbol}${local.toLocaleString()}`;
}

export function formatDualPrice(amountINR: number, currencyCode: string): string {
  if (currencyCode === 'INR') {
    return formatPriceINR(amountINR);
  }
  return `${formatPriceINR(amountINR)} (${formatPriceLocal(amountINR, currencyCode)})`;
}

// ─── Destination search suggestions ─────────────────────────────────

export const popularDestinations = [
  'Jaipur, Rajasthan',
  'Agra, Uttar Pradesh',
  'Varanasi, Uttar Pradesh',
  'Goa',
  'Kerala',
  'Delhi',
  'Mumbai, Maharashtra',
  'Rishikesh, Uttarakhand',
  'Manali, Himachal Pradesh',
  'Udaipur, Rajasthan',
  'Kolkata, West Bengal',
  'Chennai, Tamil Nadu',
  'Amritsar, Punjab',
  'Leh, Ladakh',
  'Mysore, Karnataka',
  'Hampi, Karnataka',
  'Pondicherry',
  'Darjeeling, West Bengal',
  'Andaman & Nicobar',
  'Shirdi, Maharashtra',
  'Tirupati, Andhra Pradesh',
  'Dubai, UAE',
  'Bangkok, Thailand',
  'Singapore',
  'Paris, France',
  'Tokyo, Japan',
  'London, UK',
  'Bali, Indonesia',
  'Istanbul, Turkey',
  'Maldives',
  'Nepal',
  'Bhutan',
  'Sri Lanka',
  'Sydney, Australia',
  'Switzerland',
];

export const indianDestinations = popularDestinations.filter((d) => {
  const key = d.toLowerCase().replace(/[^a-z]/g, '');
  return destinationDatabase[key]?.isIndian ?? true;
});

export const foreignDestinations = popularDestinations.filter((d) => {
  const key = d.toLowerCase().replace(/[^a-z]/g, '');
  return !(destinationDatabase[key]?.isIndian ?? true);
});

export function getDestinationCurrency(destination: string): string {
  return getDestinationData(destination).currency;
}

export function isIndianDestination(destination: string): boolean {
  return getDestinationData(destination).isIndian;
}
