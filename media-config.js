
// Tourly 全站媒体资源配置
window.MEDIA_CONFIG = {
    // 替换成 Cloudflare R2 的 Public Bucket URL
    baseUrl: "https://pub-39b989a1c12a42d788e64e69f3af20be.r2.dev",

    // 生成景区媒体地址
    getSiteUrl(siteId, type, language, filename) {
        const base = this.baseUrl.replace(/\/$/, "");
        const parts = [base, siteId, type];

        if (language) parts.push(language);
        parts.push(filename);

        return parts.join("/");
    },

    // 点位图片：spot0、spot1……
    getImage(siteId, filename) {
        return this.getSiteUrl(siteId, "images", null, filename);
    },

    // 地图：按语言存放
    getMap(siteId, language, filename) {
        return this.getSiteUrl(siteId, "maps", language, filename);
    },

    // 音频：spot00、spot01……
    getAudio(siteId, language, filename) {
        return this.getSiteUrl(siteId, "audio", language, filename);
    }
};
