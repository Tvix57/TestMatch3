import { native } from "cc";
import { IDeviceConfig } from "../AppDevice";

export class AndroidApplicationConfig implements IDeviceConfig {
    GetApplicationUserId(): string {
        return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo","getUserId","()Ljava/lang/String;");
    }
    GetVersion(): string {
        return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo","getVersion","()Ljava/lang/String;");
    }
    GetApplicationName(): string {
        return native.reflection.callStaticMethod("com/grit/fftc/utils/ApplicationInfo","getAppName","()Ljava/lang/String;");
    }
}