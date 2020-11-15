import { EnumValues } from 'enum-values';


export class UtilityService {
    stringEnumToIdName(EnumArray) {
        const idName = [];
        const namesAndValues = EnumValues.getNamesAndValues(EnumArray);
        namesAndValues.forEach(function (nameValObj) {
            idName.push({ id: nameValObj.value, name: nameValObj.name });
        }, this);

        return idName;
    }

    stringEnumToIdText(EnumArray) {
        const idName = [];
        const namesAndValues = EnumValues.getNamesAndValues(EnumArray);
        namesAndValues.forEach(function (nameValObj) {
            idName.push({ id: nameValObj.value, text: nameValObj.name });
        }, this);

        return idName;
    }

    stringEnumToKeyValue(stringEnum) {
        const keyValue = [];
        const keys = Object.keys(stringEnum).filter((value, index) => {
            return value;
        });

        for (const k of keys) {
            keyValue.push({ key: k, value: stringEnum[k] });
        }

        return keyValue;
    }
}
