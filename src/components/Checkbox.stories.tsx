import { Checkbox,} from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [(Story) => {
    return (
      <div className="gap-2 flex items-center">
      {Story()}
      <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    )
  }]
} as Meta;

export const Default: StoryObj = {};
