export var SimpleUtil = (function () {
    function SimpleUtil() {
    }
    SimpleUtil.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return (r[2]);
        return null;
    };
    return SimpleUtil;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/util/simple.util.js.map