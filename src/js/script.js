'use strict'

const skillsRequirements = ['HTML', 'CSS', 'JS', 'React', 'Vue', 'NodeJS']
const skillsList = ['HTML', 'CSS', 'JS']

const createCandidate = function (name = 'Name not provided', skills = []) {
  return { name, skills }
}

const addRequirements = function (skill, listOfRequirements) {
  listOfRequirements.push(skill)
}

addRequirements('Angular', skillsRequirements)

const candidates = [
  createCandidate('Іван', ['HTML', 'CSS', 'JS']),
  createCandidate('Марія', ['HTML', 'React', 'NodeJS']),
  createCandidate('Петро', ['HTML', 'CSS', 'Angular'])
]

const evaluateFunction = (candidate) => {
  let totalScore = 0
  let totalSkills = 0

  for (let i = 0; i < candidate.skills.length; i++) {
    const skill = candidate.skills[i]
    if (skillsRequirements.includes(skill)) {
      totalScore += Math.floor(Math.random() * 101)
      totalSkills++
    }
  }

  const averageScore = totalSkills > 0 ? totalScore / totalSkills : 0
  return Math.floor(averageScore)
}

const planInterviews = function (candidates, requirements, evaluateFunction) {
  const interviewResults = []
  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i]
    const result = evaluateFunction(candidate)
    interviewResults.push({
      candidate: candidate.name,
      score: result
    })
  }
  return interviewResults
}

const interviewResults = planInterviews(candidates, skillsRequirements, evaluateFunction)
console.log(interviewResults)
