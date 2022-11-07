import { db } from '$lib/db'

const getTask = async (id: number) => {
  const { data } = await db.from('tasks').select('*').eq('id', id).single()

  return data
}

export const load = async ({ params }) => ({
  task: await getTask(params.id),
})
