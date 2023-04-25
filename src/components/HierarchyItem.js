import React, { useState } from "react";
import RemoveButton from "./RemoveButton";

const HierarchyItem = ({ data, children = {}, onRemove, isChild }) => {
    // ověření, zda jsou children položky expanded nebo ne
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // kontrola, zda má položka children
    const hasChildren = Object.values(children).some(
        (group) => group.records && group.records.length > 0
    );


    const renderChildrenTableHead = (childrenObj) => {
        if (childrenObj.hasOwnProperty("has_secrete")) {
            return (
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Nemesis ID</th>
                    <th>Secret Code</th>
                    <th>Delete</th>
                </tr>
                </thead>
            );
        } else {
            return (
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Character ID</th>
                    <th>Is Alive?</th>
                    <th>Years</th>
                    <th>Delete</th>
                </tr>
                </thead>
            );
        }
    };

    const renderChildren = (childrenObj) => {
        const childElements = [];

        for (const childGroupKey in childrenObj) {
            const childGroup = childrenObj[childGroupKey];

            if (childGroup.records && Array.isArray(childGroup.records)) {
                childGroup.records.forEach((child) => {
                    childElements.push(
                        <HierarchyItem
                            key={child.data.ID}
                            data={child.data}
                            children={child.children}
                            onRemove={onRemove}
                            isChild
                        />
                    );
                });
            }
        }

        return childElements;
    };

    // vyrenderování položky a pokud má děti a klikneme na expandovat, tak i dětí
    return (
        <>
            <tr className={`data-row ${isChild ? "child-row" : ""}`}>
                <td>
                    {hasChildren && (
                        <button className="toggle-expand" onClick={toggleExpand}>
                            {expanded ? "▼" : "►"}
                        </button>
                    )}
                </td>
                {//console.log(Object.entries(data).map(column => column[1]).join(";"))
                    //console.log((Object.entries(data).map(([key, value]) => key+value).join(";")))
                }
                {data && Object.entries(data).map(([key, value]) => (
                    <td key={key}>{value}</td>
                ))}
                <td>
                    <RemoveButton onClick={() => onRemove(data.ID)} />
                </td>
            </tr>
            {expanded && (
                <tr>
                    <td colSpan={Object.keys(data).length + 3}>
                        <table className="child-table">
                            {renderChildrenTableHead(children)}
                            <tbody>{renderChildren(children)}</tbody>
                        </table>
                    </td>
                </tr>
            )}
        </>
    );
};

export default HierarchyItem;

