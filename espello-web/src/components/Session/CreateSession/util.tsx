
export interface ButtonOption {
    label: string;
    selected: boolean;
}
export interface ButtonOptions {
    label: string;
    options: ButtonOption[]
}

export const details: ButtonOptions[] = [
    {
        label: "role",
        options: [
            {
                label: "product",
                selected: false
            },
            {
                label: "Consultant",
                selected: true
            },
            {
                label: "Strategy",
                selected: false
            }
        ]
    },
    {
        label: "mode",
        options: [
            {
                label: "challenge",
                selected: true
            },
            {
                label: "friendly",
                selected: false
            },
            {
                label: "assisted",
                selected: false
            }
        ]
    },
    {
        label: "company type",
        options: [
            {
                label: "start-up",
                selected: true
            },
            {
                label: "multi-national",
                selected: false
            }
        ]
    }
]