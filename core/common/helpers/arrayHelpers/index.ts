interface useArrayUpdateModel<K, I> {
    id: K,
    property: string,
    value: I
}

interface IDModel {
    id?: string | null,

    [key: string]: any
}

export class ArrayHelpers<T extends IDModel> {

    private array: T[];

    constructor(array: T[]) {
        this.array = [...array];
    }

    get arrayInstance() {
        return this.array;
    }

    arrayUpdate = <K, I>(props: useArrayUpdateModel<K, I>) => {

        let {
            id,
            property,
            value
        } = props;

        const properties = property.split(".");

        const singlePropertyCondition = properties.length === 1;

        return this.arrayInstance.map((element) => {

            if (element.id === id) {
                return {
                    ...element,
                    [properties[0]]: singlePropertyCondition
                        ? value
                        : {
                            [properties[1]]: value
                        }
                }
            }

            return element;
        });
    }

    arrayElementDelete = <T>(identifier: T, comparingPropertyName?: string) => {
        return this.arrayInstance.filter(element => {
            let comparingProperty = comparingPropertyName
                ? element[comparingPropertyName]
                : element;
            return comparingProperty !== identifier;
        });
    }
}