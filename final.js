function a()
{
 var val1=document.getElementById('val1').value;
 var val2=document.getElementById('val2').value;
 var val3=document.getElementById('val3').value;
 var val4=document.getElementById('val4').value;
 var val5=parseInt(document.getElementById('val2').value);
 var val6=document.getElementById('val6').value;

 document.getElementById('name1').innerHTML=val1;
 document.getElementById('name2').innerHTML=val2;
 document.getElementById('name3').innerHTML=val3;
 document.getElementById('dob').innerHTML=val4;
 document.getElementById('num').innerHTML=val5;
 document.getElementById('email').innerHTML=val6;
}