import { db } from '$lib/db'

const getAllTasks = async () => {
  const { data } = await db.from('tasks').select('*').order('updated_at')

  return data ?? []
}

export const load = async () => ({
  tasks: await getAllTasks(),
})
