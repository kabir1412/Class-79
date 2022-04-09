name_of_the_student=[];

function submit(){
var name_1=document.getElementById("student_1").value;
var name_2=document.getElementById("student_2").value;
var name_3=document.getElementById("student_3").value;
var name_4=document.getElementById("student_4").value;

name_of_the_student.push(name_1);
name_of_the_student.push(name_2);
name_of_the_student.push(name_3);
name_of_the_student.push(name_4);
console.log(name_of_the_student);

document.getElementById("empty_div").innerHTML=name_of_the_student;
document.getElementById("button_submit").style.display="none";
document.getElementById("button_sort").style.display="inline-block";  


}
function sort(){
name_of_the_student.sort();
console.log(name_of_the_student);
document.getElementById("empty_div").innerHTML=name_of_the_student;
}
