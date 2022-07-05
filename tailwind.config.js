const isProduction = process.env.NODE_ENV === "production";

let purge = false;

// We want optimization only in production
if (isProduction) {
    purge = ["./content/**/*.njk", "./src/*.js"];
}

module.exports = {
    purge,
    darkMode: "class",
    plugins: [
        function ({ addUtilities }) {
            const extendUnderline = {
                ".underline": {
                    textDecoration: "underline",
                    "text-decoration-color": "text-blue-300",
                    "text-underline-position": "under"
                }
            };
            addUtilities(extendUnderline);
        }
    ],
    variants: {
        extend: {
            backgroundImage: ["dark"],
            fill: ["dark"],
            fontWeight: ["dark"],
            gradientColorStops: ["dark"],
            stroke: ["dark"]
        }
    },
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                ...theme("colors"),
                "dark-nav": "#242424",
                "dark-body": "#1B1B1E",
                "dark-heading": "#27282B"
            }),
            backgroundImage: () => ({
                "sidebar-dark":
                    "radial-gradient(circle, #091C32 0%, #223C5B 100%)",
                "sidebar-light":
                    "radial-gradient(circle, #4E88D2 0%, #134998 100%)"
            }),
            borderWidth: (theme) => ({
                ...theme("width"),
                1: "1px"
            }),
            gradientColorStops: (theme) => ({
                ...theme("colors"),
                "dark-outer": "#1B1B1E",
                "dark-middle": "#242424"
            }),
            gridTemplateColumns: {
                small: "0 auto",
                regular: "minmax(auto, 0fr) auto;",
                topbar: "auto 18rem"
            },
            lineHeight: {
                pagination: "1.8rem",
                12: "3rem"
            },
            margin: {
                15: "3.75rem"
            },
            maxWidth: {
                content: "95rem"
            },
            textColor: {
                "orange-hover": "#d2603a"
            }
        }
    }
};
