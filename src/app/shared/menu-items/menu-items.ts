import { Injectable } from "@angular/core";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: "Dashboard",
    main: [
      {
        state: "dashboard",
        name: "Dashboard",
        type: "sub",
        icon: "icon-screen-desktop",
        badge: [
          {
            type: "info",
            value: "3"
          }
        ],
        children: [
          {
            state: "clean",
            name: "Data Presentation"
          },
          {
            state: "analytical",
            name: "Analytical Presentation"
          }
        ]
      },
      {
        state: "ticket",
        name: "Tickets",
        type: "sub",
        icon: "icon-notebook",
        children: [
          {
            state: "new-ticket",
            name: "New Ticket"
          },
          {
            state: "search-ticket",
            name: "Search ticket"
          },
          {
            state: "update-ticket",
            name: "Update Ticket"
          }
        ]
      },
      {
        state: "payment",
        name: "Payments",
        type: "sub",
        icon: "icon-notebook",
        children: [
          {
            state: "search-payment",
            name: "Search Payment"
          }
        ]
      },
      {
        state: "user",
        name: "Users",
        type: "sub",
        icon: "icon-notebook",
        children: [
          {
            state: "add-user",
            name: "New User"
          },
          {
            state: "manage-user",
            name: "manage users"
          }
        ]
      },
      {
        state: "operator",
        name: "Operator",
        type: "sub",
        icon: "icon-notebook",
        children: [
          {
            state: "new-operator",
            name: "New Operator"
          },
          {
            state: "manage-operator",
            name: "Manage Operator"
          }
        ]
      },
      {
        state: "vehicle",
        name: "Vehicles",
        type: "sub",
        icon: "icon-notebook",
        children: [
          {
            state: "manage-vehicles",
            name: "Manage Vehicles"
          },
          {
            state: "add-vehicle",
            name: "Add Vehicles"
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
