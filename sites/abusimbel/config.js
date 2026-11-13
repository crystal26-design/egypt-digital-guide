
// Abu Simbel site configuration

window.SITE_CONFIG = window.SITE_CONFIG || {};

window.SITE_CONFIG.abusimbel = {
    id: "abusimbel",

    name: {
        zh: "阿布辛贝神庙",
        en: "Abu Simbel Temples",
        fr: "Temples d'Abou Simbel",
        de: "Tempel von Abu Simbel",
        es: "Templos de Abu Simbel"
    },

    guideType: "map",
    status: "available",

    defaultLanguage: "zh",

    // 后续上传对应语言资源后，可直接增加语言
    supportedLanguages: ["zh", "en"],

    entryFile: "index.html",

    media: {
        provider: "r2",
        siteId: "abusimbel"
    }
};
