import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Bem vindo de volta!",
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const customComponent:StoryObj<TextProps> = {
  args: { 
    asChild: true,
    children: (
      <p>Texto dentro da tag p</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
 }
