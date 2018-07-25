# daily_tasks
React daily tasks

How it looks in general:

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/43214569-532aa21e-9042-11e8-9796-b1a2b070efb4.jpg" >
</p>

---------------------------------------------------------------------------------------

It has 4 areas:
  1. Task categories
  2. This is a list of tasks from the SELECTED category in area 1
  3. This is a list of tasks from the SELECTED day in calendar in area 1
  4. Custom Calendar. If user has tasks at some time, that date is highlighted in color in calendar.
  
Areas 1,2,3 are scrolled.
The cap of each area is fixed and is not hidden during the collision.

In Titles of 1, 2 areas - the plus button allows you to add categories, tasks respectively.

Interaction between blocks is carried out as follows:
  1. When you select (by clicking) a category from area 1, a list of tasks of this category appears in area 2
      in area 1 - the selected category is highlighted by the background color.
  2. When you click on the cell of the calendar - the selected cell shows a stroke and in the area 3 - 
    the selected date of the calendar appears in the header, and below the list of tasks for this date.
  3. The application does not allow adding a task on any date WITHOUT attaching to any category.
Thus, the task can appear in area 3 only by clicking on the arrow icon, which appears after the mouse is over the required task.

Also:
1. When you hover on the list items in areas 1, 2, 3 - appears button (icon) "basket" when you click on which the element is deleted.
2. Tasks can be performed. The user can hover on one of the tasks and then the right arrow icon will appear. 
  After clicking on which that task will appear in the third area.
  
  Small gallary below will show some moments:

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/43217327-f8994c44-9049-11e8-8ea7-74fb22a77e43.jpg" >
</p>

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/43217369-231047b6-904a-11e8-98a6-8491d1860ed5.jpg" >
</p>

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/43217423-4402d704-904a-11e8-8cdb-196b759e4247.jpg" >
</p>

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/43217458-5f8ca19e-904a-11e8-9a6b-a674b5b07702.jpg" >
</p>
