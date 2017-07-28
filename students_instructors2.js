function printNames(arr){
    for(var i=0;i<arr.length;i++){
        console.log((i+1) + " - " + arr[i].first_name +
            " " + arr[i].last_name  + " - " + 
            (arr[i].first_name.length + arr[i].last_name.length));
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

printNames(students);

function printUsers(obj={}){
    for(var key in obj){
        console.log(key);
        // var arr = obj[key];
        printNames(obj[key]);
    }
}

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

printUsers(users);