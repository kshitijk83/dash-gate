import { students } from './helpers/students';
export const createStudents = (num: number = 10): student[] => {
    const studentsArr: student[] = [];
    for (let i = 0; i < num; i++) {
        studentsArr.push(students[Math.floor(Math.random() * students.length)]);
    }
    return studentsArr;
};
