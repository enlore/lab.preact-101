import { Component } from 'preact';
import { connect } from 'unistore/full/preact'
import actions from './actions'
import CensusRow from './CensusRow'

class Screen extends Component {
  render ({ msg, inventory, editingCount, setEditingCount, addCount, setCount, submitCounts }) {
    return <div class="screen screen-inventory-census">
      <h1> Census </h1>

      <div class="inventory-census">
          <div class="inventory-product">
            <div class="inventory-manufacturer"> Man. </div>
            <div class="inventory-make"> Make </div>
            <div class="inventory-expected"> Expected </div>
            <div class="inventory-actual"> Actual </div>
          </div>

          { inventory.map(product => (
            <CensusRow
              editingCount={editingCount}
              product={product}
              setCount={setCount}
              setEditingCount={setEditingCount}
              addCount={addCount}
            />
          ))
        }

        <div class="inventory-submit">
          <button onClick={ submitCounts }> Submit Census Report </button>
        </div>
      </div>
    </div>
  }
}

export default connect('inventory, editingCount', actions)(Screen)
