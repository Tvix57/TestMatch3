import { IDeviceConfig } from "../AppDevice";

export class WebAppConfig implements IDeviceConfig {
    GetApplicationUserId(): string {
        throw new Error("Method not implemented.");
    }
    GetVersion(): string {
        throw new Error("Method not implemented.");
    }
    GetApplicationName(): string {
        throw new Error("Method not implemented.");
    }
}