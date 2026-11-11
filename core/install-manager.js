
// 全站安装管理
(function () {
    let deferredPrompt = null;

    window.APP_INSTALL = {

        // 判断是否已经安装为桌面应用
        isInstalled() {
            return window.matchMedia("(display-mode: standalone)").matches
                || window.navigator.standalone === true;
        },

        // 判断设备类型
        getPlatform() {
            const ua = navigator.userAgent || "";

            if (/iPhone|iPad|iPod/i.test(ua)) {
                return "ios";
            }

            if (/Android/i.test(ua)) {
                return "android";
            }

            return "other";
        },

        // 判断当前是否支持直接安装
        canInstall() {
            return !!deferredPrompt;
        },

        // 获取安装引导
        getInstructions() {
            const platform = this.getPlatform();

            if (this.isInstalled()) {
                return {
                    installed: true,
                    message: "已经添加到主屏幕，可以直接使用。"
                };
            }

            if (platform === "ios") {
                return {
                    installed: false,
                    method: "manual",
                    message: "请使用浏览器打开页面，点击分享按钮，再选择添加到主屏幕。"
                };
            }

            if (platform === "android") {
                return {
                    installed: false,
                    method: "prompt",
                    message: "可以将导览添加到手机主屏幕，方便下次使用。"
                };
            }

            return {
                installed: false,
                method: "manual",
                message: "请使用支持安装网页应用的浏览器，将页面添加到桌面。"
            };
        },

        // 触发 Android 安装
        async promptInstall() {
            if (!deferredPrompt) {
                return {
                    success: false,
                    reason: "unavailable"
                };
            }

            const promptEvent = deferredPrompt;
            deferredPrompt = null;

            await promptEvent.prompt();

            const choice = await promptEvent.userChoice;

            return {
                success: choice.outcome === "accepted",
                outcome: choice.outcome
            };
        }
    };

    // 监听浏览器提供的安装事件
    window.addEventListener("beforeinstallprompt", function (event) {
        event.preventDefault();
        deferredPrompt = event;
    });

    // 监听安装完成事件
    window.addEventListener("appinstalled", function () {
        deferredPrompt = null;
    });

})();
