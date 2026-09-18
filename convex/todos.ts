import { ConvexError, v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect()
    return todos
  },
})

export const addTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      isComplete: false,
    })

    return todoId
  },
})

export const toggleTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id)
    if (!todo) throw new ConvexError("Todo not found")

    await ctx.db.patch(args.id, {
      isComplete: !todo.isComplete,
    })
  },
})

export const deleteTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})
