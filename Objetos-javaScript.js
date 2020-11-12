var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//**¿Cómo harías print/log de la edad de John? */
for(var i=0; i<users.length; i++){
    if(users[i].name=="John"){
        console.log(users[i].age);
    }
}

//**¿Cómo harías print/log del nombre del primer objeto? */
console.log(users[0].name);

//**¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?  */
for(var j=0; j<users.length;j++){
    console.log(users[j].name+" - "+users[j].age)
  }

//**¿Cómo harías para imprimir el nombre de los mayores de edad??  */
for(var k=0; k<users.length; k++){
    if(users[k].age>=18){
      console.log(users[k].name)
    }
  }