import jsonData from "../data/example-data.json";

// počáteční stav aplikace
const initialState = {
    data: jsonData,
};

// hlavní funkce pro odstraňování
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_ITEM": {
            // z hierarchie odstraňuji data pomocí jejich ID
            const removeItem = (id, items) => {
                if (!Array.isArray(items)) {
                    return [];
                }

                return items
                    .filter((item) => item.data.ID !== id)
                    .map((item) => {
                        //console.log(Object.entries(item.data).map(column => column[1]).join(";")+"_____________"+id)
                        //rekurzivní odstraňování itemu z childrenGroup
                        const newChildren = Object.entries(item.children).reduce(
                            (acc, [key, childGroup]) => {
                                const newChildGroup = removeItem(id, childGroup.records);
                                return {...acc, [key]: {...childGroup, records: newChildGroup}};
                            },
                            {}
                        );

                        return {...item, children: newChildren};
                    });
            };

            // aktualizovaný stav s novými daty bez odstraněného itemu
            const updatedData = removeItem(action.payload, state.data);
            return { ...state, data: updatedData };
        }

        default:
            return state;
    }
};

export default rootReducer;

