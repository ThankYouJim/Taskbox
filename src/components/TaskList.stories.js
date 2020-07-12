import React from "react";
import PureTaskList from "./TaskList";
import { actionsData } from "./Task.stories";
import { defaultTasksData } from "./helper";

export default {
  component: PureTaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

console.warn("tastlist get", actionsData);

export const Default = () => (
  <PureTaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <PureTaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const Loading = () => (
  <PureTaskList loading tasks={[]} {...actionsData} />
);

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;
