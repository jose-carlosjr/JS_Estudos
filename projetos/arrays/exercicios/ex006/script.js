let arr5 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']
let arr2 = ['item-1', 'item-2']

function verifica(n) {
   if (n.length > 5) {
      console.log('Muitos elementos')
   } else if (n.length < 5) {
      console.log('Poucos elementos')
   }
}

verifica(arr5)
verifica(arr2)