import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HierarchyItem from './HierarchyItem';
import "../styles/HierarchyTable.css";

const HierarchyTable = () => {
    // načtení dat z redux store
    const data = useSelector((state) => state.data);
    // odeslání dat do redux store
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const renderTableHead = () => (
        <thead>
        <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Ability</th>
            <th>Minimal distance</th>
            <th>Weight</th>
            <th>Born</th>
            <th>In space since</th>
            <th>Beer consumption (l/y)</th>
            <th>Knows the answer?</th>
            <th>delete</th>
        </tr>
        </thead>
    );

    //tabulka s daty
    return (
        <table>
            {renderTableHead()}
            <tbody>
            {                    //const unique_id =  item.data.ID + "_" + item.data["Beer consumption (l/y)"]
            }
            {data
                .filter((item) => item.data !== null)
                .map((item) => (
                    <HierarchyItem
                        key={item.data.ID}
                        data={item.data}
                        children={item.children}
                        onRemove={handleRemove}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default HierarchyTable;
