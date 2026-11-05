// 全站语言管理
window.APP_LANGUAGE = {
    supported: ["zh", "en"],
    default: "zh",

    current: "zh",

    set(language) {
        if (!this.supported.includes(language)) {
            language = this.default;
        }

        this.current = language;
        localStorage.setItem("app_language", language);

        return language;
    },

    get() {
        const saved = localStorage.getItem("app_language");

        if (saved && this.supported.includes(saved)) {
            this.current = saved;
        }

        return this.current;
    },

    load() {
        const language = this.get();

        return window.I18N?.[language] || null;
    }
};
