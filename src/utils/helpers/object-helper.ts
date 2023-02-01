export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: any) => {
   return items.map(el => {
        if (el[objPropName] === itemId) {
            return {...el, ...newObjProps}
        }
        return el
    })
}