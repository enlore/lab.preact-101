export default ({ editingCount, product, setCount, setEditingCount, addCount }) => (
  <div class="inventory-product">
    <div class="inventory-manufacturer"> { product.manufacturer } </div>
    <div class="inventory-make"> { product.make } </div>
    <div class="inventory-expected"> { product.count.expected } </div>

    { editingCount
        ? <div class="inventory-actual">
            <input
              type="number"
              value={ product.count.actual }
              onInput={ ev => (setCount(product,  ev.target.value))} />
          </div>

        : <div
            style="cursor: pointer;"
            class="inventory-actual"
            onClick={ ev => setEditingCount(true) }> { product.count.actual }
          </div>
    }

    { editingCount &&
      <div class="inventory-save">
        <button onClick={ ev => (ev.stopPropagation(), setEditingCount(false)) }> Save </button>
      </div>
    }

    <div class="inventory-inc">
      <button onClick={ ev =>  addCount(product, 1) }> + </button>
    </div>

    <div class="inventory-dec">
      <button onClick={ ev => addCount(product, -1) }> - </button>
    </div>
  </div>
)
