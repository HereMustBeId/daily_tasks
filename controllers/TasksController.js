import RequestController from '../controllers/RequestController'

/**
 * Tasks controller
 */
class Tasks extends RequestController {
   constructor () {
      super();

      this.dispatcherObj = {
         setTaskNameForEdit: this.setTaskNameForPopUp.bind(this),
         setSelectValueForPopUp: this.setSelectValueForPopUp.bind(this),
         showPopUp: this.showPopUp.bind(this),
         addDragElement: this.addDragElement.bind(this)
      }
   }

   /**
    * Save drag elemnt in store
    * So that it can be taken in parent node
    * @param {Node} element
    */
   addDragElement (element) {
      this.dispatch({
         type: 'DRAG_TASK',
         payload: element
      });
   }

   /**
    *  Add new task. Make a request and send data to callback
    *  @param {Object} task
    */
   addTask (taskObj) {
      this.url('http://localhost:8080/mdt/task/create');
      this.resopnseType('POST');

      this.makeRequest(taskObj).then(
         result=>this.saveTaskCallback(result),
         error => console.log (error)
      );
   }

   /**
    * Send event that task was added to update task list, then hide pop-up
    * @param  {JSON} data
    */
   saveTaskCallback (data) {
      this.dispatch({
         type: 'TASK_ADDED',
         payload: data
      });
      this.dispatch({
         type: 'HIDE_POPUP'
      });
      this.dispatch({
         type: 'LOAD_CALENDAR_TASKS'
      });
   }

   /**
    * Set task name on pop-up input
    * @param {String} taskName
    */
   setTaskNameForPopUp (taskName) {
      this.dispatch({
         type: 'SET_POPUP_INPUT_TEXT',
         payload: taskName
      });
   }

   /**
    * Set select value to pop-up
    * @param {String} selectValue
    */
   setSelectValueForPopUp (selectValue) {
      this.dispatch({
         type: 'SET_POPUP_SELECT_VALUE',
         payload: selectValue
      });
   }

   /**
    * Show Pop-up for task editor. It must set to store the type of changes.
    * It can be add new task or edit that.
    * It will be called onSaveMethod after request for saving changes
    * @param  {String} popUpType - addTask/editCategory
    * @param  {Function} onSaveMethod
    */
   showPopUp (popUpType, onSaveMethod) {
      this.dispatch({
         type: 'SHOW_POPUP',
         payload: [popUpType, onSaveMethod]
      });
   }

   /**
    * Edit task name. Make a request and send data to callback
    * @param  {Object} taskId - updatedTask
    */
   editTask (task) {
      this.url('http://localhost:8080/mdt/task/update');
      this.resopnseType('POST');

      this.makeRequest(task).then(
         result=>this.editTaskCallback(result),
         error => console.log (error)
      );
   }

   /**
    * Send event that task was updated to update task list, then hide pop-up
    * @param {JSON} data
    */
   editTaskCallback (data) {
      this.dispatch({
         type: 'HIDE_POPUP'
      });
      this.dispatch({
         type: 'TASK_CHANGED',
         payload: data
      });
      this.dispatch({
         type: 'LOAD_CALENDAR_TASKS'
      });
   }

   /**
    * Delete task. Make a request and send data to callback
    * @param  {Int} taskId
    */
   deleteTask (taskId) {
      this.url('http://localhost:8080/mdt/task/delete');
      this.resopnseType('POST');

      this.makeRequest({
         id: taskId,
         text: '',
         categoryId: '',
         done: false,
         scheduled: false,
         scheduleDate: '2017.10.12'
      }).then(
         result=>this.deleteTaskCallback(result),
         error => console.log (error)
      );
   }

   /**
    * Send event that task deleted to update list, then hide pop-up
    * @param  {JSON} data
    */
   deleteTaskCallback (data) {
      this.dispatch({
         type: 'TASK_DELETED',
         payload: data
      });
      this.dispatch({
         type: 'HIDE_POPUP'
      });
      this.dispatch({
         type: 'TASK_CHANGED',
         payload: data
      });
      this.dispatch({
         type: 'LOAD_CALENDAR_TASKS'
      });
   }

   setGetDispatch (dispatch) {
      this.dispatch = dispatch;
      return this.dispatcherObj;
   }

}

export default new Tasks();
