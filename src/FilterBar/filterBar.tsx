import React, { useEffect, useReducer } from "react";

import './filterBar.css';

interface FilterBarIntf {
  header: string;
  items: string[];
  sendFilters: any;
}
export function FilterBar(props: FilterBarIntf) {
  const defaultCheckboxes = props.items.reduce((o, key) => ({...o, [key]: false }), {});


  const [checkboxState, checkboxDispatcher] = useReducer(checkboxReducer, defaultCheckboxes);


  function checkboxReducer(state: any, action: any) {
    return ({...state, ...action});
  }

  function sendFilters() {
    const filters = [];

    for (let key in checkboxState) {
      if(checkboxState[key]) {
        filters.push(key);
      }
    }

    props.sendFilters(filters);
  }

  useEffect(() => {
    sendFilters();
  }, [checkboxState]);

  return(
    <div className="relevance-category">
      <h4 className="relevance-header">{props.header}</h4>
      {props.items.map((item, index) => {
        return <div className="check-item" key={index}>
          <input type="checkbox" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {checkboxDispatcher({[item]: e.currentTarget.checked});}}>
          </input>
          <p>{item}</p></div>;
      })}
    </div>
  )
}
