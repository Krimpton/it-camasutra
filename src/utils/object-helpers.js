export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u["id"] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}