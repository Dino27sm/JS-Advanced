function constructionCrew(inpObject){
    if(inpObject['dizziness'] == true){
        inpObject['levelOfHydrated'] += (inpObject['weight'] * 0.1 * inpObject['experience']);
        inpObject['dizziness'] = false;
    }
    return inpObject;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
