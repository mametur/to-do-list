/* Submit Buttons*/

document.getElementById('today-form').addEventListener('submit', getUserTodayList);
document.getElementById('week-form').addEventListener('submit', getUserWeekList);

/*checkbox  */

document.getElementById('placeList').addEventListener('click', selectCheckBox);
/*remove todo */
document.getElementById('placeList').addEventListener('click', removeTodo);
