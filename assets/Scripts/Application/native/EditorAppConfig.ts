import { IDeviceConfig } from "../AppDevice";

export class EditorAppConfig implements IDeviceConfig {
    GetApplicationUserId(): string {
        return "EditorAppConfig"
    }
    GetVersion(): string {
        return "current version"
    }
    GetApplicationName(): string {
        return "Application name"
    }
}