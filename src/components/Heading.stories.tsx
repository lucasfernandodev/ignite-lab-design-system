import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Ignite lab - design system",
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const customComponent:StoryObj<HeadingProps> = {
  args: { 
    asChild: true,
    children: (
      <h1>Titulo dentro de uma tag h1</h1>
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
  },
 }
