/* Submit Buttons*/

document.getElementById('today-form').addEventListener('submit', getUserTodayList);
document.getElementById('week-form').addEventListener('submit', getUserWeekList);

/*checkbox  */

document.getElementById('placeList').addEventListener('click', selectCheckBox);
/*remove todo */
document.getElementById('placeList').addEventListener('click', removeTodo);

/*Select All */

document.getElementById('selectAll').addEventListener('click', selectAll);

/*modify text */

document.getElementById('placeList').addEventListener('dblclick', modifyText);
