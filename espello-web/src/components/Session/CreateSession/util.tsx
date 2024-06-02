
export interface ButtonOption {
    displayLabel: string;
    label: string;
    active: boolean;
    selected: boolean;
}
export interface ButtonOptions {
    displayLabel: string;
    label: string;
    options: ButtonOption[]
}

export const sessionDetailButtonOptions: ButtonOptions[] = [
    {
        displayLabel: "role",
        label: "role",
        options: [
            {
                displayLabel: "product",
                label: "product",
                active: true,
                selected: true
            },
            {
                displayLabel: "consultant",
                label: "consultant",
                active: true,
                selected: false
            },
            {
                displayLabel: "strategy",
                label: "strategy",
                active: false,
                selected: false
            }
        ]
    },
    {
        displayLabel: "mode",
        label: "mode",
        options: [
            {
                displayLabel: "challenge",
                label: "challenge",
                active: true,
                selected: true
            },
            {
                displayLabel: "friendly",
                label: "friendly",
                active: false,
                selected: false
            },
            {
                displayLabel: "assisted",
                label: "assisted",
                active: false,
                selected: false
            }
        ]
    },
    {
        displayLabel: "company type",
        label: "companyType",
        options: [
            {
                displayLabel: "start-up",
                label: "start-up",
                active: true,
                selected: true
            },
            {
                displayLabel: "multi-national",
                label: "multi-national",
                active: true,
                selected: false
            }
        ]
    }
]