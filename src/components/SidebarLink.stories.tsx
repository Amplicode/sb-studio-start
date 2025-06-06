import type { Meta, StoryObj } from "@storybook/react";
import { SidebarLink } from "./SidebarLink";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Components/SidebarLink",
  component: SidebarLink,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
  decorators: [
    (Story) => {
      return <BrowserRouter>{Story()}</BrowserRouter>;
    },
  ],
} satisfies Meta<typeof SidebarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ children, ...props }) => {
    return <SidebarLink {...props}>{children}</SidebarLink>;
  },
  args: {
    to: "to",
    children: "SidebarLink",
  },
};
