const placedata = [
    {
        datapic: "https://a0.muscache.com/im/pictures/bacfbf70-8f6b-4d29-b9de-9647fb4013a4.jpg",
        name: "Sunrise PG for Girls",
        location: "Koramangala, Bangalore",
        placetags: ["Wi-Fi", "Meals Included", "24/7 Security"],
        price: "₹8,000/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/ebf02b7b-feff-4485-b651-fa81c26c9f52.jpg?im_w=720",
        name: "Greenview Hostel",
        location: "Sector 62, Noida",
        placetags: ["Shared Rooms", "Gym Access", "Laundry Service"],
        price: "₹6,500/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMDY0ODY%3D/original/de3298f9-0720-4bfe-9669-f0d066f70ac4.jpeg",
        name: "Cozy Nest Boys PG",
        location: "Hinjawadi, Pune",
        placetags: ["Single Room", "AC Available", "Near IT Park"],
        price: "₹10,000/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/b9d7b354-2ddb-4417-bda0-af42dbc0be15.jpg?im_w=720",
        name: "Elite Stays Hostel",
        location: "Gachibowli, Hyderabad",
        placetags: ["Furnished Rooms", "Parking", "Close to University"],
        price: "₹7,500/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/c9ecbd05-65de-44fa-85fe-694af9286144.jpg?im_w=720",
        name: "Comfort Rooms PG",
        location: "Salt Lake City, Kolkata",
        placetags: ["Non-AC", "Homely Meals", "Peaceful Location"],
        price: "₹5,000/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/ca3eec99-2ae5-43b3-bed9-8a00621d74fe.jpg",
        name: "Skyline Hotel",
        location: "MG Road, Bangalore",
        placetags: ["Free Breakfast", "Swimming Pool", "Near Metro"],
        price: "₹2,500/night",
        category: "hotel"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/6e473255-f620-4953-8c7c-c8af5a376ec8.jpeg",
        name: "Budget Stay Room",
        location: "Kothrud, Pune",
        placetags: ["Single Room", "Affordable", "Near Market"],
        price: "₹4,500/month",
        category: "rooms"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
        name: "Dreamland Hostel",
        location: "Connaught Place, Delhi",
        placetags: ["Dormitory", "Free Wi-Fi", "Central Location"],
        price: "₹9,000/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
        name: "Luxury Suite Hotel",
        location: "Marine Drive, Mumbai",
        placetags: ["Sea View", "Spa", "5-Star Service"],
        price: "₹8,000/night",
        category: "hotel"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/97192a24-ce9a-4cdf-ad47-9619c616dae4.jpg",
        name: "City Center PG",
        location: "Banjara Hills, Hyderabad",
        placetags: ["Furnished", "Attached Bathroom", "CCTV"],
        price: "₹7,000/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
        name: "Tranquil Rooms",
        location: "Jubilee Hills, Hyderabad",
        placetags: ["Peaceful", "Furnished", "Balcony View"],
        price: "₹6,000/month",
        category: "rooms"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/84e29839-b649-43d6-8d01-7caaf0f5e879.jpeg",
        name: "Modern Hostel",
        location: "Powai, Mumbai",
        placetags: ["Shared Kitchen", "High-Speed Internet", "Game Room"],
        price: "₹8,500/month",
        category: "pgs"
    },
    {
        datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
        name: "Cosmo Hotel",
        location: "Park Street, Kolkata",
        placetags: ["Free Wi-Fi", "Buffet Breakfast", "Parking"],
        price: "₹3,000/night",
        category: "hotel"
    }
// ,{
    //     datapic: "https://a0.muscache.com/im/pictures/bacfbf70-8f6b-4d29-b9de-9647fb4013a4.jpg",
    //     name: "Sunrise PG for Girls",
    //     location: "Koramangala, Bangalore",
    //     placetags: ["Wi-Fi", "Meals Included", "24/7 Security"],
    //     price: "₹8,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ebf02b7b-feff-4485-b651-fa81c26c9f52.jpg?im_w=720",
    //     name: "Greenview Hostel",
    //     location: "Sector 62, Noida",
    //     placetags: ["Shared Rooms", "Gym Access", "Laundry Service"],
    //     price: "₹6,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMDY0ODY%3D/original/de3298f9-0720-4bfe-9669-f0d066f70ac4.jpeg",
    //     name: "Cozy Nest Boys PG",
    //     location: "Hinjawadi, Pune",
    //     placetags: ["Single Room", "AC Available", "Near IT Park"],
    //     price: "₹10,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/b9d7b354-2ddb-4417-bda0-af42dbc0be15.jpg?im_w=720",
    //     name: "Elite Stays Hostel",
    //     location: "Gachibowli, Hyderabad",
    //     placetags: ["Furnished Rooms", "Parking", "Close to University"],
    //     price: "₹7,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/c9ecbd05-65de-44fa-85fe-694af9286144.jpg?im_w=720",
    //     name: "Comfort Rooms PG",
    //     location: "Salt Lake City, Kolkata",
    //     placetags: ["Non-AC", "Homely Meals", "Peaceful Location"],
    //     price: "₹5,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ca3eec99-2ae5-43b3-bed9-8a00621d74fe.jpg",
    //     name: "Skyline Hotel",
    //     location: "MG Road, Bangalore",
    //     placetags: ["Free Breakfast", "Swimming Pool", "Near Metro"],
    //     price: "₹2,500/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/6e473255-f620-4953-8c7c-c8af5a376ec8.jpeg",
    //     name: "Budget Stay Room",
    //     location: "Kothrud, Pune",
    //     placetags: ["Single Room", "Affordable", "Near Market"],
    //     price: "₹4,500/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Dreamland Hostel",
    //     location: "Connaught Place, Delhi",
    //     placetags: ["Dormitory", "Free Wi-Fi", "Central Location"],
    //     price: "₹9,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Luxury Suite Hotel",
    //     location: "Marine Drive, Mumbai",
    //     placetags: ["Sea View", "Spa", "5-Star Service"],
    //     price: "₹8,000/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/97192a24-ce9a-4cdf-ad47-9619c616dae4.jpg",
    //     name: "City Center PG",
    //     location: "Banjara Hills, Hyderabad",
    //     placetags: ["Furnished", "Attached Bathroom", "CCTV"],
    //     price: "₹7,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Tranquil Rooms",
    //     location: "Jubilee Hills, Hyderabad",
    //     placetags: ["Peaceful", "Furnished", "Balcony View"],
    //     price: "₹6,000/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/84e29839-b649-43d6-8d01-7caaf0f5e879.jpeg",
    //     name: "Modern Hostel",
    //     location: "Powai, Mumbai",
    //     placetags: ["Shared Kitchen", "High-Speed Internet", "Game Room"],
    //     price: "₹8,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Cosmo Hotel",
    //     location: "Park Street, Kolkata",
    //     placetags: ["Free Wi-Fi", "Buffet Breakfast", "Parking"],
    //     price: "₹3,000/night",
    //     category: "hotel"
    // },{
    //     datapic: "https://a0.muscache.com/im/pictures/bacfbf70-8f6b-4d29-b9de-9647fb4013a4.jpg",
    //     name: "Sunrise PG for Girls",
    //     location: "Koramangala, Bangalore",
    //     placetags: ["Wi-Fi", "Meals Included", "24/7 Security"],
    //     price: "₹8,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ebf02b7b-feff-4485-b651-fa81c26c9f52.jpg?im_w=720",
    //     name: "Greenview Hostel",
    //     location: "Sector 62, Noida",
    //     placetags: ["Shared Rooms", "Gym Access", "Laundry Service"],
    //     price: "₹6,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMDY0ODY%3D/original/de3298f9-0720-4bfe-9669-f0d066f70ac4.jpeg",
    //     name: "Cozy Nest Boys PG",
    //     location: "Hinjawadi, Pune",
    //     placetags: ["Single Room", "AC Available", "Near IT Park"],
    //     price: "₹10,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/b9d7b354-2ddb-4417-bda0-af42dbc0be15.jpg?im_w=720",
    //     name: "Elite Stays Hostel",
    //     location: "Gachibowli, Hyderabad",
    //     placetags: ["Furnished Rooms", "Parking", "Close to University"],
    //     price: "₹7,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/c9ecbd05-65de-44fa-85fe-694af9286144.jpg?im_w=720",
    //     name: "Comfort Rooms PG",
    //     location: "Salt Lake City, Kolkata",
    //     placetags: ["Non-AC", "Homely Meals", "Peaceful Location"],
    //     price: "₹5,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ca3eec99-2ae5-43b3-bed9-8a00621d74fe.jpg",
    //     name: "Skyline Hotel",
    //     location: "MG Road, Bangalore",
    //     placetags: ["Free Breakfast", "Swimming Pool", "Near Metro"],
    //     price: "₹2,500/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/6e473255-f620-4953-8c7c-c8af5a376ec8.jpeg",
    //     name: "Budget Stay Room",
    //     location: "Kothrud, Pune",
    //     placetags: ["Single Room", "Affordable", "Near Market"],
    //     price: "₹4,500/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Dreamland Hostel",
    //     location: "Connaught Place, Delhi",
    //     placetags: ["Dormitory", "Free Wi-Fi", "Central Location"],
    //     price: "₹9,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Luxury Suite Hotel",
    //     location: "Marine Drive, Mumbai",
    //     placetags: ["Sea View", "Spa", "5-Star Service"],
    //     price: "₹8,000/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/97192a24-ce9a-4cdf-ad47-9619c616dae4.jpg",
    //     name: "City Center PG",
    //     location: "Banjara Hills, Hyderabad",
    //     placetags: ["Furnished", "Attached Bathroom", "CCTV"],
    //     price: "₹7,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Tranquil Rooms",
    //     location: "Jubilee Hills, Hyderabad",
    //     placetags: ["Peaceful", "Furnished", "Balcony View"],
    //     price: "₹6,000/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/84e29839-b649-43d6-8d01-7caaf0f5e879.jpeg",
    //     name: "Modern Hostel",
    //     location: "Powai, Mumbai",
    //     placetags: ["Shared Kitchen", "High-Speed Internet", "Game Room"],
    //     price: "₹8,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Cosmo Hotel",
    //     location: "Park Street, Kolkata",
    //     placetags: ["Free Wi-Fi", "Buffet Breakfast", "Parking"],
    //     price: "₹3,000/night",
    //     category: "hotel"
    // },{
    //     datapic: "https://a0.muscache.com/im/pictures/bacfbf70-8f6b-4d29-b9de-9647fb4013a4.jpg",
    //     name: "Sunrise PG for Girls",
    //     location: "Koramangala, Bangalore",
    //     placetags: ["Wi-Fi", "Meals Included", "24/7 Security"],
    //     price: "₹8,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ebf02b7b-feff-4485-b651-fa81c26c9f52.jpg?im_w=720",
    //     name: "Greenview Hostel",
    //     location: "Sector 62, Noida",
    //     placetags: ["Shared Rooms", "Gym Access", "Laundry Service"],
    //     price: "₹6,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMDY0ODY%3D/original/de3298f9-0720-4bfe-9669-f0d066f70ac4.jpeg",
    //     name: "Cozy Nest Boys PG",
    //     location: "Hinjawadi, Pune",
    //     placetags: ["Single Room", "AC Available", "Near IT Park"],
    //     price: "₹10,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/b9d7b354-2ddb-4417-bda0-af42dbc0be15.jpg?im_w=720",
    //     name: "Elite Stays Hostel",
    //     location: "Gachibowli, Hyderabad",
    //     placetags: ["Furnished Rooms", "Parking", "Close to University"],
    //     price: "₹7,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/c9ecbd05-65de-44fa-85fe-694af9286144.jpg?im_w=720",
    //     name: "Comfort Rooms PG",
    //     location: "Salt Lake City, Kolkata",
    //     placetags: ["Non-AC", "Homely Meals", "Peaceful Location"],
    //     price: "₹5,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ca3eec99-2ae5-43b3-bed9-8a00621d74fe.jpg",
    //     name: "Skyline Hotel",
    //     location: "MG Road, Bangalore",
    //     placetags: ["Free Breakfast", "Swimming Pool", "Near Metro"],
    //     price: "₹2,500/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/6e473255-f620-4953-8c7c-c8af5a376ec8.jpeg",
    //     name: "Budget Stay Room",
    //     location: "Kothrud, Pune",
    //     placetags: ["Single Room", "Affordable", "Near Market"],
    //     price: "₹4,500/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Dreamland Hostel",
    //     location: "Connaught Place, Delhi",
    //     placetags: ["Dormitory", "Free Wi-Fi", "Central Location"],
    //     price: "₹9,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Luxury Suite Hotel",
    //     location: "Marine Drive, Mumbai",
    //     placetags: ["Sea View", "Spa", "5-Star Service"],
    //     price: "₹8,000/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/97192a24-ce9a-4cdf-ad47-9619c616dae4.jpg",
    //     name: "City Center PG",
    //     location: "Banjara Hills, Hyderabad",
    //     placetags: ["Furnished", "Attached Bathroom", "CCTV"],
    //     price: "₹7,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Tranquil Rooms",
    //     location: "Jubilee Hills, Hyderabad",
    //     placetags: ["Peaceful", "Furnished", "Balcony View"],
    //     price: "₹6,000/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/84e29839-b649-43d6-8d01-7caaf0f5e879.jpeg",
    //     name: "Modern Hostel",
    //     location: "Powai, Mumbai",
    //     placetags: ["Shared Kitchen", "High-Speed Internet", "Game Room"],
    //     price: "₹8,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Cosmo Hotel",
    //     location: "Park Street, Kolkata",
    //     placetags: ["Free Wi-Fi", "Buffet Breakfast", "Parking"],
    //     price: "₹3,000/night",
    //     category: "hotel"
    // },{
    //     datapic: "https://a0.muscache.com/im/pictures/bacfbf70-8f6b-4d29-b9de-9647fb4013a4.jpg",
    //     name: "Sunrise PG for Girls",
    //     location: "Koramangala, Bangalore",
    //     placetags: ["Wi-Fi", "Meals Included", "24/7 Security"],
    //     price: "₹8,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ebf02b7b-feff-4485-b651-fa81c26c9f52.jpg?im_w=720",
    //     name: "Greenview Hostel",
    //     location: "Sector 62, Noida",
    //     placetags: ["Shared Rooms", "Gym Access", "Laundry Service"],
    //     price: "₹6,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMDY0ODY%3D/original/de3298f9-0720-4bfe-9669-f0d066f70ac4.jpeg",
    //     name: "Cozy Nest Boys PG",
    //     location: "Hinjawadi, Pune",
    //     placetags: ["Single Room", "AC Available", "Near IT Park"],
    //     price: "₹10,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/b9d7b354-2ddb-4417-bda0-af42dbc0be15.jpg?im_w=720",
    //     name: "Elite Stays Hostel",
    //     location: "Gachibowli, Hyderabad",
    //     placetags: ["Furnished Rooms", "Parking", "Close to University"],
    //     price: "₹7,500/month",
    //     category: "hotal"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/c9ecbd05-65de-44fa-85fe-694af9286144.jpg?im_w=720",
    //     name: "Comfort Rooms PG",
    //     location: "Salt Lake City, Kolkata",
    //     placetags: ["Non-AC", "Homely Meals", "Peaceful Location"],
    //     price: "₹5,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/ca3eec99-2ae5-43b3-bed9-8a00621d74fe.jpg",
    //     name: "Skyline Hotel",
    //     location: "MG Road, Bangalore",
    //     placetags: ["Free Breakfast", "Swimming Pool", "Near Metro"],
    //     price: "₹2,500/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-51384332/original/6e473255-f620-4953-8c7c-c8af5a376ec8.jpeg",
    //     name: "Budget Stay Room",
    //     location: "Kothrud, Pune",
    //     placetags: ["Single Room", "Affordable", "Near Market"],
    //     price: "₹4,500/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Dreamland Hostel",
    //     location: "Connaught Place, Delhi",
    //     placetags: ["Dormitory", "Free Wi-Fi", "Central Location"],
    //     price: "₹9,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Luxury Suite Hotel",
    //     location: "Marine Drive, Mumbai",
    //     placetags: ["Sea View", "Spa", "5-Star Service"],
    //     price: "₹8,000/night",
    //     category: "hotel"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/97192a24-ce9a-4cdf-ad47-9619c616dae4.jpg",
    //     name: "City Center PG",
    //     location: "Banjara Hills, Hyderabad",
    //     placetags: ["Furnished", "Attached Bathroom", "CCTV"],
    //     price: "₹7,000/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/25c121ee-b010-4d70-8907-3063fee99ef6.jpeg",
    //     name: "Tranquil Rooms",
    //     location: "Jubilee Hills, Hyderabad",
    //     placetags: ["Peaceful", "Furnished", "Balcony View"],
    //     price: "₹6,000/month",
    //     category: "rooms"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/miso/Hosting-21711617/original/84e29839-b649-43d6-8d01-7caaf0f5e879.jpeg",
    //     name: "Modern Hostel",
    //     location: "Powai, Mumbai",
    //     placetags: ["Shared Kitchen", "High-Speed Internet", "Game Room"],
    //     price: "₹8,500/month",
    //     category: "pgs"
    // },
    // {
    //     datapic: "https://a0.muscache.com/im/pictures/3a321bee-dcbf-4a9e-8ee9-0d7befcafb52.jpg",
    //     name: "Cosmo Hotel",
    //     location: "Park Street, Kolkata",
    //     placetags: ["Free Wi-Fi", "Buffet Breakfast", "Parking"],
    //     price: "₹3,000/night",
    //     category: "hotel"
    // },
    

    
];
export default placedata;
    