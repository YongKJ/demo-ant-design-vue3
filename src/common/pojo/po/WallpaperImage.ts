
export class WallpaperImage {

    private static readonly _BACKGROUND = require("@/assets/image/nap.jpg");
    private static readonly _BACKGROUND_ONE = require("@/assets/image/20_21.jpg");

    static get BACKGROUND_ONE(): any {
        return this._BACKGROUND_ONE;
    }

    static get BACKGROUND(): any {
        return this._BACKGROUND;
    }
}