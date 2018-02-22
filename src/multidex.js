/**
 * Index that changes by iterating through the list of values.
 *
 * @param {object[]} List of indexes.
 */
let Multidex = function(listOfIndexes) {
  let internalIndex = 0;

	/**
   * Function that returns the current value of the multidex.
   *
   * @return {object} Return the multidex index value.
   */
  function toString(){

    if (listOfIndexes && listOfIndexes.length > 0 && internalIndex < listOfIndexes.length){

      return listOfIndexes[internalIndex++];
    } else {

			throw new Error('Multidex is out of bounds.');
    }
  };

  return {toString};
};

module.exports = Multidex;
