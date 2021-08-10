import React from "react";
import PureTaskList from "./TaskList";
import { actionsData } from "./Task.stories";
import { defaultTasksData } from "../utils/helpers";
import { TASK_STATUS } from "../utils/constants";

export default {
  component: PureTaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: TASK_STATUS.PINNED },
];

const withArchivedTasksData = [
  ...defaultTasksData.slice(0, 2),
  { id: "3", title: "Task 3 (archived)", state: TASK_STATUS.ARCHIVED },
  ...defaultTasksData.slice(3),
];

export const Default = () => (
  <PureTaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <PureTaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const WithArchivedTasks = () => (
  <PureTaskList tasks={withArchivedTasksData} {...actionsData} />
);

export const Loading = () => (
  <PureTaskList loading tasks={[]} {...actionsData} />
);

export const Empty = () => <PureTaskList tasks={[]} {...actionsData} />;
