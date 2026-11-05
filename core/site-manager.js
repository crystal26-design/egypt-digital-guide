// 全站景区管理
window.SITE_MANAGER = {

    getAll() {
        return Object.values(window.SITE_CONFIG || {});
    },

    get(siteId) {
        return window.SITE_CONFIG?.[siteId] || null;
    },

    getAvailable() {
        return this.getAll().filter(site =>
            site.status === "available"
        );
    },

    getName(siteId, language) {
        const site = this.get(siteId);

        if (!site) return "";

        const lang = language || window.APP_LANGUAGE?.get() || "zh";

        return site.name?.[lang] || site.name?.zh || site.id;
    },

    isAvailable(siteId) {
        const site = this.get(siteId);

        return !!site && site.status === "available";
    },

    supportsLanguage(siteId, language) {
        const site = this.get(siteId);

        return !!site &&
            site.supportedLanguages?.includes(language);
    }

};
