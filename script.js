let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  console.log(pets);
  ​
  ​//get age//
  
  let getAge =pet  =>new Date().getFullYear() - pet.bornOn 

  //push age//
  ​
  let petsWithAge = pets.map(pet=>pet)
  petsWithAge.forEach (pet => pet.age = getAge(pet))
   console.log(petsWithAge);
  
  ​//get type dog//
  
  console.log(pets.filter(pet=>pet.type==`dog`));
  
  //get name// 

  let jasper;
  pets.forEach(pet =>pet.name ==`Jasper`? jasper=pet : jasper=`` )
  console.log(`Jasper is ${jasper.age} years old`);