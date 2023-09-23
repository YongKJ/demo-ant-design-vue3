import {debounce} from "lodash-es";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";
import {GenUtil} from "@/common/util/GenUtil";
import Vue from "vue";
import {StoreService} from "@/common/core/StoreService";

export abstract class ResizeService extends StoreService {

    protected constructor() {
        super();
    }

    protected abstract get vue(): Vue;

    protected screenResizeWatch(refName?: string): void {
        window.addEventListener("resize", debounce(async () => {
            let screenHeight = document.documentElement.clientHeight + "px";
            let tempScreenWidth = (document.documentElement.clientWidth + 20) + "px";
            let tempScreenHeight = (document.documentElement.clientHeight + 20) + "px";
            LogUtil.loggerLine(Log.of("WallpaperPlusService", "initData", "screenHeight", screenHeight));
            do {
                await this.setStyleHeightAndWidth(refName);
                await GenUtil.sleep(333);
                LogUtil.loggerLine(Log.of("WallpaperPlusService", "initData", "styleWidth", ResizeService.styleWidth()));
                LogUtil.loggerLine(Log.of("WallpaperPlusService", "initData", "styleHeight", ResizeService.styleHeight()));
            } while (tempScreenHeight !== ResizeService.styleHeight() || tempScreenWidth !== ResizeService.styleWidth());
        }, 333));
    }

    private async getStripByType(type: string, refName?: string): Promise<Record<string, any>> {
        let scroll = undefined;
        do {
            scroll = this.vue.$refs[refName || "scroll"];
            await GenUtil.sleep(10);
        } while (typeof scroll === "undefined");
        if (typeof scroll === "undefined") return {};

        let children = (<Record<string, any>>scroll).$children;
        for (let child of children) {
            let className = <string>child.$el.className;
            if (!className.includes(type)) continue;
            return child;
        }
        return {};
    }

    private async setStyleHeightAndWidth(refName?: string): Promise<void> {
        let screenHeight = document.documentElement.clientHeight + "px";
        let scroll = <HTMLDivElement>document.getElementsByClassName("happy-scroll")[0];
        scroll.setAttribute("style", "height: " + screenHeight);

        let tempScreenWidth = (document.documentElement.clientWidth + 20) + "px";
        let tempScreenHeight = (document.documentElement.clientHeight + 20) + "px";
        const tempScroll = <HTMLDivElement>document.getElementsByClassName("happy-scroll-container")[0];
        tempScroll.setAttribute("style", "width: " + tempScreenWidth + "; height: " + tempScreenHeight);

        scroll = <HTMLDivElement>document.getElementsByClassName("happy-scroll")[0];
        const slotEle = <HTMLDivElement>document.getElementById("content-details");
        const verticalStrip = await this.getStripByType("vertical", refName);
        verticalStrip.computeStrip(slotEle.scrollHeight, scroll.clientHeight);
        const horizontalStrip = await this.getStripByType("horizontal", refName);
        horizontalStrip.computeStrip(slotEle.scrollWidth, scroll.clientWidth);
    }

    private static styleHeight(): string {
        const scroll = <HTMLDivElement>document.getElementsByClassName("happy-scroll-container")[0];
        return scroll.style.height;
    }

    private static styleWidth(): string {
        const scroll = <HTMLDivElement>document.getElementsByClassName("happy-scroll-container")[0];
        return scroll.style.width;
    }

}