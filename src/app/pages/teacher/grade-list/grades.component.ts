import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-grade-list',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
    options: DataTables.Settings = {};
    pageTitle: string = 'Grades';
    rows: Array<any> = [
        {
          date: '18 March',
          course: "Learning about the compass",
          due_date: "3 days",
          papers_to_mark: "21",
        },
        {
          date: '18 March',
          course: "Course about something else",
          due_date: "9 days",
          papers_to_mark: "21",
        },
        {
          date: '18 March',
          course: "Learning about the compass",
          due_date: "13 days",
          papers_to_mark: "0",
        },
        {
          date: '18 March',
          course: "Course about something else",
          due_date: "13 days",
          papers_to_mark: "1",
        },
        {
          date: '18 March',
          course: "Learning about the compass",
          due_date: "3 days",
          papers_to_mark: "221",
        }
    ];
    
    columns: Array<any> = [
    {
        title: "Date",
        name: "date"
    },
    {
        title: "Course",
        name: "course"
    },
    {
        title: "Due Date",
        name: "due_date"
    },
    {
        title: "Papers to Mark",
        name: "papers_to_mark"
    },
    ];
    constructor() {
    }

    ngOnInit() {
      console.log(this.rows);
        this.options = {
            autoWidth: false,
            responsive: true,
            language: {
              searchPlaceholder: "Search for records..."
            },
            lengthMenu: [[15, 30, 45, -1], ['15 Rows', '30 Rows', '45 Rows', 'Everything']],
            "dom": '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
        };
    }

}
