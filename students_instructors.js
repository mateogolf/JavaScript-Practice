function printNames(arr){
    for(var i=0;i<arr.length;i++){
        console.log(i + " - " + arr[i].first_name +
            " " + arr[i].last_name  + " - " + 
            (arr[i].first_name.length + arr[i].last_name.length));
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

// printNames(students);
// function printNames(obj={}){
//     var categories = Object.keys(obj);
//     for(var group=0;group<categories.length;i++){
//         console.log(categories[i]);
//         for(var i=0;i<obj.categories[group].length;i++){
//             console.log(i + " - " + arr[i].first_name +
//                 " " + arr[i].last_name  + " - " + 
//                 (arr[i].first_name.length + arr[i].last_name.length));
//         }
//     }
// }

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
// printNames(users);
var groups = Object.keys(users);
console.log(groups[0]);
printNames(users.Students);
console.log(groups[1]);
printNames(users.Instructors);