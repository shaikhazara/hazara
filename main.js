// function loadjson(file,callback) {
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange = function(){
// 	if(xhr.readyState === 4 && xhr.status == "200"){
// 		callback(xhr.responseText);
// 	}
// };
// xhr.send(null);
// }
// loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.educationalqualification);
// 	skillset(data.skills);
// 	achievement(data.achievements);
// })
 function loadjson(file){
 	return new Promise((resolve,reject)=>{
 		return fetch(file).then(response=>{
 			if(response.ok){
 				resolve(response.json());
 			}
 			else{
 				reject(new Error('error'));
 			}
 		})
 		
 	})
 }
 var newfile=loadjson("data.json");
 newfile.then(data=>{
	console.log(data);
 	basics(data.details);
 	careerinfo(data.career);
 	educationinfo(data.educationalqualification);
 	skillset(data.skills);
	achievement(data.achievements);
 })
var left=document.querySelector(".left");
function basics(det){
	img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
	name1.textContent=det.name;
	left.appendChild(name1);
	var phoneno1=document.createElement("h3");
	phoneno1.textContent=det.phoneno;
	left.appendChild(phoneno1);
	var email1=document.createElement("h3");
	email1.textContent=det.email;
	left.appendChild(email1);
	var address1=document.createElement("h2");
	address1.textContent="address";
	left.appendChild(address1);
	var hrz=document.createElement("hr");
	left.appendChild(hrz);
	var details1=document.createElement("h3");
	details1.textContent=det.address;
	left.appendChild(details1);
}
var right=document.querySelector(".right");
function careerinfo(det){
	var career1=document.createElement("h3");
	career1.textContent="info";
	right.appendChild(career1);
	var hrz=document.createElement("hr");
	right.appendChild(hrz);
	var career2=document.createElement("p");
	career2.textContent=det.info;
	right.appendChild(career2);
}
function educationinfo(edu){
	var table1=document.createElement("h2");
	table1.textContent="educational qualification";
	right.appendChild(table1);
	var hrz1=document.createElement("hr");
	right.appendChild(hrz1);
	var table2=document.createElement("table");
	table2.border="1";
	right.appendChild(table2)
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].passingyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table2.innerHTML=tabledata;
}
function skillset(sk){
	var skill=document.createElement("h1");
	skill.textContent="skills";
	right.appendChild(skill);
	var hrz2=document.createElement("hr");
	right.appendChild(hrz2);
 for(i=0;i<sk.length;i++)
 {
	var s=document.createElement("h3");
	s.textContent=sk[i].title;
 	right.appendChild(s); 
    var ul=document.createElement("ul");
	var li=document.createElement("li");
	 li.textContent=sk[i].info;
	 ul.appendChild(li);
	right.appendChild(ul);
	 }
}
function achievement(achi){
	var ac=document.createElement("p");
	ac.textContent="achievements";
	right.appendChild(ac);
	var hrz3=document.createElement("hr");
	right.appendChild(hrz3);
	for(i=0;i<achi.length;i++){
		var s=document.createElement("h3");
		s.textContent=achi[i].title;
		right.appendChild(s);
		var d=document.createElement("ul");
		var l=document.createElement("li");
		l.textContent=achi[i].info;
		d.appendChild(l);
		right.appendChild(l);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}




