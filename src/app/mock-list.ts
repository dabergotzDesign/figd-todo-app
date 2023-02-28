import { Task } from "./task"

export const Tasklist: Task[]=[
{
    id: 1,
    title: 'Create To Do App',
    description: 'create an application like the hotel app',
    dueDate: new Date('2023-02-28'),
    location: 'FiGD'
},
{
    id: 2,
    title: 'Fix ngmodel bug',
    description: 'ngmodel overwrites task & only edits last submitted task"',
    dueDate: new Date('2023-02-28'),
    location: 'Matrix'
},
{
    id: 3,
    title: 'Lunch',
    description: 'peepoFat',
    dueDate: new Date('2023-02-28'),
    location: 'FiGD'
},
]