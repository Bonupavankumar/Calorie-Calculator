let table = [];
var id = 5;
let data = [
    {
        "id": "1",

        "date":"2022-03-04",
        "FirstName":"Pavan Kumar",
        "Calories": 2550,
        "TargetCalorie": 2550,
        "AchivedCalories": "true",
        "CaloriesBurned":2000 ,
        "TargetBurned": 2000,
        "AchievedBurned": "true",

    }
]

$(document).ready(function () {
    table = $('#example').DataTable({
       data:data,

        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'id' },
            { data: 'date' },
            { data: 'FirstName' },
           
            { data: 'Calories' },
            { data: 'TargetCalorie' },
            { data: 'AchivedCalories' },
            { data: 'CaloriesBurned' },
            { data: 'TargetBurned' },
            { data: 'AchievedBurned' },
            {

                data: null,

                render: function (data) {

                    return `<button class=" bg-success showrow" onclick="editbtn(${data.id})" >Edit</button><button class=" bg-danger btnDelete " onclick="del(${data.id})">Delete</button>`;
                }
            }
        ],

        "pageLength": 6

    });


    $('#example tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
    //delete and edit
    $('#example').on('click', '.btnDelete', function () {
        // if (confirm(`DO YOU WANT TO DELETE `)) {
            $(this).closest('tr').remove();
        //}

    });
    $('#example tbody').on('click', '.showrow', function () {

        // if (confirm(`DO YOU WANT TO EDIT +`)) {
            // alert("id is"+id);
            $("#exampleModal").modal("show");
            document.getElementById("firstName").value = (data[this.id]).firstName;
            document.getElementById("lastName").value = (data[this.id]).lastName;
            document.getElementById("dob").value = (data[this.id]).dob;
            document.getElementById("year").value = (data[this.id]).year;
            document.getElementById("email").value = (data[this.id]).email;
            document.getElementById("address").value = (data[this.id]).address;
        

    });
});
var idCount = 1;
const parent = document.getElementById("parent");
const add = document.getElementById("btn-add");
var i = 3


function delclick(del) {
    delItem = del.parentNode.parentNode
    console.log(delItem);
    delItem.remove()
}
register = []
const register1 = []
var date = document.getElementById('date').value;

var FirstName = document.getElementById('FirstName').value;
var Calories = document.getElementById('Calories').value;
var TargetCalorie = document.getElementById('TargetCalorie').value;

var AchivedCalories=document.getElementById('AchivedCalories').value;
var CaloriesBurned = document.getElementById('CaloriesBurned').value;

var TargetBurned = document.getElementById('TargetBurned').value;
var AchievedBurned = document.getElementById('AchievedBurned').value;

function editbtn(edit) {
    alert("you are edit row "+edit);
}
function del(deleteidone) {
    alert("are you sure you want to delete row:"+deleteidone);
}