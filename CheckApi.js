import { connect } from 'unistore/full/preact'
import actions from './actions'

export default connect('apiStatus', actions)(({ apiStatus, checkApi }) => (
  <div>
    <h1> API Status: { apiStatus } </h1>
    <button onClick={ checkApi }> Check </button>
  </div>
))
