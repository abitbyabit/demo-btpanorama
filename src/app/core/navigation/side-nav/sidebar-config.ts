import { ISidebarConfig } from "src/app/shared/interface/ISidebarConfig";

export const sidebarConfig:ISidebarConfig[] = [
    {
        name: "home",
        defaultIcon: "../../../../assets/images/spine/icon-home-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-home-active.svg",
        route: "home"
    },
    {
        name: "client",
        defaultIcon: "../../../../assets/images/spine/icon-client-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-client-active.svg",
        route: "client"

    },
    {
        name: "tracking",
        defaultIcon: "../../../../assets/images/spine/icon-tracking-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-tracking-active.svg",
        route: "tracking"
    }
    ,
    {
        name: "business",
        defaultIcon: "../../../../assets/images/spine/icon-business-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-business-active.svg",
        route: "business"
    }
    ,
    {
        name: "investments",
        defaultIcon: "../../../../assets/images/spine/icon-investments-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-investments-active.svg",
        route: "investments"
    }
    ,
    {
        name: "marketData",
        defaultIcon: "../../../../assets/images/spine/icon-market-data-default.svg",
        activeIcon: "../../../../assets/images/spine/icon-market-data-active.svg",
        route: "marketData"
    }
]