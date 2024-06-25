import React from 'react';

const Filters = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filters">
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="active"
          checked={filter === 'active'}
          onChange={handleFilterChange}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filter === 'completed'}
          onChange={handleFilterChange}
        />
        Completed
      </label>
    </div>
  );
};

export default Filters;