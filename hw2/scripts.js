// Helpful jQuery cheatsheet at https://oscarotero.com/jquery/

function Course(number, title, sections) {
	// assign values passed to prototype
    this.number = number;
    this.title = title;
    this.sections = sections;
}

function Section(number, instructor, schedule, location) {
    // assign values passed to prototype
    this.number = number;
    this.instructor = instructor;
    this.schedule = schedule;
    this.location = location;
}

function Registration(course, title, section, instructor, schedule, location) {
    // assign values passed to prototype
    this.course = course;
    this.title = title;
    this.section = section;
    this.instructor = instructor;
    this.schedule = schedule;
    this.location = location;
}

var courseCatalog;
var controls;
var lists;
var events;

window.onload = function () {

    courseCatalog = [
        new Course("CSE3330", "DATABASE CONCEPTS", [
            new Section("342", "Steve Labova", "TuTh 11:00AM - 12:20PM", "Junkins Building 0318"),
            new Section("334", "Matthew Mathis", "W 8:00AM - 9:50AM", "Caruth Hall 0110"),
            new Section("311", "Steve Labova", "MW 11:00AM - 12:20PM", "Junkins Building 0212"),
        ]),
        new Course("CSE3339", "INFORMATION ASSURANCE AND SECURITY", [
            new Section("331", "Karen McBride", "W 8:00AM - 9:50AM", "Junkins Building 0112"),
            new Section("222", "Steve Labova", "TuTh 11:00AM - 12:20PM", "Caruth Hall 0101"),
            new Section("441", "John Stanton", "TuTh 3:30PM - 4:50PM", "Embrey Engineering Bldg 0102"),
        ]),
        new Course("CSE3342", "PROGRAMMING LANGUAGES", [
            new Section("513", "Darren Jetson", "M 5:00PM - 6:50PM", "Embrey Engineering Bldg 0129"),
            new Section("541", "Karen McBride", "MW 3:30PM - 4:50PM", "Junkins Building 0222"),
            new Section("204", "Karen McBride", "TuTh 3:30PM - 4:50PM", "Caruth Hall 0110"),
        ]),
        new Course("CSE3345", "GRAPHICAL USER INTERFACE DESIGN AND IMPLEMENTATION", [
            new Section("629", "Tina Dollar", "TuTh 1:00PM - 3:20PM", "Embrey Engineering Bldg 0111"),
            new Section("532", "Matthew Mathis", "MW 5:00PM - 6:20PM", "Embrey Engineering Bldg 0232"),
            new Section("546", "Darren Jetson", "W 5:00PM - 6:50PM", "Junkins Building 0212"),
        ]),
        new Course("CSE3353", "FUNDAMENTALS OF ALGORITHMS", [
            new Section("456", "Tina Dollar", "MW 5:00PM - 6:30PM", "Caruth Hall 0012"),
            new Section("564", "Karen McBride", "MW 1:00PM - 3:20PM", "Caruth Hall 0012"),
            new Section("556", "Matthew Mathis", "W 5:00PM - 6:50PM", "Caruth Hall 0284"),
        ]),
        new Course("CSE3365", "INTRODUCTION TO SCIENTIFIC COMPUTING", [
            new Section("353", "Tina Dollar", "TuTh 5:00PM - 6:20PM", "Caruth Hall 0484"),
            new Section("327", "John Stanton", "M 1:00PM - 3:50PM", "Caruth Hall 0484"),
            new Section("395", "Tina Dollar", "TuTh 1:00PM - 3:20PM", "Caruth Hall 0484"),
        ]),
    ];

    controls = {
        fallRegistrationTableBody: $('#fall-table'), // apply selector for fall registation table body
        springRegistrationTableBody: $('#spring-table'), // apply selector for spring registation table body
       
        noFallRegistrationMessage: $('#fall-alert'), // apply selector for no fall registation message
        noSpringRegistrationMessage: $('#spring-alert'), // apply selector for no spring registation message
        
        // apply selector for semester field (select)
        semesterField: $('#semester-select').append('<option></option><option value = "0">Fall 2017</option><option value ="1">Spring 2018</option>'), 
        
        // apply selector for course field (select)
        courseField: $('#course-select'),
        // append(
        // `<option value = "0">${courseCatalog[0].number}-${courseCatalog[0].title}</option>
        // <option value = "1">${courseCatalog[1].number}-${courseCatalog[1].title}</option>
        // <option value = "2">${courseCatalog[2].number}-${courseCatalog[2].title}</option>
        // <option value = "3">${courseCatalog[3].number}-${courseCatalog[3].title}</option>
        // <option value = "4">${courseCatalog[4].number}-${courseCatalog[4].title}</option>`),
        
        // apply selector for section field (select)
        sectionField: $('#section-select')
    };

    lists = {
        fall: [],
        spring: []
    };

    events = {
        onRegistrationChange: function () { // this method will be called from JavaScript below
            var bindTable = function (list, tableBody, noItemMessage) {
                var result = '';

                list.forEach(function (registration) {
                    // build html row using string
                });

                // use tableBody.html method to assign result

                // if list.length, hide noItemMessage (use hide method) and show tableBody's parent (use parent method)
                // else show noItemMessage (use show method) and hide tableBody's parent (use parent method)
            };

            // call bindTable w/ list.fall, controls.fallRegistrationTableBody and controls.noFallRegistrationMessage
            // do same for spring
        },
        onSemeseterChange: function () { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            courseCatalog.forEach(function (c, i) {
                // c = course, i = index
                // add course option to resulting string
                // format: <option value="0">CSE3345 - GRAPHICAL USER INTERFACE DESIGN AND IMPLEMENTATION</option>
                // (0 = i)
                courseField.append(`<option value = "${i}">${courseCatalog[i].number}-${courseCatalog[i].title}</option>`)


            });

            // set result to controls.courseField.html
        },
        onCourseChange: function() { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            var courseIndex = +controls.courseField.val();
            var course = undefined; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array

            course.sections.forEach(function(s, i) {
                // s = section, i = index
                // add section option to result string
                // format: <option value="0">TuTh 11:00AM - 12:20PM (Steve Labova)</option>
                // (0 = i)
            });

            // set result to controls.sectionField.html
        },
        onAddCourseClick: function() { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var semesterIndex = +controls.semesterField.val(); // instead of undefined, retreive val from controls.semesterField (use + to convert string to number)
            var courseIndex = +controls.courseField.val(); // instead of undefined, retreive val from controls.courseField (use + to convert string to number)
            var sectionIndex = +controls.sectionField.val(); // instead of undefined, retreive val from controls.sectionField (use + to convert string to number)

            var course = undefined; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array
            var section = undefined; // instead of undefined, use sectionIndex to assign to the right section in the course.sections array

            var registration = new Registration(); // populate arguments of contructor from course and section

            // switch on semesterIndex
            // if 0, add registation to lists.fall
            // if 1, add registation to lists.spring

            // call event.onRegistrationChange

            // use val method to set value of controls.semesterField to '', thereby clearing selection
            // do the same for courseField and sectionField 
            controls.semesterField.val() = '';
            controls.courseField.val() = '';
            controls.sessionField.val() = '';
            
        }
    };

    // call event.onRegistrationChange to do initial binding, showing and hiding
}
