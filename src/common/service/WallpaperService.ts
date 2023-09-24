import {ComponentPublicInstance} from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {CommonService} from "@/common/core/CommonService";

export class WallpaperService extends CommonService<WallpaperService> {

    public constructor(vue: ComponentPublicInstance) {
        super(vue);
    }

    public initData(): void {
        this.screenResizeWatch();
    }

    public getBgImgStyle(bgImg: string): Record<string, any> {
        return {
            backgroundImage: 'url(' + bgImg + ')'
        };
    }

    public getScrollbarHeightStyle(): Record<string, any> {
        let screenHeight = document.documentElement.clientHeight;
        return {
            height: screenHeight + "px",
        };
    }

    public getMainWidthStyle(): Record<string, any> {
        let screenWidth = document.documentElement.clientWidth;
        return {
            width: screenWidth + "px"
        };
    }

    protected getClassName(): string {
        return Class.WallpaperService;
    }

    static get class(): string {
        return Class.WallpaperService;
    }

}