/**
 * 
 * EditorAppConfig.ts
 * db://assets/Scripts/Application/Editor/EditorAppConfig.ts
 *
 */

import { log } from "cc";
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