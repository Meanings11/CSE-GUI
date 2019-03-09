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
        fallRegistrationTableBody: $('#fall-tbody'), // apply selector for fall registation table body
        springRegistrationTableBody: $('#spring-tbody'), // apply selector for spring registation table body
       
        noFallRegistrationMessage: $('#fall-alert'), // apply selector for no fall registation message
        noSpringRegistrationMessage: $('#spring-alert'), // apply selector for no spring registation message
        
        // apply selector for semester field (select)
        semesterField: $('#semester-select').append('<option></option><option value = "0">Fall 2017</option><option value ="1">Spring 2018</option>'), 
        
        // apply selector for course field (select)
        courseField: $('#course-select'),
       
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
                    result += `<tr><td>${registration.course}</td><td>${registration.title}</td><td>${registration.section}</td><td>${registration.instructor}</td><td>${registration.schedule}</td><td>${registration.location}</td></tr>`;
                });

                // use tableBody.html method to assign result
                tableBody.html(result);

                // if list.length, hide noItemMessage (use hide method) and show tableBody's parent (use parent method)
                if(list.length>0){
                    noItemMessage.hide();
                    tableBody.parent().show();
                }
                // else show noItemMessage (use show method) and hide tableBody's parent (use parent method)
                else{
                    noItemMessage.show();
                    tableBody.parent().hide();
                }
            };

            // call bindTable w/ list.fall, controls.fallRegistrationTableBody and controls.noFallRegistrationMessage
            // do same for spring
            bindTable(lists.fall,controls.fallRegistrationTableBody,controls.noFallRegistrationMessage);
            bindTable(lists.spring,controls.springRegistrationTableBody,controls.noSpringRegistrationMessage);
        },
        onSemesterChange: function () { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            courseCatalog.forEach(function (c, i) {
                // c = course, i = index
                // add course option to resulting string
                // format: <option value="0">CSE3345 - GRAPHICAL USER INTERFACE DESIGN AND IMPLEMENTATION</option>
                // (0 = i)
                result += `<option value = "${i}">${courseCatalog[i].number} - ${courseCatalog[i].title}</option>`;

            });

            // set result to controls.courseField.html
            controls.courseField.html(result);
        },
        onCourseChange: function() { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var result = '<option></option>'; // this ensures empty default option

            var courseIndex = +controls.courseField.val();
            var course = courseCatalog[courseIndex]; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array

            course.sections.forEach(function(s, i) {
                // s = section, i = index
                // add section option to result string
                // format: <option value="0">TuTh 11:00AM - 12:20PM (Steve Labova)</option>
                // (0 = i)
                result += `<option value = "${i}">${course.sections[i].schedule} ( ${course.sections[i].instructor})</option>`;
            });

            // set result to controls.sectionField.html
            controls.sectionField.html(result);
        },
        onAddCourseClick: function() { // this method needs to be called from html at the appropriate time. Don't forget "events."
            var semesterIndex = +controls.semesterField.val(); // instead of undefined, retreive val from controls.semesterField (use + to convert string to number)
            var courseIndex = +controls.courseField.val(); // instead of undefined, retreive val from controls.courseField (use + to convert string to number)
            var sectionIndex = +controls.sectionField.val(); // instead of undefined, retreive val from controls.sectionField (use + to convert string to number)

            var course = courseCatalog[courseIndex]; // instead of undefined, use courseIndex to assign to the right course in the courseCatalog array
            var section = course.sections[sectionIndex]; // instead of undefined, use sectionIndex to assign to the right section in the course.sections array

            var registration = new Registration(course.number,course.title,section.number,section.instructor,section.schedule,section.location); // populate arguments of contructor from course and section

            // switch on semesterIndex
            // if 0, add registation to lists.fall
            // if 1, add registation to lists.spring
            if(semesterIndex)
                lists.spring.push(registration);
            else
                lists.fall.push(registration);

            // call event.onRegistrationChange
            events.onRegistrationChange();
            // use val method to set value of controls.semesterField to '', thereby clearing selection
            // do the same for courseField and sectionField 
            controls.semesterField.val('');
            controls.courseField.val('');
            controls.sectionField.val('');

            $('#exampleModal').modal('toggle')
        }
    };

    // call events.onRegistrationChange to do initial binding, showing and hiding
    events.onRegistrationChange();
    
}
