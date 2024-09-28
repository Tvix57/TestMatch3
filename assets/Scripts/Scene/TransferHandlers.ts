export enum NotificationShowPolicy
{
    MainScene = "MainScene",
    Always = "Always",
    End = "End"
}
export interface IDialogLauncher
{
    GetShowType():NotificationShowPolicy
    Show():void
    GetName():string
    IsReady():boolean
    Clear():void
}

