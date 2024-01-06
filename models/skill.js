const skills = [
    {id: 123444, skill: "Proficient in HTML, CSS, and JS"},
    {id: 123455, skill: "Positive Attitude"},
    {id: 123466, skill: "Hard Working"},
    {id: 123477, skill: "Problem-solver"}
];

module.exports = {
    getOne,
    getAll,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}