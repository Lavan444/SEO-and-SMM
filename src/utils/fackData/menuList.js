import { DashboardIcon, SeoIcon, ProgrammaticSeoIcon, EcommerceSeoIcon, LocalSeo, Orm, BoostPosts, Campaigns, Keyword, GoogleSearchConsole, GoogleAnalytics, GoogleMyBusiness, Wordpress } from "./Icon.jsx";
export const menuList = [
    // Main Section
    {
        id: 0,
        name: "Dashboard",
        path: "/reports/leads",
        icon: DashboardIcon
    },

    // SEO Suite Section
    {
        id: 100,
        name: "SEO Suite",
        isCaption: true
    },
    {
        id: 8,
        name: "SEO",
        path: "/",
        icon: SeoIcon
    },
    {
        id: 12,
        name: "Programmatic SEO",
        path: "#",
        icon: ProgrammaticSeoIcon
    },
    {
        id: 13,
        name: "E-Commerce SEO",
        path: "#",
        icon: EcommerceSeoIcon
    },
    {
        id: 14,
        name: "Local SEO",
        path: "#",
        icon: LocalSeo
    },

    // Online Reputation Section
    {
        id: 101,
        name: "Online Reputation",
        isCaption: true
    },
    {
        id: 11,
        name: "ORM",
        path: "#",
        icon: Orm
    },

    // Paid Ads Section
    {
        id: 102,
        name: "Paid Ads",
        isCaption: true
    },
    {
        id: 10,
        name: "Boost Posts",
        path: "#",
        icon: BoostPosts
    },
    {
        id: 103,
        name: "Campaigns",
        path: "#",
        icon: Campaigns
    },
    {
        id: 104,
        name: "Keyword Research",
        path: "#",
        icon: Keyword
    },

    // Integrations Section
    {
        id: 105,
        name: "Integrations",
        isCaption: true
    },
    {
        id: 106,
        name: "Google Search Console",
        path: "#",
        icon: GoogleSearchConsole
    },
    {
        id: 107,
        name: "Google Analytics 4",
        path: "#",
        icon: GoogleAnalytics
    },
    {
        id: 108,
        name: "Google My Business",
        path: "#",
        icon: GoogleMyBusiness
    },
    {
        id: 109,
        name: "WordPress/CMS",
        path: "#",
        icon: Wordpress
    },
    {
        id: 110,
        name: "Facebook",
        path: "#",
        icon: "feather-facebook"
    },
    {
        id: 111,
        name: "Instagram",
        path: "#",
        icon: "feather-instagram"
    },
    {
        id: 112,
        name: "LinkedIn",
        path: "#",
        icon: "feather-linkedin"
    },

     {
        id: 113,
        name: "Profile",
        path: "/applications/chat",
        icon: "feather-user"
    },
]
