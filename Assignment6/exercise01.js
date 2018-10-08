
function gradesData() {

    this.arr = [{
        id: 1,
        name: "Asaad Saad",
        course: "CS572",
        grade: "95"
    }];

    this.getId = (id) => {
        return this.arr.filter((x) => x.id == id);
    }

    this.create = (id, name, course, grade) => {
        this.arr.push({
            id: id,
            name: name,
            course: course,
            grade: grade
        });
    }

    this.update = (id, name, course, grade) => {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id == id) {
                this.arr[i].name = name;
                this.arr[i].course = course;
                this.arr[i].grade = grade;
            }
        }
    }

    this.delete = (id) => {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id == id) {
                this.arr.splice(i, 1);
            }
        }
    }
}
var express = require('express');
var app = express();

// using cors
var cors = require('cors');
app.use(cors());

// using morgan
var morgan = require('morgan');
app.use(morgan('combined'));

// using validation
var validator = require('express-validator');
app.use(validator());

// to read form data in case(post requests)
app.use(express.urlencoded());

// import our entity
var grades = new gradesData;

// get requests (retrive entry)
app.get('/api/:id', (req, res, next) => {
    res.setHeader('content-type', 'application/json');
   
    var arr = grades.getId(req.params.id);
    res.end(JSON.stringify(arr));

});

//create
app.post('/api/', (req, res, next) => {
    res.setHeader('content-type', 'application/json');

    var id = req.body.id;
    var name = req.body.name;
    var course = req.body.course;
    var grade = req.body.grade;
    grades.create(id, name, course, grade);
    var arr = grades.getId(id);
    res.end(JSON.stringify(arr));
});

// update
app.put('/api/', (req, res, next) => {
    

    var id = req.body.id;
    var name = req.body.name;
    var course = req.body.course;
    var grade = req.body.grade;

    grades.update(id, name, course, grade);
    res.end("Put request done");

});

// delete 
app.delete('/api/', (req, res, next) => {
    var id = req.body.id;
    grades.delete(id);
    res.end("delete request done");
    
});



// configuration
app.listen(8080, () => {
    console.log("Listening to 8080");
});
console.log('ended');