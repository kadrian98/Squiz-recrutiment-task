import React, { useState } from "react";

function DataItems(props) {
  const [searchCountry, setSearchCountry] = useState("");
  const [searchIndustry, setSearchIndustry] = useState("");

  console.log(searchCountry);
  //asc number of employees
  const noAscending = [...props.data].sort((a, b) =>
    a.numberOfEmployees > b.numberOfEmployees ? 1 : -1
  );
  console.log(noAscending);

  //disc number of employess
  const noDescending = [...props.data].sort((a, b) =>
    a.numberOfEmployees > b.numberOfEmployees ? -1 : 1
  );
  console.log(noDescending);

  //asc name
  const nameAscending = [...props.data].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  console.log(nameAscending);

  //disc name
  const nameDescending = [...props.data].sort((a, b) =>
    a.name > b.name ? -1 : 1
  );
  console.log(nameDescending);

  return (
    <section className="results">
      <input
        type="text"
        placeholder="Search for country"
        onChange={e => setSearchCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search for industry"
        onChange={e => setSearchIndustry(e.target.value)}
      />
      <ul className="results__list">
        {props.data &&
          props.data
            .filter(item => {
              return searchCountry.toLowerCase() === ""
                ? item
                : item.country.toLowerCase().includes(searchCountry);
            })
            .filter(item => {
              return searchIndustry.toLowerCase() === ""
                ? item
                : item.industry.toLowerCase().includes(searchIndustry);
            })
            .map(({ id, name, country, industry, numberOfEmployees }) => (
              <li className="results__list-item" key={id}>
                <h5>{name}</h5>
                <h5>{country}</h5>
                <h5>{industry}</h5>
                <h5>{numberOfEmployees}</h5>
              </li>
            ))}
      </ul>
    </section>
  );
}

export default DataItems;
