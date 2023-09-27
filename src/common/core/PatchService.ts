import {CommonService} from "@/common/core/CommonService";
import {ComponentPublicInstance} from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {RouterService} from "@/common/core/RouterService";
import {VueParticlesService} from "@/common/service/VueParticlesService";
import {WallpaperService} from "@/common/service/WallpaperService";
import {ValidCodeService} from "@/common/service/ValidCodeService";
import {DemoTestService} from "@/common/service/DemoTestService";
import {WallpaperPlusService} from "@/common/service/WallpaperPlusService";
import {AntDesignTestService} from "@/common/service/AntDesignTestService";
import {AntDesignDemoService} from "@/common/service/AntDesignDemoService";

export abstract class PatchService extends RouterService {

    protected constructor() {
        super();
    }

    protected abstract getService<T extends CommonService<any>>(clazz: Class | (new (vue: ComponentPublicInstance) => T), index?: number): T;

    get vueParticlesService(): VueParticlesService {
        return this.getService(Class.VueParticlesService);
    }

    get wallpaperService(): WallpaperService {
        return this.getService(Class.WallpaperService);
    }

    get validCodeService(): ValidCodeService {
        return this.getService(Class.ValidCodeService);
    }

    get demoTestService(): DemoTestService {
        return this.getService(Class.DemoTestService);
    }

    get wallpaperPlusService(): WallpaperPlusService {
        return this.getService(Class.WallpaperPlusService);
    }

    get antDesignTestService(): AntDesignTestService {
        return this.getService(Class.AntDesignTestService);
    }

    get antDesignDemoService(): AntDesignDemoService {
        return this.getService(Class.AntDesignDemoService);
    }

}
