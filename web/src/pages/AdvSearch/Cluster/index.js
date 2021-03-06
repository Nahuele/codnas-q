import { Fragment } from 'react'
import PropTypes from 'prop-types'
import ListBox from '../../../components/ListBox'

const Cluster = ({
  onKeyPress,
  setQuery,
  query,
  group,
  setGroup,
  groups,
  prop1,
  setProp1,
  operators,
}) => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
          Cluster Properties
        </h1>
        <div className="w-24">
          <ListBox selected={prop1} setSelected={setProp1} data={operators} />
        </div>
      </div>
      <form className="space-y-2" onKeyPress={(e) => onKeyPress(e)}>
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Cluster ID</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="clusterId"
          type="text"
          placeholder="Cluster ID..."
          name="clusterId"
          value={query.clusterId}
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 sm:pt-2">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Oligomeric State
            </h2>
            <input
              className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="oligState"
              type="text"
              placeholder="Oligomeric State..."
              name="oligomericState"
              value={query.oligomericState}
              onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Group</h2>
            <ListBox selected={group} setSelected={setGroup} data={groups} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 sm:pt-2">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Max RMSD Quaternary Range
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="quatFrom"
                type="number"
                step=".01"
                min="0"
                placeholder="From 0..."
                name="quatFrom"
                value={query.quatFrom}
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="quatTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To 9..."
                name="quatTo"
                value={query.quatTo}
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Max RMSD Tertiary Range
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance- border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="tertFrom"
                type="number"
                step=".01"
                min="0"
                placeholder="From 0..."
                name="tertFrom"
                value={query.tertFrom}
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="tertTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To 3..."
                name="tertTo"
                value={query.tertTo}
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

Cluster.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.any.isRequired,
  group: PropTypes.any.isRequired,
  setGroup: PropTypes.func.isRequired,
  groups: PropTypes.any.isRequired,
  prop1: PropTypes.any.isRequired,
  setProp1: PropTypes.func.isRequired,
  operators: PropTypes.any.isRequired,
}

export default Cluster
