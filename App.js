import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Heading = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://icon-library.com/images/order-food-online-icon/order-food-online-icon-20.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} Stars</h4>
      <h4>{resData.costForTwo}</h4>
      {/* <h4>{resData.sla.deliveryTime} minutes</h4> */}
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "640325",
      name: "Swiss Cake and Bakery",
      cloudinaryImageId: "jfyuob0gbxpthaym8lm0",
      locality: "Block U",
      areaName: "DLF Phase 3",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "640325",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "256644",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=7528158~p=1~eid=00000189-8d90-7412-0445-231d00a00164~srvts=1690297201682~87168",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/swiss-cake-and-bakery-block-u-dlf-phase-3-gurgaon-640325",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "289287",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
      locality: "U15",
      areaName: "DLF Phase 3",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "289287",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "10655",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "12-22 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-26 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/box8-desi-meals-u15-dlf-phase-3-gurgaon-289287",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "304086",
      name: "Rominus Pizza & Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      locality: "Block U",
      areaName: "DLF Phase - 3",
      costForTwo: "₹150 for two",
      cuisines: [
        "Italian-American",
        "Pizzas",
        "Continental",
        "Pastas",
        "Snacks",
        "Desserts",
        "American",
      ],
      avgRating: 4.1,
      favourite: true,
      feeDetails: {
        restaurantId: "304086",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "8387",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-26 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-block-u-dlf-phase-3-gurgaon-304086",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "417218",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "Nathupur",
      areaName: "DLF Phase 3",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "417218",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=7251072~p=2~eid=00000189-8d90-7412-0445-231e00a0025d~srvts=1690297201682~87168",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-26 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/louis-burger-nathupur-dlf-phase-3-gurgaon-417218",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "261775",
      name: "Gaye Mata ki Rasoi",
      cloudinaryImageId: "fjlwbo2d0ngiukxdouyf",
      locality: "Cyber City",
      areaName: "Cyber City",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Tandoor"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "261775",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "11081",
      avgRatingString: "4.0",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gaye-mata-ki-rasoi-cyber-city-gurgaon-261775",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "23056",
      name: "DN Snacks",
      cloudinaryImageId: "ffahg88ykz1xyfjziwfa",
      locality: "3rd Phase",
      areaName: "DLF Phase 3",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Snacks", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "23056",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "73698",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-26 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dn-snacks-3rd-phase-dlf-phase-3-gurgaon-23056",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
  {
    info: {
      id: "392194",
      name: "Ambersar By Enoki",
      cloudinaryImageId: "hgvtli41f29xooholubt",
      locality: "DLF City Court",
      areaName: "Sikandarpur",
      costForTwo: "₹800 for two",
      cuisines: ["Kebabs", "North Indian", "Mughlai"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "392194",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4700,
      },
      parentId: "12136",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=7343223~p=3~eid=00000189-8d90-7412-0445-231f00a0035d~srvts=1690297201682~87168",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          maxDuration: "3000",
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-546a943b-679c-4ce5-befb-ee206de85eaa",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ambersar-by-enoki-dlf-city-court-sikandarpur-gurgaon-392194",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {resObj.map(res => {
        console.log(res)
        return <RestaurantCard key={res.info.id} resData={res.info} />
      })}
        
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
