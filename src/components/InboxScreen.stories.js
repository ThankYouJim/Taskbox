import React from "react";
import { action } from "@storybook/addon-actions";
import { PureInboxScreen } from "./InboxScreen";
import { defaultTasksData } from "../utils/helpers";

const MyContext = React.createContext();
const MyProvider = MyContext.Provider;

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <MyProvider store={store}>{story()}</MyProvider>],
};

const store = {
  getState: () => ({ tasks: defaultTasksData }),
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
