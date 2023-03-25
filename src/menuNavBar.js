import { mdiAccount, mdiCogOutline, mdiEmail, mdiThemeLightDark } from "@mdi/js"

export default [
    {
        icon: mdiThemeLightDark,
        label: "Light/Dark",
        isDesktopNoLabel: true,
        isToggleLightDark: true,
    },
    {
        isCurrentUser: true,
        menu: [
            {
                icon: mdiAccount,
                label: "Profil",
                to: "/profile",
            },
            {
                icon: mdiCogOutline,
                label: "Préférences",
            },
            {
                icon: mdiEmail,
                label: "Messages",
            },
            {
                isDivider: true,
            },
        ],
    },
]
