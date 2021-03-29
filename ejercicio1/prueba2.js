const persons = [
    {
        name: 'Jesica',
        age: 30,
        height: 164,
        weight: 68,
        nationality: null,
        profession: 'developer'
    },
    {
        name: 'carlos',
        age: 40,
        height: 184,
        weight: 138,
        nationality: 'colombian',
        profession: 'developer'
    }, {
        name: 'jonh',
        age: 17,
        height: 189,
        weight: 89,
        nationality: 'american',
        profession: 'student'
    },
    {
        name: 'Maria',
        age: 10,
        height: 140,
        weight: 30,
        nationality: 'mexican',
        profession: null
    }
]
const byAge = (age) => { return persons.filter(person => person.age === age) }
const byNationality = (nationality) => { return persons.filter(person => person.nationality === nationality) }
const byProfession = (profession) => { return persons.filter(person => person.profession === profession) }

class FilterBy {
    createFilter = (by, value) => {
        switch (by) {
            case 'age':
                return byAge(value);
                break;
            case 'nationality':
                return byNationality(value);
                break;
            case 'profession':
                return byProfession(value);
                break;
            default:
                break;
        }
    }
}
const filterBy = new FilterBy();
console.log(filterBy.createFilter('nationality', 'american'))
console.log(filterBy.createFilter('profession', null))
console.log(byAge(30))
