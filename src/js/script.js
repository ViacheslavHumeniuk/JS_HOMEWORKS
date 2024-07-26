'use strict'
class Student {
  constructor (firstName, lastName, birthYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.grades = []
    this.attendance = new Array(25).fill(null)
  }

  getAge () {
    const currentYear = new Date().getFullYear()
    return currentYear - this.birthYear
  }

  addGrade (grade) {
    this.grades.push(grade)
  }

  getAverageGrade () {
    if (this.grades.length === 0) {
      return 0
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0)
    return sum / this.grades.length
  }

  present () {
    const index = this.attendance.indexOf(null)
    if (index !== -1) {
      this.attendance[index] = true
    } else {
      throw new Error('Attendance array is already full')
    }
  }

  absent () {
    const index = this.attendance.indexOf(null)
    if (index !== -1) {
      this.attendance[index] = false
    } else {
      throw new Error('Attendance array is already full')
    }
  }

  getAverageAttendance () {
    const attendedClasses = this.attendance.filter(status => status === true).length
    const totalClasses = this.attendance.filter(status => status !== null).length
    if (totalClasses === 0) {
      return 0
    }
    return attendedClasses / totalClasses
  }

  summary () {
    const averageGrade = this.getAverageGrade()
    const averageAttendance = this.getAverageAttendance()
    if (averageGrade > 90 && averageAttendance > 0.9) {
      return 'Молодець!'
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return 'Добре, але можна краще'
    } else {
      return 'Редиска!'
    }
  }
}

const student1 = new Student('Іван', 'Петренко', 2000)
const student2 = new Student('Вова', 'Шевченко', 1999)
const student3 = new Student('Олег', 'Коваль', 2001)

student1.addGrade(95)
student1.addGrade(85)
student1.addGrade(100)

student2.addGrade(70)
student2.addGrade(80)
student2.addGrade(90)

student3.addGrade(50)
student3.addGrade(60)
student3.addGrade(55)

for (let i = 0; i < 20; i++) {
  student1.present()
}

for (let i = 0; i < 15; i++) {
  student2.present()
}
for (let i = 0; i < 5; i++) {
  student2.absent()
}

for (let i = 0; i < 10; i++) {
  student3.present()
}
for (let i = 0; i < 10; i++) {
  student3.absent()

  console.log(`${student1.firstName} ${student1.lastName} summary: ${student1.summary()}`)
  console.log(`${student2.firstName} ${student2.lastName} summary: ${student2.summary()}`)
  console.log(`${student3.firstName} ${student3.lastName} summary: ${student3.summary()}`)
}
