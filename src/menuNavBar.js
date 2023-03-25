import {
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiLogout,
    mdiThemeLightDark,
} from "@mdi/js"

export default [
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
            {
                icon: mdiLogout,
                label: "Déconnexion",
                isLogout: true,
            },
        ],
    },
    {
        icon: mdiThemeLightDark,
        label: "Light/Dark",
        isDesktopNoLabel: true,
        isToggleLightDark: true,
    },
    {
        icon: mdiLogout,
        label: "Déconnexion",
        isDesktopNoLabel: true,
        isLogout: true,
    },
]
