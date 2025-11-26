import { z } from "zod"

import { clineMessageSchema, tokenUsageSchema } from "./message.js"
import { toolNamesSchema, toolUsageSchema } from "./tool.js"

/**
 * GalaxiaEventName
 */

export enum GalaxiaEventName {
	// Task Provider Lifecycle
	TaskCreated = "taskCreated",

	// Task Lifecycle
	TaskStarted = "taskStarted",
	TaskCompleted = "taskCompleted",
	TaskAborted = "taskAborted",
	TaskFocused = "taskFocused",
	TaskUnfocused = "taskUnfocused",
	TaskActive = "taskActive",
	TaskInteractive = "taskInteractive",
	TaskResumable = "taskResumable",
	TaskIdle = "taskIdle",

	// Subtask Lifecycle
	TaskPaused = "taskPaused",
	TaskUnpaused = "taskUnpaused",
	TaskSpawned = "taskSpawned",

	// Task Execution
	Message = "message",
	TaskModeSwitched = "taskModeSwitched",
	TaskAskResponded = "taskAskResponded",
	TaskUserMessage = "taskUserMessage",

	// Task Analytics
	TaskTokenUsageUpdated = "taskTokenUsageUpdated",
	TaskToolFailed = "taskToolFailed",

	// Configuration Changes
	ModeChanged = "modeChanged",
	ProviderProfileChanged = "providerProfileChanged",

	// Evals
	EvalPass = "evalPass",
	EvalFail = "evalFail",
}

/**
 * GalaxiaEvents
 */

export const GalaxiaEventsSchema = z.object({
	[GalaxiaEventName.TaskCreated]: z.tuple([z.string()]),

	[GalaxiaEventName.TaskStarted]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskCompleted]: z.tuple([
		z.string(),
		tokenUsageSchema,
		toolUsageSchema,
		z.object({
			isSubtask: z.boolean(),
		}),
	]),
	[GalaxiaEventName.TaskAborted]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskFocused]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskUnfocused]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskActive]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskInteractive]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskResumable]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskIdle]: z.tuple([z.string()]),

	[GalaxiaEventName.TaskPaused]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskUnpaused]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskSpawned]: z.tuple([z.string(), z.string()]),

	[GalaxiaEventName.Message]: z.tuple([
		z.object({
			taskId: z.string(),
			action: z.union([z.literal("created"), z.literal("updated")]),
			message: clineMessageSchema,
		}),
	]),
	[GalaxiaEventName.TaskModeSwitched]: z.tuple([z.string(), z.string()]),
	[GalaxiaEventName.TaskAskResponded]: z.tuple([z.string()]),
	[GalaxiaEventName.TaskUserMessage]: z.tuple([z.string()]),

	[GalaxiaEventName.TaskToolFailed]: z.tuple([z.string(), toolNamesSchema, z.string()]),
	[GalaxiaEventName.TaskTokenUsageUpdated]: z.tuple([z.string(), tokenUsageSchema]),

	[GalaxiaEventName.ModeChanged]: z.tuple([z.string()]),
	[GalaxiaEventName.ProviderProfileChanged]: z.tuple([z.object({ name: z.string(), provider: z.string() })]),
})

export type GalaxiaEvents = z.infer<typeof GalaxiaEventsSchema>

/**
 * TaskEvent
 */

export const taskEventSchema = z.discriminatedUnion("eventName", [
	// Task Provider Lifecycle
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskCreated),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskCreated],
		taskId: z.number().optional(),
	}),

	// Task Lifecycle
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskStarted),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskStarted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskCompleted),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskCompleted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskAborted),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskAborted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskFocused),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskFocused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskUnfocused),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskUnfocused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskActive),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskActive],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskInteractive),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskInteractive],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskResumable),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskResumable],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskIdle),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskIdle],
		taskId: z.number().optional(),
	}),

	// Subtask Lifecycle
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskPaused),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskPaused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskUnpaused),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskUnpaused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskSpawned),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskSpawned],
		taskId: z.number().optional(),
	}),

	// Task Execution
	z.object({
		eventName: z.literal(GalaxiaEventName.Message),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.Message],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskModeSwitched),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskModeSwitched],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskAskResponded),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskAskResponded],
		taskId: z.number().optional(),
	}),

	// Task Analytics
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskToolFailed),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskToolFailed],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.TaskTokenUsageUpdated),
		payload: GalaxiaEventsSchema.shape[GalaxiaEventName.TaskTokenUsageUpdated],
		taskId: z.number().optional(),
	}),

	// Evals
	z.object({
		eventName: z.literal(GalaxiaEventName.EvalPass),
		payload: z.undefined(),
		taskId: z.number(),
	}),
	z.object({
		eventName: z.literal(GalaxiaEventName.EvalFail),
		payload: z.undefined(),
		taskId: z.number(),
	}),
])

export type TaskEvent = z.infer<typeof taskEventSchema>
