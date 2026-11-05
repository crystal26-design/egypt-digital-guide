// 全站页面上下文管理
window.APP_CONTEXT = {

    data: {
        language: "zh",
        siteId: null,
        spotId: null,
        sessionId: null
    },

    init() {
        const params = new URLSearchParams(window.location.search);

        const language = params.get("lang");
        const siteId = params.get("site");

        this.data.language = window.APP_LANGUAGE
            ? window.APP_LANGUAGE.set(language || window.APP_LANGUAGE.get())
            : "zh";

        this.data.siteId = siteId || null;

        return this.get();
    },

    setSpot(spotId) {
        this.data.spotId = spotId || null;
        return this.get();
    },

    setSession(sessionId) {
        this.data.sessionId = sessionId || null;
        return this.get();
    },

    get() {
        return { ...this.data };
    }

};
