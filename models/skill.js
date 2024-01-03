const skills = [
    {id: 123444, skill: "Proficient in HTML, CSS, and JS"},
    {id: 123455, skill: "Positive Attitude"},
    {id: 123466, skill: "Hard Working"},
    {id: 123477, skill: "Problem-solver"}
];

module.exports = {
    getOne,
    getAll
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}