import { db } from 'shared/lib'

export const getAllTasks = async () => {
  const { data } = await db.from('tasks').select('*').order('updated_at')

  return data ?? []
}

export const getTask = async (id: number) => {
  const { data } = await db.from('tasks').select('*').eq('id', id).single()

  return data
}

export const getLatestTask = async () => {
  const { data } = await db.from('tasks').select('*').order('updated_at').limit(1).single()

  return data
}
