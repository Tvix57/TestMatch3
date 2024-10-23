export class FieldConfig {
    private static config: FieldConfig
    protected constructor() {}
    protected static get getConfig(): FieldConfig {
        if (this.config == null) {
            this.config = new FieldConfig()
        }
        return this.config
    }

    readonly minCombinationLength = 3;
    readonly garanteedStartCombinations = 4;
    readonly fieldSize = 20;

}