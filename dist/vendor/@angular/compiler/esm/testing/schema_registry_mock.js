import { isPresent } from '../src/facade/lang';
export class MockSchemaRegistry {
    constructor(existingProperties, attrPropMapping) {
        this.existingProperties = existingProperties;
        this.attrPropMapping = attrPropMapping;
    }
    hasProperty(tagName, property) {
        var result = this.existingProperties[property];
        return isPresent(result) ? result : true;
    }
    getMappedPropName(attrName) {
        var result = this.attrPropMapping[attrName];
        return isPresent(result) ? result : attrName;
    }
}
//# sourceMappingURL=schema_registry_mock.js.map