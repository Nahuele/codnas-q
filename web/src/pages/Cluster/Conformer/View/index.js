import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'

const View = ({ idx }) => {
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const conformer = useSelector((state) => state.cluster.conformers[idx])

  useEffect(() => {
    setLoaded(false)
    setLoading(false)
    const timer = setTimeout(() => {
      const NGL = require('ngl')
      const pdbName = conformer.information.pdb_id
      const pdb = `rcsb://${pdbName}.pdb.gz`
      setLoaded(true)
      const stage = new NGL.Stage('view', { backgroundColor: 'white' })
      NGL.DatasourceRegistry.add(
        'data',
        new NGL.StaticDatasource('https://unpkg.com/ngl@0.10.4-1/')
      )
      stage.loadFile(pdb).then(function lFile(o) {
        o.addRepresentation('cartoon')
        o.addRepresentation('base')
        o.autoView()
        setLoading(true)
      })
    }, 2000)
    return () => clearTimeout(timer)
  }, [idx])

  const onWheel = () => {
    const element = document.getElementById('view')
    function wheel(event) {
      event.preventDefault()
      return false
    }
    element.onmouseenter = function x() {
      element.addEventListener('DOMMouseScroll', wheel, false)
    }
    document.onmousewheel = wheel
    element.onmousewheel = document.onmousewheel
  }

  return (
    <>
      <div className="bg-gray-200 rounded-t-xl p-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">3D View</h2>
      </div>
      <div className="px-4 flex place-content-center items-center">
        {loaded ? (
          <div
            id="view"
            className="h-80 w-72"
            onWheel={() => onWheel()}
            title={`${!loading ? 'Loading...' : conformer.information.pdb_id}`}
          />
        ) : (
          <div id="loader" className="flex items-center h-80">
            <ReactLoading type="spin" color="#2d699b" />
          </div>
        )}
      </div>
    </>
  )
}

View.propTypes = {
  idx: PropTypes.number.isRequired,
}

export default View
